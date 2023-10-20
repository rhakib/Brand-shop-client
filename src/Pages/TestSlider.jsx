import React from 'react';
import { Link } from 'react-router-dom';

const TestSlider = ({ brand }) => {
    const { image1, image2, image3, brand1, brand2, brand3 } = brand;
    console.log(brand);
    return (
        <div className="carousel lg:h-[550px] w-full">
            <div id="slide1" className="carousel-item relative  w-full">
                <img src={image1} className="w-full" />
                <div className='absolute bg-black opacity-70 text-2xl md:text-4xl  top-6 font-semibold md:top-20 lg:top-24 left-16 md:left-60 lg:left-[80px] rounded-xl py-3 md:py-16 px-8 space-y-3'>
                    <h1 className='text-red-500 '>AirPods Pro</h1>
                    <p className='text-white leading-10	w-60'>Up to 2x more Active Noise Cancellation.</p>
                    <Link to='http://localhost:5173/products/Apple'><button className='mt-4 bg-white text-lg p-2 rounded-lg' >Buy now</button></Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className='absolute bg-black opacity-70 text-2xl md:text-4xl  top-6 font-semibold md:top-20 lg:top-20 left-16 md:left-60 lg:left-[80px] rounded-xl py-3 md:py-16 px-8 space-y-3'>
                    <h1 className='text-red-500 w-60'>Samsung Battery Pack</h1>
                    <p className='text-white leading-10	w-60'>2x more fast Charge on the move.</p>
                    <Link to='http://localhost:5173/products/Samsung'><button className='mt-4 bg-white text-lg p-2 rounded-lg' >Buy now</button></Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full" />
                <div className='absolute bg-black opacity-70 text-2xl md:text-4xl  top-6 font-semibold md:top-20 lg:top-24 left-16 md:left-60 lg:left-[880px] rounded-xl py-3 md:py-16 px-8 space-y-3'>
                    <h1 className='text-red-500 '>Poco X3</h1>
                    <p className='text-white leading-10	w-60'>Explore the Never Settle with premium build quality</p>
                    <Link to='http://localhost:5173/products/Apple'><button className='mt-4 bg-white text-lg p-2 rounded-lg' >Buy now</button></Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default TestSlider;



