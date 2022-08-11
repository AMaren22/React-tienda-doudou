import CartItems from '../CartItems/CartItems'
import { CartContext } from '../../context/CartContext'
import './cart.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = () =>{

    const {cart, getTotalPrice, getQuantityCart, clearAllCart } = useContext(CartContext)

    const quantity = getQuantityCart();
    const totalPrice = getTotalPrice();

    if(quantity === 0){
        return (
        <div className='noItemsContainer'>
            <h1 className='titleNoItems'>No hay productos  agregados al carrito</h1>
            <Link className='noItemsLink' to='/products'>Ver productos</Link>
        </div>
        )
    }

    return(
        <div className="CartContainer">
            {cart.map(p => <CartItems key={p.id} {...p}/>)}
            <div className='cartInfoContainer'>
                <div className='cartTextContainer'>
                    <h3>El precio total es:</h3><span>${totalPrice}</span>
                </div>
                <div className='cartButtonContainer'>
                    <button>Generar orden de compra</button>
                    <button onClick={()=>clearAllCart()}>Vaciar el carrito</button>
                </div>
            </div>
            
        </div>
    )
}


export default Cart