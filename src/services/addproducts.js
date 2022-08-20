import products from "../asyncMock";
import {addDoc, collection} from 'firebase/firestore'
import {dataBase} from '../services/services'


const addProducts = () => {
    
    const ref = collection(dataBase,'products')
                 
    products.forEach(product =>{
       addDoc(ref, product)
    })

}

export default addProducts

// Esta función se ejecutó una sola vez, para pasar los productos existentes en el asynMock a Firebase