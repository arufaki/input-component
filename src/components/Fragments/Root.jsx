import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
