"use client";

import { useState } from "react";
import { Check, X, Trophy, RefreshCcw, Link, ArrowRight } from "lucide-react";
import NextButton from "../components/NextButton";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "Zat apa yang terkandung dalam TTD?",
      options: [
        { answerText: "Kalsium", isCorrect: false },
        { answerText: "Zat Besi", isCorrect: true },
        { answerText: "Vitamin D", isCorrect: false },
      ],
    },
    {
      questionText: "Kapan waktu terbaik minum TTD?",
      options: [
        { answerText: "Sebelum tidur", isCorrect: false },
        { answerText: "Setelah makan", isCorrect: true },
        { answerText: "Saat bangun tidur", isCorrect: false },
      ],
    },
    {
      questionText: "Minuman apa yang menghambat penyerapan?",
      options: [
        { answerText: "Jus Jeruk", isCorrect: false },
        { answerText: "Air Putih", isCorrect: false },
        { answerText: "Teh & Kopi", isCorrect: true },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-[80vh]">
      
      {/* Quiz Container Card */}
      <div className="glass-card p-8 rounded-[2rem] shadow-2xl w-full max-w-lg relative overflow-hidden">
        
        {/* Background Gradient Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400" />

        {showScore ? (
          <div className="text-center py-10">
            <div className="mb-6 flex justify-center">
              <div className="p-6 bg-yellow-100 rounded-full text-yellow-600 animate-bounce">
                <Trophy size={48} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Skor Kamu</h3>
            <div className="text-5xl font-extrabold text-purple-600 mb-4">
              {score} <span className="text-xl text-slate-400">/ {questions.length}</span>
            </div>
            <p className="text-slate-500 mb-8">
              {score === questions.length ? "Luar biasa! Kamu sudah paham." : "Yuk baca materinya lagi!"}
            </p>
            <button 
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
            >
                <RefreshCcw size={18} /> Ulangi Kuis
            </button>

            {/* Tombol Lanjut ke Reminder */}
            <div className="mt-4 border-t pt-4 border-slate-100">
                <p className="text-sm text-slate-400 mb-2">Sudah paham materinya?</p>
                <NextButton href="/reminder" label="Lanjut: Pasang Reminder" />
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-slate-800">Quiz Time!</h2>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                Soal {currentQuestion + 1}/{questions.length}
              </span>
            </div>
            
            <h3 className="text-lg font-medium text-slate-700 mb-6 min-h-[3rem]">
              {questions[currentQuestion].questionText}
            </h3>

            <div className="flex flex-col space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition-all text-slate-600 hover:text-purple-700 font-medium active:scale-95"
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