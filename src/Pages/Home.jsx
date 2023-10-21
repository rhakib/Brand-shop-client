import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import Service from '../Components/Service';

const Home = () => {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('https://brandshop-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl text-center mt-10 font-semibold'>Shop By brand</h2>
            <hr className='my-4 w-36 mx-auto border-2 border-purple-500' />
            <p className='text-center mt-4 text-lg'>Elevate Your Digital Lifestyle with the Latest in Tech Excellence.</p>
            <div className='bg-slate-200 '>
                <div className='grid md:grid-cols-2 max-w-7xl mx-auto p-8 rounded-lg lg:grid-cols-3 mt-12 gap-6'>
                    {
                        brands.map(brandName => <Brands key={brandName._id} brandName={brandName}></Brands>)
                    }
                </div>
            </div>
            <div className=''>
                <Service></Service>
            </div>
        </div>
    );
};

export default Home;