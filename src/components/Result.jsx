import React from 'react';
import { resultTexts } from '../utils/resultTexts';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/FlamesEffect.css';

const Result = ({ result, crct, reresult }) => {
  return (
    <AnimatePresence>
      {result && result !== 'None' && (
        <motion.div
          key={result}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-xl text-center text-lg md:text-xl bg-gradient-to-br from-[#1a1a2e] via-[#2c2a4a] to-[#3b2f63] p-6 rounded-xl shadow-lg border border-[#7f5af0]"
        >
          <p className="text-pink-400 font-bold text-3xl mb-2" class="result-title">{result}</p>
          <p className="text-white ">
            {resultTexts[reresult]}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Result;