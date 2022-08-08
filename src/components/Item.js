import React from 'react'
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Item = () => {
  return (
    <div>
     <Button marginStart='250px' variant='outline' colorScheme='messenger'>
      item(s) <ChevronDownIcon/>
     </Button>
    </div> 
    
  )
}

export default Item