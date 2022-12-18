import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes';
import { DefaultLayout } from './layouts';
import SuspenseLayout from './layouts/SuspenseLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <SuspenseLayout>
        {/* App */}
        <div className="bg-bg_white">
          <Routes>
            {publicRouters.map((route, index) => {
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
