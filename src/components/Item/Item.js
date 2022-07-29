import './item.css'

const Item = ({product}) =>{
    
    return(
        <div onClick={()=>console.log("hiciste click en la tarjeta")} className='cardProduct'>
            <img alt="Foto del producto" className='productImg' src={product.img}/>
            <span className='itemName' >{product.name}</span>
            <span className='itemPrice' >
                {product.stock === 0 ? 'Sin Stock' : `$ ${product.price}`}
                </span>
        </div>
    )
}

export default Item