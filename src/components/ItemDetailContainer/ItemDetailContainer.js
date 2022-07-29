import ItemDetail from '../ItemDetail/ItemDetail'
import './itemDetailContainer.css'

const ItemDetailContainer = ({product}) =>{
    return(
        <div className='itemDetailContainer'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer