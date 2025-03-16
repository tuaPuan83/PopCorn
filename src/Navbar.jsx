import App from "./App";
import InputButton from "./InputButton";
import Logo from "./Logo";
import NumberResults from "./NumResults";

function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <InputButton />
      <NumberResults movies={movies} />
    </nav>
  );
}

export default Navbar;
