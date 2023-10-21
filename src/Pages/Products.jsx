import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import Slider from './Slider';

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
                    brands?.map(brand => <Slider key={brand._id} brand={brand}></Slider>)
                }

            </div>
            <div className='max-w-7xl mx-auto'>
                {
                    data.length !== 0 ?
                           <> 
                            <h2 className='text-4xl text-center mt-12 font-semibold'>Explore our Products</h2>
                            <hr className='my-8 w-96 mx-auto border-2 border-purple-500'/>
                            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-8'>
                                {
                                    data.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                                }
                            </div>
                             </> : (
                            <div>
                                <div className='flex py-12 flex-col mt-6 items-center justify-center space-y-6'>
                                    <h2 className='font-bold text-4xl'>No products available</h2>
                                    <p className='text-lg'>Explore our store to buy products</p>
                                    <Link to='/'><button className='btn hover:bg-purple-800 bg-purple-600 text-white text-lg'>Go to store</button></Link>
                                </div>
                            </div>

                        )


                }
            </div>

        </div>
    );
};

export default Products;