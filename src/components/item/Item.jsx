import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading, Center, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom'

const Item = ({ img, nombre, precio, id }) => {
    return (
        <Card maxW='sm' border='3px' borderColor='#243F4D#a93f6d' boxShadow='2xl'>
            <CardBody>
                <Image
                    src={img}
                    alt={nombre}
                    borderRadius='md'
                    boxSize='100%'
                    objectFit='cover'
                    w={'400px'}
                    h='400px'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text color='#a93f6d' fontSize='2xl'>
                        ${precio}
                    </Text>
                </Stack>
            </CardBody>
            <Center height='2px' bg={'#a93f6d'}>
            </Center>
            <Divider color={'#a93f6d'} />
            <CardFooter>
                <Flex spacing='2' justifyContent={'center'} align={'center'} w={'100%'}>
                    <ButtonGroup spacing='3'>
                        <Button variant='solid'
                            bg={'#a93f6d'}
                            color={'#FAC9B4'}
                            _hover={{ bg: '#3E6478', color: '#fff' }}
                        >
                            <Link to={`/product/${id}`}>Ver detalle</Link>
                        </Button>

                    </ButtonGroup>
                </Flex>
            </CardFooter>
        </Card>

    )
}

export default Item

