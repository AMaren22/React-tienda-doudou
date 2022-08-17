import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './itemDetailContainer.css'
import { doc, getDoc } from 'firebase/firestore'
import { dataBase } from '../../services/services'


const ItemDetailContainer = () =>{

    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams()
    
    useEffect(()=>{
        getDoc(doc(dataBase,'products',productId)).then(resp=>{
            const value = resp.data()
            const product= {id: resp.id, ...value}
            setProductDetail(product)
        }).catch((err)=>{
            console.log(err)
        })
    },[productId])
    
    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...productDetail}/>
        </div>
    )
}

export default ItemDetailContainer