import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent'); // Default transparan

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Jika di-scroll lebih dari 50px
        setNavbarBg('bg-blue-900 shadow-md'); // Ubah ke warna biru dengan bayangan
      } else {
        setNavbarBg('bg-transparent'); // Ubah kembali menjadi transparan
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navbarBg} text-white p-4 fixed w-full z-50 transition-colors duration-500`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Gambar di sebelah kiri */}
        <div className="flex items-center">
          <img src="/assets/tulisan.png" alt="Logo" className="h-16 mr-4" /> {/* Logo dengan ukuran lebih besar */}
        </div>

        {/* Hamburger menu for mobile */}
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.414 6l-7.707 7.707L4 6 5.414 4.586 12 11.172l6.586-6.586L19.414 6z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>

        {/* Menu di sebelah kanan */}
        <ul className="lg:flex lg:space-x-6 hidden lg:block">
          <li>
            <Link to="/" className="hover:text-gray-300 px-4 py-2 block">Beranda</Link>
          </li>
          <li className="relative group">
            <Link
              to="/pemerintahan"
              className="hover:text-gray-300 px-4 py-2 block focus:outline-none"
            >
              Pemerintahan
            </Link>
            <ul className="absolute top-full left-0 bg-blue-800 text-white mt-2 w-48 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li>
                <Link to="/sejarah" className="block px-4 py-2 hover:bg-blue-700">Sejarah</Link>
              </li>
              <li>
                <Link to="/visi-misi" className="block px-4 py-2 hover:bg-blue-700">Visi dan Misi</Link>
              </li>
              <li>
                <Link to="/perangkat-daerah" className="block px-4 py-2 hover:bg-blue-700">Perangkat Daerah</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link
              to="/publikasi"
              className="hover:text-gray-300 px-4 py-2 block focus:outline-none"
            >
              Publikasi
            </Link>
            <ul className="absolute top-full left-0 bg-blue-800 text-white mt-2 w-48 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li>
                <Link to="/berita" className="block px-4 py-2 hover:bg-blue-700">Berita</Link>
              </li>
              <li>
                <Link to="/pengumuman" className="block px-4 py-2 hover:bg-blue-700">Pengumuman</Link>
              </li>
              <li>
                <Link to="/agenda" className="block px-4 py-2 hover:bg-blue-700">Agenda</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/galeri" className="hover:text-gray-300 px-4 py-2 block">Galeri</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
