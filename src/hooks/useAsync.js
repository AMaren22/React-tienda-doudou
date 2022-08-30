import { useEffect } from "react"
import { useState } from "react"


export const useAsync = (asyncFunction,dependecies = []) =>{
    const [products, setProducts] = useState()
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(()=>{
        asyncFunction().then(resp =>{
            setProducts(resp)
        }).catch(err =>{
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }, dependecies)


    return{
        products,
        loading,
        error
    }
}