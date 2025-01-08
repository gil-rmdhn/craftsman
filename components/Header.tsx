import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white font-sans">
      {' '}
      {/* Gunakan font-sans */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          ProdukCraft
        </Link>

        {/* Navigasi */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Kontak
              </Link>
            </li>
          </ul>
        </nav>

        {/* Pencarian */}
        <div className="relative">
          <input type="text" placeholder="Cari produk..." className="rounded-lg px-4 py-2 text-gray-800 focus:outline-none" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Image src="/magnifying-glass-solid.svg" alt="Cart Icon" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
