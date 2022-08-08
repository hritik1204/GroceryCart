import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home.js';
import Cart from './components/Cart.js';
import Context from './context/Context';

function App() {
  return (
    // <Context>
    <BrowserRouter>
      <Header/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/cart' element={<Cart/>}/>    */}
      </Routes>
      </div>
    </BrowserRouter>
      // </Context>
  
  );
}

export default App;
