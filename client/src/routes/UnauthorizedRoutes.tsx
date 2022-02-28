import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../constants/routes';
import LoginPage from '../pages/LoginPage';
import LoginSuccess from '../pages/LoginSuccess';
import WelcomePage from '../pages/WelcomePage';

type Props = {};

export default function UnauthorizedRoutes(props: Props) {
  return (
    <Router>
      <Routes>
        <Route path={routes.BASE} element={<>Hellow World</>} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.LOGIN_SUCCESS} element={<LoginSuccess />} />
        <Route path={routes.WELCOME} element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}
