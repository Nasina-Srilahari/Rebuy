import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Product_display from './components/Product_display'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup';
import SEll from './components/SEll';
import Buy from './components/Buy';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/Product_display' element={<Product_display/>}/>
          <Route exact path='/AddProduct' element={<AddProduct/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/" element={<Signup/>}/>
          <Route exact path="/SEll" element={<SEll/>}/>
          <Route exact path="/Buy" element={<Buy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;