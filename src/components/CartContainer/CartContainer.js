import Cart from '../Cart/Cart'

import './cartContainer.css'

const CartContainer = () =>{
    return(
        <div className='cartContainer'>
            <div className='wavesContainerCart'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#d7ab84" fillOpacity="1" d="M0,64L48,64C96,64,192,64,288,85.3C384,107,480,149,576,186.7C672,224,768,256,864,245.3C960,235,1056,181,1152,138.7C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <h1 className='cartTitle'>Carrito</h1>
            </div>
            <Cart/>
        </div>
    )
}

export default CartContainer