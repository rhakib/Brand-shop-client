import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import TestSlider from './TestSlider';

const Products = () => {
    const { id } = useParams()
    const loadedProducts = useLoaderData()
    const [data, setData] = useState(loadedProducts)
    const [brands, setBrands] = useState([])
    

    useEffect(() => {        
        const filteredData = data.filter((item) => item.brand.toLowerCase() === id.toLowerCase());
        setData(filteredData)  

        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBrands(data))
        
    }, [id])
    


    


    return (
        <div>
            <div className='text-4xl text-center'>
                {
                  brands ?   brands?.map(brand =><TestSlider key={brand._id} brand={brand}></TestSlider>) : <p>No products added</p>
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