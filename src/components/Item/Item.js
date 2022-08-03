import './item.css'
import { Link } from 'react-router-dom'

const Item = ({img, name, price, stock,id}) =>{
    
    return(
        <Link to={`/detail/${id}`} className='cardProduct'>
            <img alt="Foto del producto" className='productImg' src={img}/>
            <span className='itemName' >{name}</span>
            <span className='itemPrice' >
                {stock === 0 ? 'Sin Stock' : `$ ${price}`}
            </span>
        </Link>
    )
}

export default Item