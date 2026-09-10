import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProductForm() {
    const [productData, setProductData] = useState(null);
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        prodName: "",
        prodCategory: "",
        prodPrice: "",
        prodStock : "",
        prodStatus: "",
        
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setSaved(false);
    }
    const handelSave = () => {
        console.log("Product save:", formData);
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
            navigate("/product/list");
        }, 3000)
    }
    const handelReset = () => {
        navigate("/product/list");
        if (productData) {
            setFormData(productData);
            
        }
        setSaved(false);
    }
  return (
    <div className='space-y-6'>
            <div className='bg-white border border-gray-200 rounded-2xl shadow-sm'>
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800">Product Form</h3>
                </div>
                <div className="p-6 space-y-6 border-b border-gray-300">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                            type='text'
                            name='prodName'
                            value={formData.prodName}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                            name='prodCategory'
                            value={formData.prodCategory}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        >
                            <option value={"Electronics"}>Electronics</option>
                            <option value={"Audio"}>Audio</option>
                            <option value={"Wearables"}>Wearables</option>
                            <option value={"Accessories"}>Accessories</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                        <input
                            type='number'
                            name='prodPrice'
                            value={formData.prodPrice}
                            onChange={handleChange}
                            placeholder="Enter product price"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                        <input
                            type='number'
                            name='prodStock'
                            value={formData.prodStock}
                            onChange={handleChange}
                            placeholder="Enter product price"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <select
                            name='prodStatus'
                            value={formData.prodStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        >
                            <option value={"In Stock"}>In Stock</option>
                            <option value={"Low Stock"}>Low Stock</option>
                            <option value={"Out of Stock"}>Out of Stock</option>
                        </select>
                    </div>
                </div>
                <div className='p-6 space-y-6'>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            {
                                saved && (
                                    <p className="text-sm text-emerald-600">✓ Product saved successfully!</p>
                                )
                            }
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handelReset}
                                className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition cursor-pointer">Reset</button>
                            <button
                                onClick={handelSave}
                                className="px-5 py-2.5 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm shadow-sm hover:shadow-md transition cursor-pointer"
                            >
                                Save Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default ProductForm