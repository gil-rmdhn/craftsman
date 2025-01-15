import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white font-sans shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo atau Nama Toko */}
        <Link href="/" legacyBehavior>
          ProdukCraft
        </Link>

        {/* Navigasi Menu */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" legacyBehavior>
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                Kontak
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <input type="text" placeholder="Cari produk..." className="rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Image src="/magnifying-glass-solid.svg" alt="Search Icon" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
}