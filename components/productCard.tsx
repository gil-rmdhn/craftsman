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
    <div className="m-3 group relative border p-2 rounded-lg shadow bg-gray-800 ">
      {/* Image */}
      <div className="w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-90">
        <img src={image || '/images/default.jpg'} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>

      {/* Text */}
      <div className="mt-3 flex flex-col items-start">
        <h3 className="text-xs text-white truncate">
          <Link href={`/product/${slug}`}>{name}</Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-white">Rp {price.toLocaleString()}</p>
      </div>
    </div>
  );
}
