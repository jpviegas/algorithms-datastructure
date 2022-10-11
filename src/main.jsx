import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './normalize.css';
import ErrorPage from './pages/errorPage/errorPage';
import PalindromeChecker from './pages/palindromeChecker/PalindromeChecker';
import RomanNumeralConverter from './pages/romanNumeralConverter/RomanNumeralConverter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/palindrome',
    element: <PalindromeChecker />,
  },
  {
    path: '/roman',
    element: <RomanNumeralConverter />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
