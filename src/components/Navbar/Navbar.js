import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'




const Navbar = () =>{
    return (
        <div className='container-navbar'>
            <ul>
                <li><a href='#' className='navbar-efecto'>Home</a></li>
                <li><a href='#' className='navbar-efecto'>Productos</a></li>
                <li><a href='#' className='navbar-efecto'>Contacto</a></li>
            </ul>
            <CartWidget/>
            
        </div>
    )
}

export default Navbar