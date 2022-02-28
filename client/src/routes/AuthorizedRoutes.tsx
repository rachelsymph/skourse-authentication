import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../constants/routes';
import LoginSuccess from '../pages/LoginSuccess';

type Props = {};

export default function AuthorizedRoutes(props: Props) {
  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN_SUCCESS} element={<LoginSuccess />} />
      </Routes>
    </Router>
  );
}
