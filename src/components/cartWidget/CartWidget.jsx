import React from 'react';
import { IoIosCart } from "react-icons/io";
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <IoIosCart className='cartWidget'/><span>3</span>
        </div>
    )
}

export default CartWidget