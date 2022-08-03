import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import HomeMain from './components/HomeMain/HomeMain';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
            <div className='main'>
          <Routes>
            <Route path='/' element={<HomeMain/>}/>
            <Route path="/products" element={<ItemListContainer greeting='Nuestros productos' />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
            <Route path='/contacts' element={<Contact contact={'Contacto'}/>}/>
          </Routes>
            </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
