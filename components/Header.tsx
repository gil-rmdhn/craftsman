import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white font-sans shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo atau Nama Toko */}
        <Link href="/" legacyBehavior>
          Asa Cipto-Roso
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
      </div>
    </header>
  );
}
