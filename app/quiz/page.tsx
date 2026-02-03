"use client"; // Required for interactivity (useState)

import { useState } from "react";

export default function QuizPage() {
  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Data structure for questions
  const questions = [
    {
      questionText: "Anemia adalah kondisi kekurangan ...",
      options: [
        { answerText: "Gula", isCorrect: false },
        { answerText: "Lemak", isCorrect: false },
        { answerText: "Hemoglobin", isCorrect: true },
      ],
    },
    {
      questionText: "Tablet Tambah Darah diminum sebanyak ...",
      options: [
        { answerText: "Setiap hari", isCorrect: false },
        { answerText: "1 kali seminggu", isCorrect: true },
        { answerText: "1 kali sebulan", isCorrect: false },
      ],
    },
    {
      questionText: "TTD sebaiknya diminum bersama ...",
      options: [
        { answerText: "Teh", isCorrect: false },
        { answerText: "Kopi", isCorrect: false },
        { answerText: "Air putih atau jus jeruk", isCorrect: true },
      ],
    },
  ];

  // Logic to handle answer click
  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Kuis Singkat</h2>
        
        {showScore ? (
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-800">
              Kamu mendapat nilai {score} dari {questions.length}
            </h3>
            <p className="mt-2 text-gray-600">
              {score === questions.length ? "Hebat! Kamu sudah paham." : "Yuk pelajari lagi materinya!"}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Ulangi Kuis
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <span className="text-sm text-gray-500">Soal {currentQuestion + 1}/{questions.length}</span>
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                {questions[currentQuestion].questionText}
              </h3>
            </div>
            <div className="flex flex-col space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  className="w-full text-left p-3 border rounded hover:bg-purple-100 hover:border-purple-500 transition-colors text-gray-700"
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}