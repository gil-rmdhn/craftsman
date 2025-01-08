// app/page.tsx
import prisma from '../lib/prisma'; // Import dari lib/prisma.ts
import ProductCard from '../components/productCard';
import Header from '../components/Header'; // Import Header

export default async function Home() {
  // Ambil data produk dari database menggunakan Prisma
  const products = await prisma.product.findMany({
    take: 12,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      {/* Konten Produk */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* Looping untuk menampilkan produk */}
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} slug={product.slug} price={Number(product.price)} image={product.image || ''} />
          ))}
        </div>
      </div>
    </div>
  );
}
