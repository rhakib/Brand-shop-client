import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateProducts = () => {

    const loadedProducts = useLoaderData()
    const {_id, image, name, brand, category, price, description, rating } = loadedProducts;
   


    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = { image, name, brand, category, price, description, rating };

        fetch(`http://localhost:5000/addproduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('updated successfully')
                }
            })
    }

    return (
                  
            <div className="bg-purple-300 p-24">
                <h2 className="text-3xl text-center font-extrabold">Update your <span className='text-purple-800 text-4xl'>{name}</span></h2>
                <form onSubmit={handleUpdate} className="mt-8 space-y-8">
                    {/* img and Name row */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} placeholder="Img url" className="w-full input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="w-full input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* Brand and Category row */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <select name="brand" placeholder="Brand Name" className="w-full input input-bordered">
                                    <option value="Apple">Apple</option>
                                    <option value="OnePlus">OnePlus</option>
                                    <option value="Xiaomi">Xiaomi</option>
                                    <option value="Samsung">Samsung</option>
                                    <option value="DJI">DJI</option>
                                    <option value="GoPro">GoPro</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category" defaultValue={category} className="w-full input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* Price and description row */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" defaultValue={price} className="w-full input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Short description" defaultValue={description} className="w-full input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* Rating row */}
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="w-full input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="btn font-bold border-0 hover:bg-purple-700 text-white bg-purple-500 btn-block" />
                </form>
            </div>
       
    );
};

export default UpdateProducts;