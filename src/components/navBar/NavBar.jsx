import React from "react";
import {
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  MenuItemOption,   
  MenuGroup, 
  MenuOptionGroup, 
  MenuDivider, 
  Button, 
  Heading,
  Box,
} from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';
import CartWidget from "../cartWidget/CartWidget";
import './NavBar.css';


const NavBar = () => {
  return (
    <Box className='nav' p={2}>
        <Heading ml={3} color={'#243F4D'}>
          <Link to='/'>Pipasteleria</Link>
          </Heading>
        <Menu>
            <MenuButton as={Button} 
            bg={'#243F4D'} 
            color={'#fff'} 
            _hover={{ bg: '#3E6478', color: '#fff' }}
            rightIcon={<TiArrowSortedDown />
    }>
                Categorías
            </MenuButton>
            <MenuList>
                <MenuItem className="btnDropdown" >
                  <Link to={'/category/Tortas'}>Tortas personalizadas</Link>{" "} 
                  </MenuItem>
                <MenuItem className="btnDropdown"><Link to={'/category/Postres'}>Postres</Link>
                </MenuItem>
                <MenuItem className="btnDropdown"><Link to={'/category/Tartas dulces'}>Tartas dulces</Link>
                </MenuItem>
                <MenuItem className="btnDropdown"><Link to={'/category/Alfajores'}>Alfajores</Link>
                </MenuItem>
            </MenuList>
            </Menu>
            <CartWidget/>
    </Box>
  );
};



export default NavBar;