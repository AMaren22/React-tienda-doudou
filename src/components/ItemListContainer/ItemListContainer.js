
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import "./itemListContainer.css";
import Footer from "../Footer/Footer";
import FilterProduct from "../FilterProduct/FilterProduct";
import { useParams } from "react-router-dom";
import { collection,query, where,getDocs } from "firebase/firestore";
import { dataBase } from "../../services/services";


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)

  const {categoryId} = useParams();

  useEffect (() =>{

    const ref = !categoryId ? 
      collection(dataBase, 'products'):
      query(collection(dataBase,'products'), where('category', '==', categoryId))

      getDocs(ref).then(resp =>{
        const products = resp.docs.map(doc =>{
          const values = doc.data()
          return {id: doc.id, ...values}
        })
        setProducts(products)
      }).catch(err =>{
        console.log(err)
      }).finally(()=>{
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
