import React from 'react'
import useCounter from '../../hooks/UseCounter'
import './itemCount.css'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
const ItemCount = ({stock, initialValue, onAdd}) => {

    const { count , incrementar, decrementar } = useCounter(stock, initialValue)

      return (
   
    <Flex direction={'column'} align={'center'} justify={'center'} w={'100%'}>
      <Box className='counterContainer'>
        <Button         
          bg={'#ab1c5a'} 
          color={'#fff'}
          _hover={{ bg: '#9c657d', color: '#fff' }} 
          className='btnCounter'  
          onClick={decrementar}>
            -
        </Button>
        <Heading p={2}>{count}</Heading>
        <Button         
          bg={'#ab1c5a'} 
          color={'#fff'}
          _hover={{ bg: '#9c657d', color: '#fff' }}
          className='btnCounter'  
          onClick={incrementar}>
            +
        </Button>
      </Box>
      <Button 
        bg={'#ab1c5a'} 
        color={'#fff'}
        w={'100%'}
        h={'5vh'}
        borderRadius={0}
        _hover={{ bg: '#9c657d', color: '#fff' }} 
        onClick={() => onAdd(count)}
          >Agregar al carrito
        </Button>
    </Flex>
  )

}

export default ItemCount