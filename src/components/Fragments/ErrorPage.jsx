import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-5">
      <h1 className="font-noto font-bold text-7xl">Oops!</h1>
      <p className="font-noto text-2xl font-medium">{error.status} Bjir</p>
      <p className="italic">{error.statusText || error.message}</p>
      <Link to="/" className="font-bold font-noto hover:text-red-500">
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
