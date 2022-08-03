import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
const Footer = () =>{
    return(
        <div className='footer'>
            <div className='devContainer'>
                <p>Desarrollado por: <span>Augusto Marengo</span></p>
                <p>
                 Email:
                    <a
                        href="mailto:amarengo.dev@gmail.com?Subject=Quiero%20ponerme%20en%20contacto"
                    >
                        amarengo.dev@gmail.com
                    </a>
                </p>
            </div>
            <div className='redContainer'>
            <a href='https://www.instagram.com/tiendadoudou/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} className='redIcon' />           
            </a>
             </div>
        </div>
    )
}

export default Footer