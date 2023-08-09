import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p className="text-[#A9A9A9] ml-60 px-11 mb-5">
        created by
        <strong>
          <Link to="https://github.com/Arufaki"> Arufaki</Link>
        </strong>
        - devChallenges.io
      </p>
    </footer>
  );
}

export default Footer;
