import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4">
        {/* Left Section */}
        <div className="lg:col-span-2 text-left">
          <h2 className="text-3xl font-bold mb-2 mt-8">Portal Website OPD Pemprov Kepri</h2>
          <p className="text-sm mb-4">
            Portal ini dikembangkan dan dikelola oleh Dinas Komunikasi dan Informatika Provinsi Kepulauan Riau.
          </p>
          <p className="text-sm">
            Alamat: Pusat Pemerintahan Provinsi Kepulauan Riau Istana Kota Piring Gedung Sultan Mahmud Riayat Syah, 
            Pulau Dompak, Kec. Bukit Bestari, Kota Tanjungpinang.
          </p>
          <p className="text-sm mt-2">Email: email@kepriprov.go.id, Telepon: 0771-123456</p>
          <h3 className="text-lg font-bold mt-4">Jam Layanan</h3>
          <p className="text-sm">
            Senin - Kamis (08:00 s/d 16:00), Jumat (08:00 s/d 15:00), Sabtu-Minggu (Libur)
          </p>
        </div>

        {/* Social Media Section */}
        <div className="text-left">
          <h3 className="text-lg font-bold mb-2 mt-8">Sosial Media</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Youtube</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Tiktok</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>

        {/* Visitor Statistics Section */}
        <div className="text-left">
          <h3 className="text-lg font-bold mb-2 mt-8">Statistik Kunjungan</h3>
          <ul className="space-y-2">
            <li>Sedang Online: <span className="float-right">14</span></li>
            <li>Hari Ini: <span className="float-right">7,458</span></li>
            <li>Kemarin: <span className="float-right">12,222</span></li>
            <li>Bulan Ini: <span className="float-right">577,129</span></li>
            <li>Bulan Kemarin: <span className="float-right">503,832</span></li>
          </ul>
        </div>

        {/* Supported By Section */}
        <div className="text-left">
          <h3 className="text-lg font-bold mb-2">Didukung Oleh</h3>
          <div className="flex justify-start space-x-4">
            <img src="/assets/logo.png" alt="Support Logo 1" className="h-12" />
            <img src="/assets/logo.png" alt="Support Logo 2" className="h-12" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-center py-6 mt-8">
        <p className="text-sm">
          Copyright © 2022 Pemerintah Provinsi Kepulauan Riau
        </p>
      </div>
    </footer>
  );
};

export default Footer;
