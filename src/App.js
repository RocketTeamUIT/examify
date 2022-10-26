import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes';
import { DefaultLayout } from './layouts';

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
