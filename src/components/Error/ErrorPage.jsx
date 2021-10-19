import React from 'react';
import errorStyle from './error.module.css'

const ErrorPage = () =>
  <div>
    <h3 className={errorStyle.centered}>404 page not found</h3>
    <p className={errorStyle.centered}>We are sorry but the page you are looking for does not exist.</p>
  </div>

export default ErrorPage