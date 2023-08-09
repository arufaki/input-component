import { useNavigate } from "react-router-dom";
import Links from "../Elements/Link/Links";

function Navbar() {
  const links = [
    { to: "/colors", title: "Colors" },
    { to: "/typography", title: "Typography" },
    { to: "/spaces", title: "Spaces" },
    { to: "/buttons", title: "Buttons" },
    { to: "/inputs", title: "Inputs" },
    { to: "/grid", title: "Grid" },
  ];

  const navigate = useNavigate();

  return (
    <nav id="navbar">
      <div
        id="navbar-master"
        className="w-60 h-full bg-[#FAFBFD] flex  flex-col items-center fixed top-0"
      >
        <div id="logo" className="mt-12 mb-32">
          <h1
            className="font-poppins text-sm font-semibold text-[#090F31] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-[#F7542E]">Dev</span>challenges.io
          </h1>
        </div>
        <div id="links">
          <Links links={links} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
