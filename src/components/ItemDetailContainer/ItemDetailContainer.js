import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './itemDetailContainer.css'
import { useAsync } from '../../hooks/useAsync'
import { fetcher } from '../../utils/fetcher'
import { getProd } from '../../services/firestore'


const ItemDetailContainer = () =>{

    const {productId} = useParams()
    const {loading, products, error } = useAsync(fetcher(getProd, productId),[productId])
    
    if(loading){
        return <div className="loadingContainer"><span className="loadingProduct"></span></div>
      }
    
      if(error){
        return <h1>Algo salió mal...</h1>
      }


    
    
    
    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer