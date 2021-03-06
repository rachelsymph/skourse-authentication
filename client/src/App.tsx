import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import routes from './constants/routes';
import ErrorLoginPage from './pages/ErrorLoginPage';
import LoginPage from './pages/LoginPage';
import LoginSuccess from './pages/LoginSuccess';
import WelcomePage from './pages/WelcomePage';
import { AuthProvider } from './provider/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={routes.BASE} element={<>Hello World</>} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.LOGIN_ERROR} element={<ErrorLoginPage />} />
          {/* Protected Routes */}
          <Route
            path={routes.LOGIN_SUCCESS}
            element={
              <RequireAuth>
                <LoginSuccess />
              </RequireAuth>
            }
          />
          <Route
            path={routes.WELCOME}
            element={
              <RequireAuth>
                <WelcomePage />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
