import React, { useEffect, useState } from 'react'
import { api } from '../services/api';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loadProductsData = async () => {
    setLoading(true);
    try {
      const data = await api.getProducts();
      setProductsData(data);
    } catch (error) {
      console.log("User loading filed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProductsData();
  }, []);

  //Show Loading 
  if (loading && productsData.length == 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  //Check productsData is null
  if (!productsData) {
    return (
      <div className="p-6 bg-white rounded-xl border border-gray-200">
        <div>
          <p>Product data not available</p>
        </div>
      </div>
    )
  }
  return (
    <div className='space-y-6'>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div className="text-lg font-semibold text-gray-800">
          All Products ({productsData.length})
        </div>
        <button
          onClick={() => navigate("/product/form")}
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-sm transition cursor-pointer"
        >
          <Plus size={22} />
          Add New Product
        </button>

      </div>
      <div className="bg-white border border-gray-100 rounded-2xl overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs">
              <th className="px-5 py-3.5 text-left font-bold uppercase tracking-wider">Product</th>
              <th className="px-5 py-3.5 text-left font-bold uppercase tracking-wider">Category</th>
              <th className="px-5 py-3.5 text-left font-bold uppercase tracking-wider">Price</th>
              <th className="px-5 py-3.5 text-left font-bold uppercase tracking-wider">Stock</th>
              <th className="px-5 py-3.5 text-left font-bold uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              productsData.map((product, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td
                    className="px-5 py-4 font-light text-sm text-left"
                  >
                    {product.name}
                  </td>
                  <td
                    className="px-5 py-4 font-light text-sm text-left"
                  >
                    {product.category}
                  </td>
                  <td
                    className="px-5 py-4 font-light text-sm text-left"
                  >
                    {product.price}
                  </td>
                  <td
                    className="px-5 py-4 font-light text-sm text-left"
                  >
                    {product.stock}
                  </td>
                  <td
                    className="px-5 py-4 font-light text-sm text-left"
                  >
                    {product.status}
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products