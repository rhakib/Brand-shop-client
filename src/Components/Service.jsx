import React from 'react';
import headphone from '/p2.jpg'
import { BsFillPlayFill, BsHandbag } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { GoShieldCheck } from 'react-icons/go'

import { Link } from 'react-router-dom';

const Service = () => {
    return (

        <>
            

            <div className='bg-base-300 mt-12'>
                <section className="p-10 max-w-7xl mx-auto sm:p-20 rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Why Xiaomi Headphone?</h2>
                    <div className="grid lg:grid-cols-3 gap-9 mt-10 md:mt-28">
                        <div className="sm:flex  gap-4 lg:block space-y-6 sm:space-y-0 lg:space-y-6">
                            <div className="flex items-center gap-1">
                                <BsFillPlayFill className=' text-6xl'></BsFillPlayFill>
                                <div className="">
                                    <h3 className="text-2xl font-semibold">Exceptional Sound Quality</h3>
                                    <p className="text-lg text-gray-500 mt-3">Exceptional sound quality is not just heard; it's felt in the heart, resonating with the soul</p>
                                </div>
                            </div>
                            <div className="flex lg:mt-7 items-center gap-1">
                                <BsFillPlayFill className=' text-7xl'></BsFillPlayFill>
                                <div className="">
                                    <h3 className="text-2xl font-semibold">Versatile and User-Friendly</h3>
                                    <p className="text-lg text-gray-500 mt-3">Versatile and user-friendly, a harmonious blend of flexibility and simplicity, making life's easier to navigate.</p>
                                </div>
                            </div>
                        </div>

                        <img src={headphone} alt="" className="md:w-1/2 md:ml-40 lg:ml-0 lg:w-full  object-contain text-center" />

                        <div className="sm:flex gap-4 lg:block space-y-6 sm:space-y-0 lg:space-y-6">
                            <div className="flex items-center gap-1">
                                <BsFillPlayFill className=' text-7xl'></BsFillPlayFill>
                                <div className="">
                                    <h3 className="text-2xl font-semibold">Innovative Design</h3>
                                    <p className="text-lg text-gray-500 mt-3">Innovative design for headphones is the harmony of form and function to create a symphony of sensory delight.</p>
                                </div>
                            </div>
                            <div className="flex lg:mt-7 items-center gap-1">
                                <BsFillPlayFill className=' text-7xl'></BsFillPlayFill>
                                <div className="">
                                    <h3 className="text-2xl  font-semibold">Superior Build and Durability</h3>
                                    <p className="text-lg text-gray-500 mt-3">Our headphones are a testament to strength, ensuring your music accompanies you on every journey.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Link to='/'><button className='btn mt-4 hover:bg-purple-800 bg-purple-500 text-white text-lg'>Buy Now</button></Link>

                    </div>
                </section>
            </div>

            <div className='bg-base-300 mt-12'>
                <section className="p-10 max-w-7xl mx-auto sm:p-20 text-center  mt-8 rounded-lg">
                    <h2 className="text-2xl md:text-4xl font-bold">Experience Streamlined Shopping with Techify</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10 md:mt-28">
                        <div className="flex flex-col items-center">                           
                            <TbTruckDelivery className='text-5xl'></TbTruckDelivery>
                            <h3 className="font-semibold text-2xl my-3">Free Delivery</h3>
                            <p className="text-gray-500">Unlock the joy of convenience with free delivery - where your happiness arrives at your doorstep without the cost of a journey.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <BsHandbag className='text-5xl'></BsHandbag>
                            <h3 className="font-semibold text-2xl my-3">Self Pickup</h3>
                            <p className="text-gray-500">Self pickup: where you take control of convenience, making every step to your destination a choice, not a chance.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <GoShieldCheck className='text-5xl'></GoShieldCheck>
                            <h3 className="font-semibold text-2xl my-3">Warranty</h3>
                            <p className="text-gray-500">Warranty: Our promise of peace of mind, because your trust in quality deserves a safeguard.</p>
                        </div>
                    </div>
                </section>
            </div>

        </>

    );
};

export default Service;