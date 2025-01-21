import prisma from '../lib/prisma';
import ProductCard from '../components/productCard';
import Header from '../components/Header';

export default async function Home() {
  const products = await prisma.product.findMany({
    take: 12,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Header */}
      <Header />

      {/* Konten Produk */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl mt-3 font-bold text-white">Produk Terbaru</h2>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} slug={product.slug} price={Number(product.price)} image={product.image || ''} />
          ))}
        </div>
      </div>
    </div>
  );
}
