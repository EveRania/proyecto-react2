import React from "react";
import {
  Menu, MenuButton, MenuList, MenuItem, MenuItemOption,   MenuGroup, MenuOptionGroup, MenuDivider, Button, Heading,
  Box} from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';
import CartWidget from "../cartWidget/CartWidget";
import './NavBar.css';
// import './img/Logo_mele_pasteleria'

const NavBar = () => {
  return (
    <Box className='nav' p={2}>
        <Heading ml={3}><Link to='/'>Pipasteleria</Link></Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowSortedDown />
    }>
                Categorías
            </MenuButton>
            <MenuList>
                <MenuItem><Link to={'/category/Tortas'}>Tortas personalizadas</Link> </MenuItem>
                <MenuItem><Link to={'/category/Postres'}>Postres</Link></MenuItem>
                <MenuItem><Link to={'/category/Tartas dulces'}>Tartas dulces</Link></MenuItem>
                <MenuItem><Link to={'/category/Alfajores'}>Alfajores</Link></MenuItem>
            </MenuList>
            </Menu>
            <CartWidget/>
    </Box>
  )
}


// const NavBar = () => {
//   return (
//     <div className="navbar">
//       <div>
//         <img
//           src="https://images.vexels.com/media/users/3/193832/isolated/preview/b6b26a5dbfe612067b652c60670b1239-pastel-pasteleria-plano-navidad.png"
//           alt="Logo_mele_pasteleria"
//           style={{ width: "100px" }}
//         />
//       </div>
//       <Menu>
//         <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
//           Productos
//         </MenuButton>
//         <MenuList>
//           <MenuItem>Tortas personalizadas</MenuItem>
//           <MenuItem>Postres</MenuItem>
//           <MenuItem>Tartas dulces</MenuItem>
//           <MenuItem>Alfajores</MenuItem>
//           <MenuItem>Desayunos, boxes y ocasiones espciales</MenuItem>
//         </MenuList>
//       </Menu>
//       <CartWidget />
//     </div>
//   )
// }

export default NavBar
