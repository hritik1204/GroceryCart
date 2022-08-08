import React, { ReactNode, useState, createContext, useContext } from 'react'




const Cart = createContext();
const Context = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState
  (false)
  const [profile, setProfile] = useState({});
     
     const  products = [ 
        {
        id: 1,
        itemName: "Ajwaini Parantha",
        About: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, harum unde iste quibusdam necessit ammit unde",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EUlYfxsIAteWHSDFHGL0w0jwqzK8A_ecIA&usqp=CAU",
        Price: '2'
       },
       {
         id: 2,
         itemName: "Roasted Cereall",
         About: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, harum unde iste quibusdam necessit ammit unde",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5gx0g17I3Q1PvNyEZR-ZpE7QJ2jNV_Z98w&usqp=CAU",
         Price: '1'
        },
        {
          id: 3,
          itemName: "Ajwaini Parantha",
          About: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, harum unde iste quibusdam necessit ammit unde",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EUlYfxsIAteWHSDFHGL0w0jwqzK8A_ecIA&usqp=CAU",
          Price: '2'
        },
        {
          id: 4,
          itemName: "Roasted Cereall",
          About: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, harum unde iste quibusdam necessit ammit unde",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5gx0g17I3Q1PvNyEZR-ZpE7QJ2jNV_Z98w&usqp=CAU",
          Price: '1'
         },{
          id: 5,
          itemName: "Ajwaini Parantha",
          About: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, harum unde iste quibusdam necessit ammit unde",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EUlYfxsIAteWHSDFHGL0w0jwqzK8A_ecIA&usqp=CAU",
          Price: '2'
        },
        
    ]


    const [cartItems, setCartItems] = useState([])

    function getItemQuantity (id){
      return cartItems.find(item => item.id ===id)?.quantity || 0

    }
    function increaseCartQuantity(id){
      setCartItems(currentItems => {
        if(currentItems.find(item => item.id ===id) ==null){
          return [...currentItems,{id, quantity: 1}]
        }else{
          return currentItems.map(item => {
            if(item.id===id){
              return {...item, quantity: item.quantity +1}
            }else{
              return item
            }
          })
        }
      })
    }


function decreaseCartQuantity(id){
  setCartItems(currentItems => {
    if(currentItems.find(item => item.id ===id)?.quantity ===1){
      return currentItems.filter(items => items.id !== id)
    }else{
      return currentItems.map(item => {
        if(item.id===id){
          return {...item, quantity: item.quantity -1}
        }else{
          return item
        }
      })
    }
  })
}

const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0)


  return (<Cart.Provider value={{cartQuantity,  cartItems, products, getItemQuantity, increaseCartQuantity, decreaseCartQuantity,  }}>{children}</Cart.Provider>)
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}
