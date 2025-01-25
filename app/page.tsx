import prisma from '../lib/prisma';
import ProductCard from '../components/productCard';
import ProductForm from '../components/ProductForm';

export default async function Home() {
  const products = await prisma.product.findMany({
    take: 12,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl mt-3 font-bold text-white">Produk Terbaru</h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-white">Tambah Produk Baru</h1>
        <ProductForm />
      </div>

      <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} id={product.id} name={product.name} slug={product.slug} price={Number(product.price)} image={product.image || ''} />
        ))}
      </div>
    </div>
  );
}
