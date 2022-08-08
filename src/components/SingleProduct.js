import { Box, Image, Heading, Text, Button,ButtonGroup, IconButton } from '@chakra-ui/react'
import React,{useState} from 'react'
import './styles.css'
import { CartState } from '../context/Context'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const SingleProduct = ({prod}) => {

   const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = CartState();
   const quantity = getItemQuantity(prod.id)
  
  
  return (
    <>
    <Box
     display='flex'
     alignItems='top'
     w='100%'
     marginBottom={{base:'60px',md: '20px'}}
    >

      <Image height={{base: '150px', md: '157px'}}
       w={{base: '127px', md: '157px'}}
       
       src={prod.image}
        alt={prod.name}/>
      
      <div >
       <Heading paddingLeft='5px'
          size={{base: 'md',md:'lg'}}
           whiteSpace='nowrap'>
         {prod.itemName}
       </Heading>

       <Text padding='7px'
        whiteSpace={{base: 'normal', md: 'nowrap'}}
          fontSize='sm'>
         {prod.About}
       </Text>

       <Text  fontSize='xl'
        paddingTop={{base:'18px', md:'45px'}} 
        paddingLeft='7px'>
         ${prod.Price}
       <span className='org-price'>
         $4</span>
       </Text>

      </div>



      {quantity===0 ? (
        <Button onClick={() => increaseCartQuantity(prod.id)}
          marginTop={{base:'120px', md:'85px'}}
         marginLeft={{base:'1%',md:'24%'}}
         marginEnd={{base:'8%'}}
          colorScheme='messenger' size={{base:'md',md:'lg'}}>
        Add
        </Button>
      ):(
        <ButtonGroup isAttached  size='xs'
        // marginTop={['85px', '170px', '155px' ]}
        marginTop={{base:'120px', md:'85px'}}
         marginLeft={{base:'1%',md:'24%'}}
         marginEnd={{base:'4%'}}
           colorScheme='messenger'
            variant='outline'>
         <IconButton onClick={() => decreaseCartQuantity(prod.id)}  icon={<MinusIcon/>}/>
          <Button >{quantity}</Button>
         <IconButton onClick={() => increaseCartQuantity(prod.id)}  icon={<AddIcon />}/>
       </ButtonGroup>
      )}
        

        </Box>
    <div className='prod-bottom-line' style={{height:'0.5px', background:'gray', marginBottom:"18px"}}></div>
   

    </>
  )
}

export default SingleProduct
      