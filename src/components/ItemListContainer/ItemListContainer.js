
import ItemList from "../ItemList/ItemList";
import { getProducts, getProduct } from "../../asyncMock";
import { useState, useEffect } from "react";
import "./itemListContainer.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    getProducts().then(resp =>{
      setProducts(resp)
    }).catch(err =>{
      console.log(err)
    }).finally(() =>{
      setLoading(false)
    })
    getProduct().then(resp => {
      setProduct(resp)
    }).catch(err =>{
      console.log(err)
    })

  },[])

    if(loading){
      return <div className="loadingContainer"><span className="loadingProduct"></span></div>
    }
  
  
  return (
    <div className="itemListContainer">
      <h1>{props.greeting}</h1>
      <ItemList products={products}/>
      <ItemDetailContainer product={product}/>
    </div>
  );
};

export default ItemListContainer;
