// import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useProductData from "../../hooks/useProductData";
import { getProducts } from "../../data/asyncMock";
import ItemList from '../itemList/ItemList';

const ItemListContainer = ({ title }) => {
const [data, setData ] = useState([])

useEffect(() => {
  getProducts ()
  .then((el) => setData(el))
  .catch ((error) => console.log(error))
}, [])


  console.log(data)
  return (
    <div>
      <h1>{title}</h1>
      <ItemList data ={data} />
    </div>
  );
};

export default ItemListContainer;
