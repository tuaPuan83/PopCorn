import App from "./App";
import InputButton from "./InputButton";
import Logo from "./Logo";
import NumberResults from "./NumResults";

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      {children}
    </nav>
  );
}

export default Navbar;
