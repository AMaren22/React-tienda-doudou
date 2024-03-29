import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import './cartItems.css'

const CartItems = ({id, name, quantity, price, img, description}) =>{

    const {removeItem} = useContext(CartContext)

    const remove = (id) =>{
        removeItem(id)
    }

    
    return(
        <div className="cartItemsContainer">
            <div className='cartImgContainer'>
                <img src={img} alt='Foto producto'/>
            </div>
            <div className='cartItemsDesContainer'>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className='cartItemsPriceContainer'>
                <div>
                    <p>Precio Unitario:</p><span>${price}</span>
                </div>
                <div>
                    <p>Cantidad:</p><span>{quantity}</span>
                </div>
                <div>
                    <p>Subtotal:</p><span>${quantity * price}</span>
                </div>
            </div>
            <button onClick={() => remove(id)} className='cartItemsButtonContainer'>
                X
            </button>
        </div>
    )
}


export default CartItems