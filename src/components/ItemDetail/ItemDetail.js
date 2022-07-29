import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({product}) =>{
    const addProduct = (count) => {
        alert(`Agregaste ${count} producto al carrito`);
      };
    return(
        <div className='itemDetailCont'>
            <div className='imgDetailContainer'>
                <img src={product.img} alt='Foto producto'/>
            </div>
            <div className='itemAddonsContainer'>
                <span className='itemDetailName'>{product.name}</span>
                <span className='itemDetailPrice'>${product.price}</span>
                <p className='itemDetailDescrip'>{product.description}</p>
                <ItemCount addProduct={addProduct} stock={7} />
            </div>
        </div>
    )
}

export default ItemDetail