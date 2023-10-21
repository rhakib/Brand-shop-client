import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="h-[45vh] md:h-[60vh] lg:h-[85vh]" style={{ backgroundImage: 'url("https://i.ibb.co/zrDYtPh/banner.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
            <div className="bg-black h-full w-full bg-opacity-0 relative">
                <div className='absolute md:w-[600px] top-16 md:top-32 left-6 md:left-12 lg:left-24'>
                    <h1 className="text-4xl  md:text-7xl  text-black  font-bold">Elevate Your Audio Journey</h1>
                    <Link to='https://brandshop-client.web.app/products/Apple'>
                        <button className="btn mt-6 btn-primary">Shop Now</button>
                    </Link>
                    <button className="ml-4 font-bold text-white text-2xl">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;