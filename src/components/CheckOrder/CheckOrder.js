import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import './checkOrder.css'
import { OrderContext } from '../../context/OrderContext'



const ChekOrder = () =>{
    
    const {createOrder} = useContext(OrderContext)
    


        const [inputName, setInputName] = useState('')
        const [inputSurname, setInputSurname] = useState('')
        const [inputDni, setInputDni] = useState('')
        const [inputEmail, setInputEmail] = useState('')
        const [inputPhone, setInputPhone] = useState('')
        const [inputAdress, setInputAdress] = useState('')
        const [inputDoor, setInputDoor] = useState('')
        const [inputState, setInputState] = useState('')
        const [inputCity, setInputCity] = useState('')
        const [inputPostal, setInputPostal] = useState('')

        const holaMundo = () =>{

            createOrder({inputName,inputSurname,inputDni,inputEmail,inputPhone,
                inputAdress,inputDoor,inputState,inputCity,inputPostal})
        }

      
     
    return(
        <div className="checkOrderContainer">
            <h1>Último paso</h1>
            <form>
                <div className='inputContainers'>
                    <div className='buyerContainer'>
                        <h2>Datos del comprador</h2>
                        <label>Nombre:
                            <input type='text' onChange={(e) => setInputName(e.target.value)} required placeholder='Introduzca su nombre'/>
                        </label>
                        <label>Apellido:
                            <input type='text' onChange={(e) => setInputSurname(e.target.value)} required placeholder='Introduzca su apellido'/>
                        </label>
                        <label>N° de documento:
                            <input type='text' onChange={(e) => setInputDni(e.target.value)} required placeholder='Introduzca su DNI'/>
                        </label>
                        <label>Email:
                            <input type='email' onChange={(e) => setInputEmail(e.target.value)} required placeholder='Introduzca su email'/>
                        </label>
                        <label>Numero de telefono:
                            <input type='phone' onChange={(e) => setInputPhone(e.target.value)} required placeholder='Introduzca su telefono'/>
                        </label>
                    </div>
                    <div className='locationContainer'>
                        <h2>Datos de entrega</h2>
                        <label>Dirección:
                            <input type='text' onChange={(e) => setInputAdress(e.target.value)} required placeholder='Introduzca su dirección'/>
                        </label>
                        <label>Piso/Departamento:
                            <input type='text' onChange={(e) => setInputDoor(e.target.value)}  placeholder='Introduzca su dirección'/>
                        </label>
                        <label>Provincia:
                            <input type='text' onChange={(e) => setInputState(e.target.value)} required placeholder='Introduzca su provincia'/>
                        </label>
                        <label>Localidad:
                            <input type='text' onChange={(e) => setInputCity(e.target.value)} required placeholder='Introduzca su localidad'/>
                        </label>
                        <label>Codigo postal:
                            <input type='text' onChange={(e) => setInputPostal(e.target.value)} required placeholder='Introduzca su codigo postal'/>
                        </label>
                    </div>
                </div>
                <Link to='/Ticket'   className='buttonSubmit'  onClick={holaMundo} 
                >Confirmar</Link>
            </form>
        </div>
    )
}


export default ChekOrder


