import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <ul>
        <li>
          <a href="#1" className="navbar-efecto">
            Home
          </a>
        </li>
        <li>
          <a href="#2" className="navbar-efecto">
            Productos
          </a>
        </li>
        <li>
          <a href="#3" className="navbar-efecto">
            Contacto
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
