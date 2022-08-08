import React, { useState } from 'react'
import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import {Box, FormControl, Button, Input, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useToast } from '@chakra-ui/react'
import { CartState } from '../context/Context'
import './styles.css'



const Login = () => {
    const [type, setType] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [login, isLogIn] = useState('Login')
    const toast = useToast();
    console.log(type)
    const handleType = async() => {
      if(type.length !== 10){
        toast({
          title: "Please Enter 10 digits",
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "bottom",
          colorScheme: "messenger"
        })
        return;
      }
      else{
        toast({
          title: "Successfully LoggedIn",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "bottom"
        })
      }
      return isLogIn('Continue')

    }
  return (
    <div className='login-btn'>
      <Button marginEnd='250px' onClick={onOpen} rightIcon={<ArrowForwardIcon  color='white' />} variant='solid' colorScheme='messenger'>
        {login}
      </Button>
      <Drawer placement='bottom' size='lg' onClose isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
             
          <DrawerHeader  borderBottomWidth='3px'>
          <ArrowBackIcon boxSize={9} onClick={onClose}/>
            
            <span className='login-span' style={{marginLeft:'45%'}}>Login</span>
          </DrawerHeader>
          <DrawerBody>
          <Box display='flex' pb={2}>

          <FormControl>
          <Input 
             borderColor='black'
             variant='outline'
             marginTop='40px'
             type='number'
            placeholder='Enter your phone number'
            mr={2}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          </FormControl>


          </Box>
          <Button type='submit' onClick={handleType} marginTop='30px'  colorScheme='messenger' width='100%'>Submit</Button>
          <Button onClick={onClose} marginLeft={{base:'37%',md:'45%'}} marginBottom='80px' variant='link'>Will do it later</Button>

         
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Login