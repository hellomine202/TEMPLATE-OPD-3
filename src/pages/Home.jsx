import React from 'react';
import usergroupicon from '/src/assets/icons/user-group.svg';
import knowledgeicon from '/src/assets/icons/knowledge.svg';
import reporticon from '/src/assets/icons/report-analysis.svg';
import newsicon from '/src/assets/icons/pr.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faNewspaper, faHandsHelping, faBuilding, faDollarSign, faFlag } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      {/* Top Section */}
      <div
        className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center bg-hero-pattern"
      >
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Berpancang Amanah Bersauh Marwah
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Selamat Datang di Portal Website Provinsi Kepulauan Riau
          </p>
          {/* Search Bar */}
          <div className="flex justify-center items-center mb-8">
            <input
              type="text"
              placeholder="Pencarian"
              className="px-4 py-2 w-full max-w-md rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Dalam Berita</option>
              <option>Dalam Layanan</option>
              <option>Dalam Instansi</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
              CARI
            </button>
          </div>
          {/* Button Group */}
          <div className="flex justify-center space-x-4">
            {/* Buttons for navigation */}
            <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-4 rounded-lg shadow-md w-24 h-32 flex flex-col items-center justify-center">
            <img src={reporticon} alt="User Group" style={{ height: '40px', width: 'auto' }} className="mx-auto mb-2" />
              <span className="text-blue-900 font-semibold">Sejarah</span>
            </button>
            <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-4 rounded-lg shadow-md w-24 h-32 flex flex-col items-center justify-center">
            <img src={newsicon} alt="School" className="h-10 mx-auto mb-2" />
              <span className="text-blue-900 font-semibold">Berita</span>
            </button>
            <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-4 rounded-lg shadow-md w-24 h-32 flex flex-col items-center justify-center">
              <FontAwesomeIcon icon={faHandsHelping} className="h-10 mx-auto mb-2 text-blue-900" />
              <span className="text-blue-900 font-semibold">Layanan</span>
            </button>
            <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-4 rounded-lg shadow-md w-24 h-32 flex flex-col items-center justify-center">
              <FontAwesomeIcon icon={faBuilding} className="h-10 mx-auto mb-2 text-blue-900" />
              <span className="text-blue-900 font-semibold">Instansi</span>
            </button>
            <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-4 rounded-lg shadow-md w-24 h-32 flex flex-col items-center justify-center">
              <FontAwesomeIcon icon={faDollarSign} className="h-10 mx-auto mb-2 text-blue-900" />
              <span className="text-blue-900 font-semibold">Keuangan</span>
            </button>
            <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-4 rounded-lg shadow-md w-24 h-32 flex flex-col items-center justify-center">
              <FontAwesomeIcon icon={faFlag} className="h-10 mx-auto mb-2 text-blue-900" />
              <span className="text-blue-900 font-semibold">Lapor</span>
            </button>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="bg-gray-100 py-8 flex justify-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
          {/* Main News Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/assets/berita1.jpg" alt="Main News" className="w-full h-auto" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Rumah Singgah Provinsi Kepri, Terbukti Meringankan Beban Masyarakat & Meningkatkan Akses Kesehatan
              </h2>
              <p className="text-gray-600 text-sm">
                11 bulan lalu • Gubernur
              </p>
            </div>
          </div>

          {/* Sidebar with Article List */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">Berita Terbaru</h1>
            <ul>
              <li className="flex mb-6">
                <img src="/assets/artikel1.jpeg" alt="Artikel 1" className="w-20 h-20 rounded-md mr-4 flex-shrink-0" />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-semibold text-justify overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Visitasi Kepemimpinan Nasional, Kolaborasi Pemprov Kepri dan Kaltim
                  </h3>
                  <p className="text-gray-600 text-xs">
                    17 jam lalu • Sekretariat Daerah
                  </p>
                </div>
              </li>
              <li className="flex mb-6">
                <img src="/assets/artikel1.jpeg" alt="Artikel 2" className="w-20 h-20 rounded-md mr-4 flex-shrink-0" />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-semibold text-justify overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Gubernur Ansar Tegaskan Komitmen Anti-Korupsi: Fokus pada Perizinan dan Pengadaan Barang di Kepri
                  </h3>
                  <p className="text-gray-600 text-xs">
                    22 jam lalu • Infrastruktur
                  </p>
                </div>
              </li>
              <li className="flex mb-6">
                <img src="/assets/artikel1.jpeg" alt="Artikel 3" className="w-20 h-20 rounded-md mr-4 flex-shrink-0" />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-semibold text-justify overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Silaturahmi Ke Batu Aji, Gubernur Ansar: SPP Gratis Untuk SMA Sudah Berlaku
                  </h3>
                  <p className="text-gray-600 text-xs">
                    1 hari lalu • Gubernur
                  </p>
                </div>
              </li>
              <li className="flex">
                <img src="/assets/artikel1.jpeg" alt="Artikel 4" className="w-20 h-20 rounded-md mr-4 flex-shrink-0" />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-semibold text-justify overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Gubernur Ansar Buka Rakor Pengawas Desa 2024: Wujudkan Pengelolaan Dana Desa yang Efektif dan Transparan
                  </h3>
                  <p className="text-gray-600 text-xs">
                    2 hari lalu • Gubernur
                  </p>
                </div>
              </li>
            </ul>
            <div className="text-center mt-6">
              <button className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 text-sm">
                Lihat Artikel Lainnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}