
import { useContext, useEffect, useState,} from 'react'
import { OrderContext } from '../../context/OrderContext'
import './ticket.css'

const Ticket = ( ) =>{

    const {ticket,productOffStock} = useContext(OrderContext)
    const [loading, setLoading] = useState(true)

    setTimeout(()=>{
        setLoading(false)
    },5000)
    
    
    if(loading){
        return <div className="loadingContainer"><span className="loadingProduct"></span></div>
      }

    if(productOffStock.length === 0){

        return(
            <div className='ticketContainer'>
                <h1>Su orden a sido generada con éxito !</h1>
                <div className='ticketSubContainer'>
                    <h3>Comprobante N°:</h3><span className='numTicket'>{ticket}</span>
                </div>
                <p className='textTicket'>Nos estaremos comunicando con usted a la brevedad</p>
                <div className='ticketSubContainer'>
                    <p>Por cualquier consulta escribinos a :</p><a href='https://www.instagram.com/tiendadoudou/' target='_blank' rel='noreferrer'>Tienda Doudou</a>
                </div>
                <p className='textTicketFooter'>Gracias por confiar en Tienda Doudou</p>
            </div>
        )
    }else{
        return(
            <div className='ticketContainerFail'>
                <h1>Ups.. algo salió mal</h1>
                <h3>Compruebe que los productos en el carrito tengan en stock</h3>
                <h5>Disculpe las molestias.</h5>

            </div>
        )
    }
    
}

export default Ticket