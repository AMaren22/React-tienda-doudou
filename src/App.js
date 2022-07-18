import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a tienda Doudou' />

    </div>
  );
}

export default App;
