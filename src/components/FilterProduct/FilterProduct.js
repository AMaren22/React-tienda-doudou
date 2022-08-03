import { Link } from 'react-router-dom'
import './filterProduct.css'

const FilterProduct = () =>{
    return(
        <div className="filterContainer">
            <Link className='allProductLink' to='/products'>Ver todos los productos</Link>
            <div className="categoryContainer">
                <p>
                    Filtrar por categoria:
                </p>
                <Link className='category' to='/category/Niños-Niñas'>Niños/Niñas</Link>
                <Link className='category' to='/category/Bebes'>Bebes</Link>
                
            </div>
        </div>
    )
}

export default FilterProduct