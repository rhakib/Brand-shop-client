import React from 'react';

const TestSlider = ({brand}) => {
    const {image1, image2, image3, brand1 , brand2, brand3} = brand;
    console.log(brand);
    return (
        <section className="relative px-5 lg:p-0">
            <div className="carousel w-full mt-10 h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="absolute rounded-md opacity-50 "> <img className="h-[320px] md:h-[320px]  lg:h-[500px] lg:w-full"
                            src={image1} alt="" /></div>

                    <div
                        className="max-w-lg absolute lg:top-24 mt-4 lg:m-0  md:left-40 md:top-8  lg:left-[330px] text-white text-center">

                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">{brand1}</h1>
                        <button className="btn mt-5 bg-[#F85559] text-white border-none hover:bg-[#F85559]">Shop
                            Now</button>

                    </div>
                   
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="absolute rounded-md opacity-50 "> <img className="h-[320px] md:h-[320px]  lg:h-[500px]"
                                src={image2} alt="" /></div>

                        <div
                            className="max-w-lg absolute lg:top-24 mt-4 lg:m-0  md:left-40 md:top-8  lg:left-[330px] text-white text-center">

                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">{brand2}</h1>
                            <button className="btn mt-5 bg-[#F85559] text-white border-none hover:bg-[#F85559]">Shop
                                Now</button>

                        </div>
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="absolute rounded-md opacity-50 "> <img className="h-[320px] md:h-[320px]  lg:h-[500px]"
                                src={image3} alt="" />
                        </div>

                        <div
                            className="max-w-lg absolute lg:top-24 mt-4 lg:m-0  md:left-40 md:top-8   lg:left-[330px] text-white text-center">

                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">{brand3}</h1>
                            <button className="btn mt-5 bg-[#F85559] text-white border-none hover:bg-[#F85559]">Shop
                                Now</button>

                        </div>
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default TestSlider;



// [
//     {
//         "_id": 1,
//         "image": "https://i.ibb.co/CvgHDrh/brand.jpg",
//         "brand": "Apple"
//     },
//     {
//         "_id": 2,
//         "image": "https://i.ibb.co/qJycQbS/Brand.jpg",
//         "brand": "OnePlus"
//     },
//     {
//         "_id": 3,
//         "image": "https://i.ibb.co/CvgHDrh/brand.jpg",
//         "brand": "Samsung"
//     },
//     {
//         "_id": 4,
//         "image": "https://i.ibb.co/qJycQbS/Brand.jpg",
//         "brand": "Xiaomi"
//     }
//     ,
//     {
//         "_id": 5,
//         "image": "https://i.ibb.co/CvgHDrh/brand.jpg",
//         "brand": "DJI"
//     },
//     {
//         "_id": 6,
//         "image": "https://i.ibb.co/qJycQbS/Brand.jpg",
//         "brand": "GoPro"
//     }
// ]