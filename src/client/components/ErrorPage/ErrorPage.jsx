import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Raincheck on Raincheck?</h1>
      <div>Sorry, an unexpected error has occured!</div>
    </div>
  );
};

export default ErrorPage;
