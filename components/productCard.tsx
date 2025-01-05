// components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, slug, price, image }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`} className="group">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image src={image ? `/images/${image}` : '/images/produk1.jpg'} alt={name} width={300} height={300} className="h-full w-full object-cover object-center group-hover:opacity-75" />
      </div>
      {/* ... kode lainnya ... */}
    </Link>
  );
}
