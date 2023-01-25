import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes';
import { DefaultLayout } from './layouts';
import SuspenseLayout from './layouts/SuspenseLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateLayout from './layouts/PrivateLayout';
import 'react-tooltip/dist/react-tooltip.css';

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
              const MainPrivateLayout = route.privateRoute ? PrivateLayout : Fragment;

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
                    <MainPrivateLayout>
                      <Layout>
                        <Page />
                      </Layout>
                    </MainPrivateLayout>
                  }
                >
                  {Array.isArray(route.children) &&
                    route.children.map((childRoute, index) => {
                      const ChildPrivateLayout = childRoute.privateRoute ? PrivateLayout : Fragment;
                      const props = childRoute.privateRoute ? { excludeFooter: true, excludeHeader: true } : {};
                      const SubPage = childRoute.component;
                      return (
                        <Route
                          key={index}
                          path={childRoute.path}
                          element={
                            <ChildPrivateLayout {...props}>
                              <SubPage />
                            </ChildPrivateLayout>
                          }
                        />
                      );
                    })}
                </Route>
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
