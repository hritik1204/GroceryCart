import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct.js';
import "./styles.css"
const Home = () => {


const  {products}  =  CartState()
  return (
    <div className='home'>
    {/* Home */}
     <div className='productContainer'>
      {products.map((prod) => {
      return  <SingleProduct prod={prod} key={prod.id}/>
      })}
      
     </div>
    </div>

  )
}

export default Home