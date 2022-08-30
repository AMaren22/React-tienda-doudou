import { collection,query, where,getDocs, getDoc, doc } from "firebase/firestore";
import { dataBase } from "./services";
import { productsFromDB } from "../adapters/productsAdapter";


export const getProducts = (categoryId) =>{

    const ref = !categoryId ? 
         collection(dataBase, 'products'):
         query(collection(dataBase,'products'), where('category', '==', categoryId))
    
         return getDocs(ref).then(resp =>{
           const products = resp.docs.map(doc =>{
             return productsFromDB(doc)
           })
           return products
         }).catch(err =>{
           return err
         })
}

export const getProd = (productId) =>{

   return getDoc(doc(dataBase,'products',productId)).then(resp=>{
        const value = resp.data()
        const product= {id: resp.id, ...value}
        return product
    }).catch((err)=>{
        console.log(err)
    })
}
