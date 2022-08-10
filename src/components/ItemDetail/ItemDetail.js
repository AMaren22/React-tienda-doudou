import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import {Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './itemDetail.css'


const ItemDetail = ({id,img, name, price, description,stock}) =>{
    const [quantity, setQuantity] = useState(0)
    const {addItems, getProductQuantity} = useContext(CartContext)

    const quantityAdded = getProductQuantity(id)
    const navigate = useNavigate()

 

    const addProduct = (quantity) => {
        setQuantity(quantity)
        addItems({id,name,price,img,quantity,stock})
    };  
    return(
        <div className='itemDetailCont'>
            <div onClick={() => navigate(-1)} className='back-container'>
                <FontAwesomeIcon className='arrow-back' icon={faArrowLeft}/>
            </div>
            <div className='imgDetailContainer'>
                <img src={img} alt='Foto producto'/>
            </div>
            <div className='itemAddonsContainer'>
                <span className='itemDetailName'>{name}</span>
                <span className='itemDetailPrice'>${price}</span>
                <p className='itemDetailDescrip'>{description}</p>
                {quantity > 0 
                ? <Link className='linkToCart' to='/cart'>Ir al carrito</Link> 
                : <ItemCount addProduct={addProduct} stock={stock} initial={quantityAdded} />}
            </div>
        </div>
    )
}

export default ItemDetail