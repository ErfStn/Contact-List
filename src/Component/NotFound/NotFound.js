import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <br />
      <h2>Page Not Found</h2>
      <br />
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default NotFound;
