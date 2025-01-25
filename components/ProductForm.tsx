import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ProductForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/route', {
        // Ubah endpoint ke '/api/route'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...productData,
          price: Number(productData.price),
        }),
      });

      if (response.ok) {
        router.push('/'); // Redirect ke halaman utama
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error('Gagal menyimpan produk:', error);
      alert('Terjadi kesalahan');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nama Produk</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Harga</label>
          <input type="number" name="price" value={productData.price} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Deskripsi</label>
          <textarea name="description" value={productData.description} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">URL Gambar</label>
          <input type="text" name="image" value={productData.image} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>

        <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {isLoading ? 'Menyimpan...' : 'Simpan Produk'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
