import React, { useContext } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Heading,
    Flex,
    Center,
    Text,
    Box,
    Link as ChakraLink
  } from '@chakra-ui/react'
  import { RiDeleteBin4Line, RiDeleteBin7Line  } from "react-icons/ri";
  import { FaChevronRight } from "react-icons/fa";

import Context from '../../context/CartContext'
import { Link as RouterLink } from 'react-router-dom';
import './Cart.css'
const Cart = () => {
    const { cart, getTotal, removeItem, clearCart } = useContext(Context)
    
    if(cart.length === 0) {
        return(
            <Flex direction={'column'} align={'center'} mt={10}>
                <Heading>Todavía no agregaste productos al carrito</Heading>
                <Heading><RouterLink to='/'>Ver productos</RouterLink></Heading>
            </Flex>
        )
    }else {

        return (
            <TableContainer>
                <Table >
                    <Thead>
                    <Tr>
                        <Th>Producto</Th>
                        <Th>Cantidad</Th>
                        <Th>Precio</Th>
                        <Th>Subtotal</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cart.map((producto, index) => (
                                <Tr key={producto.id} bg={index % 2 === 0 ? '#9c657d' : '#fff'} color={index % 2 === 0 ? 'white' : '#243F4D'}>
                                    <Td>{producto.nombre}</Td>
                                    <Td>{producto.quantity}</Td>
                                    <Td>{producto.precio}</Td>
                                    <Td>{producto.precio * producto.quantity}</Td>
                                    <Td><Button bg={'transparent'} color={index % 2 === 0 ? '#fff' : '#243F4D'} onClick={() => removeItem(producto.id)} fontSize={'2xl'}>
                                            <RiDeleteBin4Line />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                    <Tr >
                        <Td colSpan={5} border={'none'}>
                        </Td>
                    </Tr>
                    </Tfoot>
                </Table>
                <Center>
                    <Flex w={'60%'} justify={'space-around'} align={'center'}>
                        <Text fontSize={'2xl'} color={'#fff'} w={'15rem'}height={'3rem'}>Total ${getTotal()}</Text>
                            <Button onClick={() => clearCart()} 
                                w={'15rem'}
                                height={'3rem'} 
                                backgroundColor={'#9c657d'} 
                                color={'#fff'} 
                                fontSize={'xl'}
                                _hover={{
                                    backgroundColor: '#fff',
                                    color: '#243F4D',
                                }}
                                > 
                                <span className='iconClearCart'>
                                    <RiDeleteBin7Line/> 
                                </span>
                                Vaciar carrito
                            </Button>
                            <ChakraLink as={RouterLink} to='/checkout' 
                                fontSize={'2xl'} 
                                color={'#9c657d'} 
                                backgroundColor={'#fff'}
                                height={'3rem'}
                                borderRadius={'5px'}
                                p={'5px'}
                                w={'15rem'}
                                className='continueCartContainer'
                                _hover={{
                                    backgroundColor: '#9c657d',
                                    color: '#fff',
                                }}
                                >
                                Finalizar compra
                                <span className='iconContinueCart' >
                                    <FaChevronRight />
                                </span>
                            </ChakraLink>
                    </Flex>
                </Center>
            </TableContainer>
        )
        }
}

export default Cart
