
import ItemList from "../ItemList/ItemList";
import { getProductCategory, getProducts } from "../../asyncMock";
import { useState, useEffect } from "react";
import "./itemListContainer.css";
import Footer from "../Footer/Footer";
import FilterProduct from "../FilterProduct/FilterProduct";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)

  const {categoryId} = useParams();

  useEffect (() =>{
    const getElements = categoryId ? getProductCategory : getProducts

    getElements(categoryId).then((response) =>{
      setProducts(response)
    }).catch((error) =>{
      console.log(error)
    }).finally(() =>{
      setLoading(false)
    })
  
  },[categoryId])

    if(loading){
      return <div className="loadingContainer"><span className="loadingProduct"></span></div>
    }
  
  
  return (
    <div className="itemListContainer">
      <h1 className="titleProducts" >{props.greeting}</h1>
      <FilterProduct/>
      <ItemList products={products}/>
      <Footer/>
    </div>
  );
};

export default ItemListContainer;
