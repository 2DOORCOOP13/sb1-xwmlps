import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductForm from '../../components/admin/ProductForm';
import { useAuth } from '../../context/AuthContext';
import { Trash2 } from 'lucide-react';

function Dashboard() {
  const { products, loading, addProduct, deleteProduct } = useProducts();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Please sign in to access the admin dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your digital products</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <ProductForm onSubmit={addProduct} />
          </div>

          {/* Products List */}
          <div>
            <h2 className="text-xl font-bold mb-4">Your Products</h2>
            <div className="space-y-4">
              {loading ? (
                <p>Loading products...</p>
              ) : (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">{product.title}</h3>
                      <p className="text-sm text-gray-600">{product.category}</p>
                      <p className="text-sm font-medium text-purple-600">
                        {product.is_free ? 'Free' : `$${product.price}`}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;