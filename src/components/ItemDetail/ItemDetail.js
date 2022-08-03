import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({img, name, price, description}) =>{
    const addProduct = (count) => {
        alert(`Agregaste ${count} producto al carrito`);
      };

      console.log(img)
    return(
        <div className='itemDetailCont'>
            <div className='imgDetailContainer'>
                <img src={img} alt='Foto producto'/>
            </div>
            <div className='itemAddonsContainer'>
                <span className='itemDetailName'>{name}</span>
                <span className='itemDetailPrice'>${price}</span>
                <p className='itemDetailDescrip'>{description}</p>
                <ItemCount addProduct={addProduct} stock={7} />
            </div>
        </div>
    )
}

export default ItemDetail