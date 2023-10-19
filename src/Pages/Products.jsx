import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {
    const { id } = useParams()
    const loadedProducts = useLoaderData()
    const [data, setData] = useState(loadedProducts)
    const [brands, setBrands] = useState([])
    const [filteredbrand, setFilteredbrand] = useState([])

    useEffect(() => {        
        const filteredData = data.filter((item) => item.brand.toLowerCase() === id.toLowerCase());
        setData(filteredData)  

        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data => setBrands(data))
        const filteredBrands = brands.filter(brand => brand.brand.toLowerCase() === id.toLowerCase())
        setFilteredbrand(filteredBrands)
        
    }, [id])
    


    


    return (
        <div>
            <div className='text-4xl text-center'>
                {
                    filteredbrand.map(brand => <div>{brand.brand}</div>)
                }
            </div>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    data.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>

        </div>
    );
};

export default Products;