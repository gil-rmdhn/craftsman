// app/page.tsx
import prisma from '../lib/prisma'; // Import dari lib/prisma.ts
import ProductCard from '../components/productCard';

export default async function Home() {
  const products = await prisma.product.findMany({
    take: 12,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      category: true,
    },
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Produk Terbaru</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} slug={product.slug} price={Number(product.price)} image={product.image || ''} />
          ))}
        </div>
      </div>
    </div>
  );
}
