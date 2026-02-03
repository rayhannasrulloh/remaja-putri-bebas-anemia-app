export default function AboutPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">🟣 Apa Itu Anemia?</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">Pengertian</h3>
        <p className="text-gray-700">
          Anemia adalah kondisi ketika kadar hemoglobin (Hb) dalam darah lebih rendah dari normal sehingga tubuh kekurangan oksigen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
          <h3 className="font-bold text-lg mb-2">Penyebab pada Remaja Putri:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Kehilangan darah saat menstruasi</li>
            <li>Kurang asupan zat besi</li>
            <li>Tidak rutin mengonsumsi Tablet Tambah Darah</li>
          </ul>
        </div>

        <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
          <h3 className="font-bold text-lg mb-2">Tanda & Gejala (5L):</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Mudah lelah (Lemah)</li>
            <li>Pusing (Letih)</li>
            <li>Wajah pucat (Lesu)</li>
            <li>Sulit konsentrasi (Lalai)</li>
            <li>Mengantuk saat belajar (Lulai)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}