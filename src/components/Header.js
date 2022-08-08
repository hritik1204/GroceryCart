import React from 'react'
import BottomDrawer from './BottomDrawer';
import { CartState } from '../context/Context'


const Header = () => {
    
  return (
    <div style={{width: "100%"}}>
       {<BottomDrawer/>}
     </div>
     
  )
}

export default Header
        