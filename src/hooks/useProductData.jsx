import React, { useEffect, useState } from 'react'

const useProductData = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                // const response = await fetch('https://dummyjson.com/products?limit=10')
                const products = await response.json()
                setData(products.products)

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])
  return {
    data
  }
}

export default useProductData