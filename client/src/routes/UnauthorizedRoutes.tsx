import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../constants/routes';
import ErrorLoginPage from '../pages/ErrorLoginPage';
import LoginPage from '../pages/LoginPage';
import LoginSuccess from '../pages/LoginSuccess';

type Props = {};

export default function UnauthorizedRoutes(props: Props) {
  return (
    <Router>
      <Routes>
        <Route path={routes.BASE} element={<>Hellow World</>} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.LOGIN_SUCCESS} element={<LoginSuccess />} />
        <Route path={routes.LOGIN_ERROR} element={<ErrorLoginPage />} />
      </Routes>
    </Router>
  );
}
