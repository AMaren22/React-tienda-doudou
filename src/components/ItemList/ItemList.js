import Item from '../Item/Item'
import './itemList.css'

const ItemList = ({products}) =>{
    
    return(
        
        <div className='itemListCont'>
           
            {products.map(item => (
                <Item key={item.id} {...item}/>
                         ))} 
               
           
        </div>
    )
}

export default ItemList