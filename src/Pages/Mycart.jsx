import React, { useEffect, useState } from 'react';
import useAuth from '../Provider/useAuth';
import { Link, useLoaderData } from 'react-router-dom';
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
            <hr className='my-6 max-w-7xl mx-auto' />
            {
                cart.length !== 0 ? <><div className='grid md:grid-cols-3 px-5  mt-8 max-w-7xl mx-auto'>
                {
                    cart.map(singleCart => <Cart key={singleCart._id} singleCart={singleCart} cart={cart} setCart={setCart}></Cart>)
                }
            </div></> : 
            <>
               <div>
                                <div className='flex flex-col mt-6 items-center justify-center space-y-6'>
                                    <h2 className='font-bold text-4xl'>You didn't added any products</h2>
                                    <p className='text-lg'>Explore our store to buy products</p>
                                    <Link to='/'><button className='btn hover:bg-purple-800 bg-purple-600 text-white text-lg'>Go to store</button></Link>
                                </div>
                            </div>
            </>
            }

        </div>
    );
};

export default Mycart;