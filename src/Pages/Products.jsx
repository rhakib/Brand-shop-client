import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Products = () => {
    const { id } = useParams()
    const loadedProducts = useLoaderData()
    const [data, setData] = useState(loadedProducts)

    useEffect(() => {
        const filteredData = data.filter((item) => item.brand.toLowerCase() === id.toLowerCase());
        setData(filteredData)

    }, [id])


    console.log(data);

    return (
        <div>
            <div className='text-4xl text-center'>
                <h2>Slider</h2>
            </div>
            <div>
                <h2>Products</h2>
            </div>

        </div>
    );
};

export default Products;