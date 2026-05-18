import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProposalWebsite() {
  const [step, setStep] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const questions = [
    "Do you know you are the cutest person ever? ❤️",
    "Do you make my world brighter every day? ✨",
    "Will you stay beside me forever? 💕",
    "Can I keep loving you endlessly? 🥹",
    "Will you be my girlfriend? 💖",
    "And one day... will you marry me? 💍",
  ];

  const moveNoButton = () => {
    setNoPosition({
      x: Math.random() * 300 - 150,
      y: Math.random() * 150 - 75,
    });
  };

  const handleYes = () => {
    setCelebrate(true);

    setTimeout(() => {
      setCelebrate(false);

      if (step < questions.length - 1) {
        setStep(step + 1);
        setNoPosition({ x: 0, y: 0 });
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-red-200 flex items-center justify-center overflow-hidden relative px-4 py-10">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh" }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
            }}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {celebrate && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.4 }}
            exit={{ opacity: 0 }}
            className="absolute text-8xl z-50"
          >
            💖
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[40px] p-8 md:p-12 text-center">

          <div className="text-8xl mb-6">💗</div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-rose-600 mb-4">
            Hey Beautiful ❤️
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            I made a tiny little love survey for the most special person in my life ✨
          </p>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-pink-100 rounded-3xl p-8 mb-10"
          >
            <p className="text-gray-500 mb-4">
              Question {step + 1} / {questions.length}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-rose-500">
              {questions[step]}
            </h2>
          </motion.div>

          {step < questions.length - 1 ? (
            <div className="relative flex justify-center items-center gap-8 h-40">

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleYes}
                className="px-10 py-4 bg-rose-500 hover:bg-rose-600 text-white text-2xl font-bold rounded-full shadow-xl"
              >
                YES ❤️
              </motion.button>

              <motion.button
                animate={{
                  x: noPosition.x,
                  y: noPosition.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
                onMouseEnter={moveNoButton}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                className="px-10 py-4 bg-gray-700 text-white text-2xl font-bold rounded-full shadow-xl"
              >
                NO 😅
              </motion.button>

            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-7xl animate-bounce">💍❤️✨</div>

              <h2 className="text-5xl font-extrabold text-rose-600">
                YAYYYY!!!
              </h2>

              <p className="text-xl text-gray-700">
                Forever starts with us now 💖
              </p>
            </div>
          )}

          <div className="mt-10 text-gray-600">
            Made with endless love ❤️
          </div>

        </div>
      </div>

    </div>
  );
}
