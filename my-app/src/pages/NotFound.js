import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 text-danger">404 - Page Not Found</h1>
      <p className="lead mt-3">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
