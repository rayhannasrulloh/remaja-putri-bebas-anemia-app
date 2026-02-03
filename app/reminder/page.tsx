import NextButton from "../components/NextButton";


export default function ReminderPage() {
  return (
    <div className="container mx-auto p-6 max-w-2xl text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">📅 Reminder Minum TTD</h2>
      
      <div className="bg-yellow-50 border-2 border-yellow-400 p-8 rounded-full h-64 w-64 flex flex-col items-center justify-center mx-auto mb-8 shadow-lg">
        <p className="text-gray-500 font-semibold">Jadwal Kamu:</p>
        <h3 className="text-2xl font-bold text-purple-800 mt-2">Setiap HARI JUMAT</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl text-gray-800 italic font-medium">
          “Jangan lupa minum Tablet Tambah Darah hari ini ya 💊 <br/>
          Sehat itu keren!”
        </p>
        <div className="mt-6">
          <button className="bg-green-500 text-white py-2 px-6 rounded-full font-bold hover:bg-green-600 transition">
             Set WhatsApp Reminder
          </button>
        </div>
      </div>

      <NextButton href="/closing" label="Selesai: Penutup" />
    </div>
  );
}