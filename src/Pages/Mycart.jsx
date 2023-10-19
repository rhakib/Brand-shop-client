import React, { useEffect, useState } from 'react';
import useAuth from '../Provider/useAuth';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Components/Cart';

const Mycart = () => {
    const { user } = useAuth()
    const addedProducts = useLoaderData()
    const [cart, setCart] = useState(addedProducts)
    const email = user?.email;
    
    
    
    
    useEffect(() => {
        const filteredData = cart.filter((item) => item?.email == email);
        setCart(filteredData)
    }, [])
    
    return (       

        <div>
            <h2 className='text-center text-3xl mt-4'>Your selected products</h2>
            <hr className='my-6' />
            <div className='grid md:grid-cols-3 mt-8'>
                {
                    cart.map(singleCart => <Cart key={singleCart._id} singleCart={singleCart} cart={cart} setCart={setCart}></Cart>)
                }
            </div>

        </div>
    );
};

export default Mycart;