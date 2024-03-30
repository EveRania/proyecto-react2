import { Box } from '@chakra-ui/react';
import React from 'react';
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';
// import './CartWidget.css'

const CartWidget = () => {
    return (
        // <div>
        //     <IoIosCart className='cartWidget'/><span>3</span>
        // </div>
        <Box mr={3}>
      <Link to='/cart'><IoIosCart /></Link>

    </Box>
    )
}

export default CartWidget