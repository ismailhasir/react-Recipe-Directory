import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>

        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
