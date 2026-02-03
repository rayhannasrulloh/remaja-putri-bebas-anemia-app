import { YouTubeEmbed } from '@next/third-parties/google';

export default function VideoPage() {
  return (
    <div className="container mx-auto p-6 max-w-3xl flex flex-col items-center">
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-purple-700 mb-2 text-center">
        🎥 Video Edukasi
      </h2>
      <p className="text-gray-600 mb-8 text-center italic">
        "Kenapa Remaja Putri Harus Minum Tablet Tambah Darah?"
      </p>

      {/* Optimization Note:
        The YouTubeEmbed component handles the 'lite-youtube' behavior.
        It loads a lightweight thumbnail first, and only loads the heavy YouTube player
        when the user clicks play.
      */}
      <div className="w-full rounded-xl overflow-hidden shadow-2xl mb-8 border-4 border-purple-200">
        <YouTubeEmbed 
          videoid="CRCJ5ibZSiw" // Replace this with the actual Kemenkes Video ID
          height={400} 
          params="controls=1" 
        />
      </div>

      {/* Video Content Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold text-purple-800 mb-4 border-b pb-2 border-purple-100">
          📝 Poin Penting dalam Video:
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-500 mr-2">▶</span>
            <span><strong>Penjelasan Anemia:</strong> Apa yang terjadi pada tubuh saat kekurangan darah.</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2">▶</span>
            <span><strong>Manfaat TTD:</strong> Bagaimana tablet ini membantu konsentrasi belajar.</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2">▶</span>
            <span><strong>Cara Minum:</strong> Tips agar penyerapan zat besi maksimal.</span>
          </li>
        </ul>

        {/* Motivation Box */}
        <div className="mt-8 bg-purple-100 p-4 rounded-lg text-center border border-purple-300">
          <p className="font-semibold text-purple-900">
            "Satu tablet seminggu, prestasi melaju!" 🚀
          </p>
        </div>
      </div>
    </div>
  );
}