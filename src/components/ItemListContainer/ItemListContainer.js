import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncMock";
import { useState, useEffect } from "react";
import "./itemListContainer.css";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    getProducts().then(resp =>{
      setProducts(resp)
    }).catch(err =>{
      console.log(err)
    }).finally(() =>{
      setLoading(false)
    })

  },[])

    if(loading){
      return <div className="loadingContainer"><span class="loadingProduct"></span></div>
    }
  
  const addProduct = (count) => {
    alert(`Agregaste ${count} producto al carrito`);
  };
  return (
    <div className="itemListContainer">
      <h1>{props.greeting}</h1>
      <ItemCount addProduct={addProduct} stock={7} />
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
