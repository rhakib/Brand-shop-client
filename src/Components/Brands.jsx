import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({ brandName }) => {

    const { image, _id, brand } = brandName;
    
    return (
        <div className="max-w-sm h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg h-2/3 w-full" src={image} alt="" />
            </a>
            <div className="">
                <a href="#">
                    <h5 className="mb-2 text-4xl text-center my-16 font-bold tracking-tight text-gray-900 dark:text-white">{brand}</h5>
                </a>
                <Link to={`/products/${brand}`}><button className='btn'>Shop Now</button></Link>
            </div>
        </div>

    );
};

export default Brands;