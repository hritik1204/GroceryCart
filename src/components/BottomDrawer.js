import React from 'react'
import {Box, Button, Input, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Text,DrawerFooter, useBreakpointValue } from '@chakra-ui/react'
import Login from './Login'
import Item from './Item'
import './styles.css'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { CartState } from '../context/Context'
import CartItem from './CartItem'
import ContinuePayment from './ContinuePayment'

const BottomDrawer = () => {

  const buttonSize = useBreakpointValue(['xs', 'md'])
  

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cartQuantity, cartItems, products} = CartState();
  

  return (
    <>
      <Box
        zIndex='1'
        display='flex'
        overflow='hidden'
        position= 'fixed'
        bottom= '0'
        justifyContent={{base:'center',md:'space-between'}}
        // justifyContent='space-between'
        alignItem='center'
        bg='white'
        w='100%'
        backgroundColor='#14C38E'
        padding='15px 19px'
        >
        <div>
         <Button padding='10px' paddingBottom='-1px'
           minWidth={{base:'20',md:'0'}} 
           size={{Base:'sm',md:'md'}}
           className='item-count-btn'
           marginStart={{base:'250px', md:'250px'}}
           variant='solid'  colorScheme='messenger' 
           onClick={onOpen}>
            {/* //  marginRight={{base:'10%',md:'0'}} */}
            {/* //  alignItems={{base:'center'}} */}
            <div>
              <div>
               {cartQuantity===0 ? '' : cartQuantity } item(s)
              </div>
            
              <span>{cartItems.reduce((total,
                cartItem)=>{
                  const item = products.find(i => i.id === cartItem.id)
                  return total + (item?.Price || 0) * cartItem.quantity
                   },0)} total</span>
             </div>
          <ChevronUpIcon/> 
          </Button>
         </div>
        <Login />
       </Box>
        
        <Drawer  placement='bottom' size='md' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='3px' textAlign='center'>
           Cart Details
        </DrawerHeader>
          
          <DrawerBody sx={{'padding-inline-start': 'var(--chakra-space-0)'}}>
          
            <Box
            marginRight='50%'
            zIndex='1'
            display='flex'
            overflow='hidden'
            position= 'fixed'
            bottom= '0'
            justifyContent={{base:'center',md:'space-between'}}
            alignItem='center'
            bg='white'
            w='100%'
            backgroundColor='#14C38E'
            padding='15px 19px'
            >
           <Button 
             onClick={onClose}  
             marginEnd='250px'
             variant='outline' 
             padding='10px'
             paddingBottom='-1px'
             marginStart={{base:'250px', md:'250px'}}
             minWidth={{base:'20',md:'0'}}
             size={{Base:'sm',md:'md'}} 
             colorScheme='messenger'>
            {cartQuantity===0 ? '' : cartQuantity } item(s)<ChevronDownIcon/>
           </Button>
            <ContinuePayment/> 
           </Box>  
           <Box borderBottomWidth='2px' padding='5px' width='100%' display="flex" justifyContent='space-between'>
            <Text fontWeight='bold'>Items</Text>
            <Text marginLeft={{base:'26%',md:'10%'}} fontWeight='bold'>Qty</Text>
            <Text fontWeight='bold'>Amount</Text>
           </Box>

            {
              cartItems.map((item) =>(
                <CartItem key={item.id} {...item}/>
              ))
            }  
        
            <Box marginBottom='90px' justifyContent='space-between' display='flex' padding='5px' width='100%'>
            <Text fontWeight='bold'>Total</Text>
            <Text fontWeight='bold'>{cartItems.reduce((total,
            cartItem)=>{
              const item = products.find(i => i.id === cartItem.id)
              return total + (item?.Price || 0) * cartItem.quantity
            },0)}</Text>
            </Box> 
        </DrawerBody>
        </DrawerContent>
      </Drawer>
        
      <div>
        
      </div>
    </>
  )
}

export default BottomDrawer