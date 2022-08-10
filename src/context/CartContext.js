import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItems = (productToAdd) =>{
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const cartUpdate = cart.map(prod =>{
                if(prod.id === productToAdd.id){
                    const productUpdate = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdate
                }else{
                    return prod
                }
            })
            setCart(cartUpdate)
        }
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    const getQuantityCart = () =>{
       let index = 0
       cart.forEach(prod =>{
            index += prod.quantity 
       })
       return index
    }
    const getProductQuantity = (id) =>{
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    const clearAllCart = () =>{
        setCart([])
    }

    const removeItem = (id) =>{
        const cartWithOutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithOutItem)
    }






    return (
        <CartContext.Provider value={{cart, removeItem, clearAllCart, isInCart, getQuantityCart, addItems, getProductQuantity}}>
            {children}
        </CartContext.Provider>
    )


}

