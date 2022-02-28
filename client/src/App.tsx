import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './constants/routes';
import { AccountContext } from './context/AccountContext';
import LoginPage from './pages/LoginPage';
import LoginSuccess from './pages/LoginSuccess';
import WelcomePage from './pages/WelcomePage';

function App() {
  const account = null;
  return (
    <AccountContext.Provider value={account}>
      <Router>
        <Routes>
          <Route path={routes.BASE} element={<>Hello World</>} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.LOGIN_SUCCESS} element={<LoginSuccess />} />
          <Route path={routes.WELCOME} element={<WelcomePage />} />
        </Routes>
      </Router>
    </AccountContext.Provider>
  );
}

export default App;
