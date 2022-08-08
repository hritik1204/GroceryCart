import {Box, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Text,DrawerFooter, Textarea, } from '@chakra-ui/react'
import React from 'react'
import CartItem from './CartItem'
import { CartState } from '../context/Context'
import { ArrowBackIcon,ArrowForwardIcon } from '@chakra-ui/icons'


const ContinuePayment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { cartQuantity, cartItems, products} = CartState();


  return (
    <div>
    <Button marginEnd='250px' onClick={onOpen} rightIcon={<ArrowForwardIcon  color='white' />} variant='solid' colorScheme='messenger'>
    Continue
    </Button>
    <Drawer placement='bottom' size='full' onClose isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
             
          <DrawerHeader  borderBottomWidth='3px'>
          
           <Box display='flex'
           marginTop={{base:'12%',md:'0%'}}
            justifyContent='space-between'>
           <ArrowBackIcon  boxSize={9} onClick={onClose}/>
            <span style={{marginLeft:'45%'}}>Checkout</span>
            <span style={{marginLeft:'50%'}}>''</span>
           </Box>
          
          </DrawerHeader>
          <DrawerBody>
          <DrawerBody marginStart={{base:'-5.3%',md:'-1.9%'}} sx={{'padding-inline-start': 'var(--chakra-space-0)', 'webkit-padding-start': 'var(--chakra-space-0)'}}>
          
         <Box
            marginRight='50%'
            zIndex='1'
            display='flex'
            overflow='hidden'
            position= 'fixed'
            bottom= '0'
            justifyContent='center'
            alignItem='center'
            bg='white'
            w='100%'
            backgroundColor='#14C38E'
            padding='15px 19px'
            > 
           <Button width={{base:'45%',md:'25%'}}
            colorScheme='messenger'>Continue Payment 
            <ArrowForwardIcon
             boxSize={6} 
             marginLeft='15px'/>
           </Button>
          </Box>  
          <Box width='100%' padding='15px 19px' display='flex'>
            <Text fontWeight='bold' >Pick up</Text>
           </Box>
           <Textarea marginBottom='50px'
           placeholder='Enter your Address'
           size='lg'
            />
          <Box borderBottomWidth='2px'
             padding='5px' width='100%' display="flex"
             justifyContent='space-between'>
            <Text fontSize='2xl' fontWeight='bold'>Items</Text>
            <Text fontSize='2xl' marginLeft={{base:'30%',md:'10%'}} fontWeight='bold'>Qty</Text>
            <Text fontSize='2xl' fontWeight='bold'>Amount</Text>
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
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
 
export default ContinuePayment;
