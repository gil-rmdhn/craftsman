import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, slug, price, image }: ProductCardProps) {
  return (
    <div className="group relative border p-4 rounded-lg shadow">
      <img src={image || '/images/default.jpg'} alt={name} className="h-48 w-full object-cover rounded-md" />
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">
          <Link href={`/product/${slug}`}>
            <a className="hover:underline">{name}</a>
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">ID: {id}</p>
        <p className="mt-1 text-lg font-medium text-gray-900">Rp {price.toLocaleString()}</p>
      </div>
    </div>
  );
}
