import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductId } from '../../asyncMock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './itemDetailContainer.css'


const ItemDetailContainer = ({addItems}) =>{

    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams()
    
    useEffect(() =>{
        getProductId(productId).then(response =>{
            setProductDetail(response)
        })
    },[productId])
    
    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...productDetail}/>
        </div>
    )
}

export default ItemDetailContainer