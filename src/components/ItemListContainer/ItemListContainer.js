import ItemCount from '../ItemCount/ItemCount'

import './itemListContainer.css'

const ItemListContainer = (props) =>{


    const addProduct = (count) =>{
        alert(`Agregaste ${count} producto al carrito`)
    }

    return(
        <div className='itemListContainer'>
            <h1>{props.greeting}</h1>
            <ItemCount addProduct={addProduct}/>       
        </div>
    )
}

export default ItemListContainer