import { Text, Box, Button, ButtonGroup, IconButton} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import React from 'react'
import { CartState } from '../context/Context'

const CartItem = ({id, quantity}) => {
    
  const {products, cartQuantity, decreaseCartQuantity, increaseCartQuantity} = CartState();
  const item = products.find(i => i.id === id)
  if(item == null) return null
  
  return (
    <>


    <Box borderBottomWidth='2px' justifyContent='space-between' display='flex' padding='5px' width='100%'>
      <Text >{item.itemName}</Text>
      <ButtonGroup isAttached  size='xs' colorScheme='messenger' variant='outline'>
         <IconButton onClick={() => decreaseCartQuantity(id)}  icon={<MinusIcon/>}/>
          <Button >{quantity}</Button>
         <IconButton onClick={() => increaseCartQuantity(id)}  icon={<AddIcon />}/>
       </ButtonGroup>
      <Text >{item.Price*quantity}</Text> 
    </Box>

     
  
    
    </>
  )
}

export default CartItem
    