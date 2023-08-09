import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputPage from "./pages/InputPage.jsx";
import ErrorPage from "./components/Fragments/ErrorPage";
import ComingSoon from "./components/Fragments/ComingSoon";
import Root from "./components/Fragments/Root";

const paths = ["colors", "typography", "spaces", "buttons", "inputs", "grid"];

const routes = paths.map((path) => ({
  path: path,
  element: <ComingSoon />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "inputs",
        element: <InputPage />,
      },
      ...routes,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
