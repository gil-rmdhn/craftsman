// app/page.tsx
import ProductCard from '../components/productCard';
import Header from '../components/Header'; // Import Header

export default function Home() {
  // Data produk statis yang akan ditampilkan. Di sini, kamu bisa menambahkan data produk secara manual atau menggunakan data dari Prisma Studio untuk mengelola database
  const products = [
    {
      id: 1,
      name: 'Produk 1',
      slug: 'produk-1',
      price: 100,
      image: 'image1.jpg',
    },
    {
      id: 2,
      name: 'Produk 2',
      slug: 'produk-2',
      price: 150,
      image: 'image2.jpg',
    },
    // Tambahkan produk lainnya sesuai kebutuhan
  ];

  return (
    <div className="bg-white">
      <Header /> {/* Menampilkan header */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Produk Terbaru</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} slug={product.slug} price={product.price} image={product.image || ''} />
          ))}
        </div>
      </div>
    </div>
  );
}
