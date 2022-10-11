import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h1>Something went wrong!</h1>
      <Link to="/">Back to home</Link>
    </>
  );
}

export default ErrorPage;
