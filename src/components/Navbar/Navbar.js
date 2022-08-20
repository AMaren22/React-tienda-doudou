import { Link } from "react-router-dom";
/*  import addProducts from "../../services/addproducts"; */
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div>
            <div className='background'>
            <img className='logo' alt='Logo de la marca' src="/images/Logo-negro.png"/>
            </div>
        </div>
      <ul>
        <li>
          <Link to='/' className="navbar-efecto">
            Home
          </Link>
        </li>
        <li>
          <Link to='/products'  /* onClick={addProducts} */  className="navbar-efecto">
            Productos
          </Link>
        </li>
        <li>
          <Link to='/contacts' className="navbar-efecto">
            Contacto
          </Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
