import { Link } from "react-router-dom";

function Links({ links }) {
  return (
    <ul>
      {links?.map(({ to, title, target }, index) => (
        <li
          key={index}
          className="font-noto text-sm text-[#9E9E9E] font-medium mb-6 hover:text-[#090F31] duration-100"
        >
          <Link to={to} target={target}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
