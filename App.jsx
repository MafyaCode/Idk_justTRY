
import { useState } from "react";
import "./index.css";

const sampleRecommendations = [
  {
    id: 1,
    name: "Paduan Suara",
    description: "Ekstrakurikuler seni vokal untuk siswa yang hobi menyanyi.",
    score: 0.91,
  },
  {
    id: 2,
    name: "Robotik",
    description: "Ekskul teknologi dan sains berbasis proyek robotik.",
    score: 0.87,
  },
];

export default function App() {
  const [userId, setUserId] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = () => {
    setRecommendations(sampleRecommendations);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sistem Rekomendasi Ekstrakurikuler
      </h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <label className="block text-sm font-medium mb-2">
          Masukkan ID Siswa:
        </label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Contoh: 123456"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button
          onClick={fetchRecommendations}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Lihat Rekomendasi
        </button>
      </div>

      {recommendations.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Rekomendasi untuk Anda:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg shadow p-4"
              >
                <h3 className="text-lg font-semibold text-blue-700">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-xs text-gray-500">
                  Skor Rekomendasi: {item.score.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
