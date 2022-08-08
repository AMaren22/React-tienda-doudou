import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
import {Link} from 'react-router-dom'

const ItemDetail = ({img, name, price, description}) =>{
    const [quantity, setQuantity] = useState(0)
    
    const addProduct = (count) => {
        setQuantity(count)
    };  
    return(
        <div className='itemDetailCont'>
            <div className='imgDetailContainer'>
                <img src={img} alt='Foto producto'/>
            </div>
            <div className='itemAddonsContainer'>
                <span className='itemDetailName'>{name}</span>
                <span className='itemDetailPrice'>${price}</span>
                <p className='itemDetailDescrip'>{description}</p>
                {quantity > 0 ? <Link className='linkToCart' to='cart'>Ir al carrito</Link> : <ItemCount addProduct={addProduct} stock={7} />
}
            </div>
        </div>
    )
}

export default ItemDetail