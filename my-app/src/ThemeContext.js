import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Arpit Jorelia</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
          </ul>

          <button onClick={toggleTheme} className="btn btn-outline-light ms-3">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
