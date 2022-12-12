import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes';
import { DefaultLayout, ExamDetailLayout } from './layouts';
import { useSelector } from 'react-redux';
import SuspenseLayout from './layouts/SuspenseLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { isLoading } = useSelector((store) => store.auth);

  return (
    <Router>
      <SuspenseLayout isLoading={isLoading}>
        {/* App */}
        <div className="bg-bg_white">
          <Routes>
            {publicRouters.map((route, index) => {
              // Check if nested route
              if (Array.isArray(route)) {
                return (
                  <Route key={index} element={<ExamDetailLayout />}>
                    {route.map((subRoute, i) => {
                      const Page = subRoute.component;
                      return <Route key={i} path={subRoute.path} element={<Page />} />;
                    })}
                  </Route>
                );
              }

              let Layout;
              const Page = route.component;

              if (route.layout === null) {
                Layout = Fragment;
              } else if (route.layout === undefined) {
                Layout = DefaultLayout;
              } else {
                Layout = route.layout;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          theme="light"
        />
      </SuspenseLayout>
    </Router>
  );
};

export default App;
