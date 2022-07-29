import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to={"/mlbb-heroes/"} className="navbar-brand link">
        <h1>MLBB Heroes</h1>
      </Link>
    </nav>
  );
}
