import React, { useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import { Flex, Spinner } from '@chakra-ui/react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'


const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
      const getProduct = async() => {
        const queryRef = doc(db, 'productos', productId)

        const response = await getDoc(queryRef)

        const newItem = {
          ...response.data(),
          id: response.id
        }
        setProduct(newItem)
        setLoading(false)
      }
      getProduct()
    },[])

    return (
    <div>
              {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'90vh'}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> 
        </Flex>
        : 
        <>
         <Flex justify={'center'} align={'center'} h={'70vh'}>
          <ItemDetail {...product} />
          </Flex>
        </>
      }
    </div>
  )
}

export default ItemDetailContainer