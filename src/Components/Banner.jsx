import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="h-[85vh] rounded-b-3xl" style={{ backgroundImage: 'url("https://i.ibb.co/zrDYtPh/banner.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
            <div className="bg-black h-full w-full bg-opacity-0 relative">
                <div className='absolute w-[500px] top-52 left-24'>
                    <h1 className="text-6xl text-black  font-bold">Elevate Your Audio Journey</h1>
                    <Link to='http://localhost:5173/productDetail/Headphone'>
                        <button className="btn mt-6 btn-primary">Shop Now</button>
                    </Link>
                    <button className="ml-4 font-bold text-white text-2xl">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;