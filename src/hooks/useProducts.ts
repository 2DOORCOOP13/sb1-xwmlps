import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { DigitalProduct } from '../types';
import toast from 'react-hot-toast';

export function useProducts() {
  const [products, setProducts] = useState<DigitalProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      toast.error('Error fetching products');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (productData: FormData) => {
    try {
      setLoading(true);
      
      // Upload file
      const fileResponse = await supabase.storage
        .from('product-files')
        .upload(`files/${Date.now()}-${productData.get('file')}`, productData.get('file') as File);

      if (fileResponse.error) throw fileResponse.error;

      // Upload preview image
      const imageResponse = await supabase.storage
        .from('product-files')
        .upload(`previews/${Date.now()}-${productData.get('preview_image')}`, productData.get('preview_image') as File);

      if (imageResponse.error) throw imageResponse.error;

      // Insert product data
      const { error } = await supabase.from('products').insert([{
        title: productData.get('title'),
        description: productData.get('description'),
        price: parseFloat(productData.get('price') as string),
        category: productData.get('category'),
        file_url: fileResponse.data.path,
        preview_url: imageResponse.data.path,
        is_free: productData.get('is_free') === 'true',
      }]);

      if (error) throw error;
      
      toast.success('Product added successfully');
      fetchProducts();
    } catch (error) {
      toast.error('Error adding product');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('products')
        .delete()
        .match({ id });

      if (error) throw error;
      
      toast.success('Product deleted successfully');
      fetchProducts();
    } catch (error) {
      toast.error('Error deleting product');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    addProduct,
    deleteProduct,
    fetchProducts
  };
}