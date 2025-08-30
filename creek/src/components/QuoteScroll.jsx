import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuoteScroll = () => {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      const fetchedQuotes = [];

      for (let i = 0; i < 5; i++) {
        try {
          const res = await fetch("https://quoteapi.pythonanywhere.com/random");
          const data = await res.json();
          fetchedQuotes.push(data);
        } catch {
          // Fail silently and continue
        }
      }

      setQuotes(fetchedQuotes);
    };

    fetchQuotes();
  }, []);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  if (!quotes || quotes.length === 0) {
    return (
      <div className="text-center text-white p-8">
        No movie quotes available. Please try again later.
      </div>
    );
  }

  const { quote, author, movie } = quotes[index];

  return (
    <div className="bg-black text-white p-8 rounded-lg max-w-2xl mx-auto text-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col justify-center items-center px-4"
        >
          <p className="text-2xl font-semibold mb-4">"{quote}"</p>
          <p className="text-sm italic">— {author}, <span className="text-gray-400">{movie}</span></p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevQuote}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
      >
        ‹
      </button>
      <button
        onClick={nextQuote}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
      >
        ›
      </button>

      <div className="flex justify-center mt-4 space-x-2 z-10 relative">
        {quotes.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteScroll;