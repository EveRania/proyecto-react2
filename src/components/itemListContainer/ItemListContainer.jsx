import React, { useEffect, useState } from 'react'
// import useProductData from '../../hooks/UseProductData'
import ItemList from '../itemList/ItemList';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { Flex, Heading, Spinner } from '@chakra-ui/react'
import { db } from '../../config/firebase';

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()


useEffect(() => {
  setLoading(true)
  const getData = async() => {
    const queryRef = !categoryId ? collection(db, 'productos') : query(collection(db, 'productos'), where('categoria', '==', categoryId))

    const response = await getDocs(queryRef)

    const products = response.docs.map((doc) => {
      const newObj = {
        ...doc.data(),
        id: doc.id
      }
      return newObj
    })

    setData(products)
    setLoading(false)
  }

  getData()

},[categoryId])

return (
  <Flex direction={'column'} justify={'center'} align={'center'}> 
    {
      loading ?
      <Flex justify={'center'} align={'center'} h={'90vh'}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='243F4D'
          size='xl'
          /> 
        </Flex> 
        : 
      <>
        <Heading color={'#FCD7B6'} mt={10}>{title}</Heading>
        <ItemList data={data} />
      </>
    }
  </Flex>
)
}

export default ItemListContainer
