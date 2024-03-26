import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading } from "@chakra-ui/react";

const Item = ({ img, nombre, precio }) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={img}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        ${precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Ver detalle
                    </Button>
                    
                </ButtonGroup>
            </CardFooter>
        </Card>


        // <div>
        //     <p>{nombre}</p>
        // </div>
    )
}

export default Item