import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Asa Cipto-Roso
          </Link>

          {/* Navigasi */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white">
                  Kategori
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Kontak
                </Link>
              </li>
            </ul>
          </nav>

          {/* Pencarian */}
          <div className="relative">
            <input type="text" placeholder="Cari produk..." className="px-4 py-2 rounded-md text-gray-700 focus:outline-none" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
