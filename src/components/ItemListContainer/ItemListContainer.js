
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { fetcher } from "../../utils/fetcher";
import { getProducts } from "../../services/firestore";


const ItemListContainer = (props) => {
  const {categoryId} = useParams();

  const {loading, products, error } = useAsync(fetcher(getProducts, categoryId),[categoryId])

  if(loading){
    return <div className="loadingContainer"><span className="loadingProduct"></span></div>
  }

  if(error){
    return <h1>Algo salió mal...</h1>
  }

  
  return (
    <div className="itemListContainer">
      <h1 className="titleProducts" >{props.greeting}</h1>
       <ItemList products={products}/> 
    </div>
  );
};

export default ItemListContainer;
