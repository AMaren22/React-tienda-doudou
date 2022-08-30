import { createContext, useState } from "react"
import {addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch} from 'firebase/firestore'
import {dataBase} from '../services/services'
import { CartExport } from "./CartContext"

export const OrderContext = createContext()

export const OrderContextProvider = ({children}) =>{

    const {cart,getTotalPrice,clearAllCart} = CartExport()
        
    const totalPrice = getTotalPrice();

    const [ticket,setTicket] = useState('')
    const [productOffStock,setProductOffStock] = useState([])    

    
        const createOrder = async (user) =>{
            try{
                const client = {
                    buyer:{
                        name:  user.inputName,
                        surName: user.inputSurname,
                        dni:  user.inputDni,
                        email: user.inputEmail,
                        phone: user.inputPhone,
                        adress: user.inputAdress,
                        door: user.inputDoor,
                        state:  user.inputState,
                        city:  user.inputCity,
                        postal: user.inputPostal
                    },
                    items: cart,
                    price: `${totalPrice}`,
                    date: Timestamp.fromDate(new Date())
    
                }
                const orderRef = collection(dataBase, 'Orders')
                const refProduct = collection(dataBase, 'products')
                const idProducts = cart.map(prod => prod.id)
                const productFirestone = await getDocs(query(refProduct,where(documentId(),'in',idProducts)))
                const {docs} = productFirestone
                const productOfTheStock = []
                const batch = writeBatch(dataBase)
    
                docs.forEach((prod) =>{
                    
                    const dataProd = prod.data()
                    const stockProd = dataProd.stock
    
                    const productAdd = cart.find(item => item.id === prod.id)
                    const prodQuantity = productAdd?.quantity
    
                    stockProd >= prodQuantity ?
                    batch.update(prod.ref,{stock: stockProd - prodQuantity})
                    : productOfTheStock.push({id: prod.id, ...dataProd})
    
                })
    
                if(productOfTheStock.length === 0){
                    const orderAdd = await addDoc(orderRef, client)
                    batch.commit()
                    setTicket(orderAdd.id)
                    clearAllCart()
                }else{
                    setProductOffStock(productOfTheStock)
                }
                
                }catch(err){
                return err
            }
        
        
        }
    

    return(
        <OrderContext.Provider value={{createOrder,ticket,productOffStock}}>
            {children}
        </OrderContext.Provider>
    )



}
