import { Link } from "react-router-dom";

import NotFound404 from "../../assets/images/404NotFound.svg";

const NotFound = () => {
  return (
    <div className="text-center">
      <img src={NotFound404} />
      <h1 className="text-2xl font-bold">404 Page Not Found</h1>
      <p className="p-3">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-4">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-500 hover:border-blue-700 rounded"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
