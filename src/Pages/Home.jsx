import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';

const Home = () => {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    console.log(brands);
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl text-center my-10 font-semibold'>Shop By brand</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6'>
                {
                    brands.map(brandName => <Brands key={brandName._id} brandName={brandName}></Brands>)
                }
            </div>
        </div>
    );
};

export default Home;