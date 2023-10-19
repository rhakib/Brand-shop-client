import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({ brandName }) => {

    const { image, _id, brand } = brandName;

    return (
        <Link to={`/products/${brand}`}>
            <div className="max-w-sm h-[520px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 ">
                <img className="rounded-t-lg h-2/3 w-full" src={image} alt="" />
                <div className="flex flex-col justify-center items-center gap-8 ">
                    <h5 className="mt-6 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{brand}</h5>
                    <div className=''>
                        <Link to={`/products/${brand}`}><button className='btn '>Shop Now</button></Link>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Brands;