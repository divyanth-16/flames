import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Result from './Result';
import ErrorBox from './ErrorBox'; // ✅ New Component
import '../styles/FlamesEffect.css';



const EnterNames = () => {
  
  const [result, setResult] = useState('');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [crct, setcrct] = useState('');
  const [reresult, setreresult] = useState('');
  const [glowPos, setGlowPos] = useState(null);
  const [errorCode, setErrorCode] = useState(null); // ✅ New error state

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowPos({ x, y });
  };

  useEffect(() => {
    if (errorCode) {
      const timer = setTimeout(() => setErrorCode(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [errorCode]);

  const submitHandler = (e) => {
    e.preventDefault();
    let n1 = name1.toLowerCase().replace(/\s/g, '');
    let n2 = name2.toLowerCase().replace(/\s/g, '');
    let arr1 = n1.split('');
    let arr2 = n2.split('');
    const crossedOut = [];

    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        crossedOut.push(arr1[i]);
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--;
      }
    }

    const totalCount = arr1.length + arr2.length;
    const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let idx = 0;

    if (name1 === '' && name2 === '') {
      setreresult('1');
      setResult('None');
      setErrorCode('1');
      return;
    } else if (name1 === '' && name2 !== '') {
      setreresult('2');
      setResult('None');
      setErrorCode('2');
      return;
    } else if (name1 !== '' && name2 === '') {
      setreresult('3');
      setResult('None');
      setErrorCode('3');
      return;
    }
    else if(n1 == 'shaziya' && n2 == 'divyanth' ||n1 == 'divyanth' && n2 == 'shaziya'){
      setreresult(flames[1]);
    setResult(meaningMap[flames[1]]);
      return;
    }
    else if(n1 == 'shaziyaalsyed' && n2 == 'divyanthpenki' ||n1 == 'divyanthpenki' && n2 == 'shaziyaalsyed'){
      setreresult(flames[3]);
    setResult(meaningMap[flames[3]]);
      return;
    }

    while (flames.length > 1) {
      idx = (idx + totalCount - 1) % flames.length;
      flames.splice(idx, 1);
    }

    setreresult(flames[0]);
    setResult(meaningMap[flames[0]]);
  };

  const resetAll = () => {
    setName1('');
    setName2('');
    setResult('');
    setreresult('');
    setErrorCode(null);
  };

  const meaningMap = {
    F: 'FRIENDS',
    L: 'LOVE',
    A: 'AFFECTION',
    M: 'MARRIAGE',
    E: 'ENEMIES',
    S: 'SIBLINGS',
  };

  const resultLetter = reresult;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* ✅ Animated Error Box */}
      {errorCode && <ErrorBox errorCode={errorCode} />}

      {/* FLAMES Heading */}
      <motion.div
        className="flex gap-2 mb-10 heading-flames"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        
        {['F', 'L', 'A', 'M', 'E', 'S'].map((char, index) => (
          <motion.span
  key={char}
  className={`text-5xl md:text-6xl font-extrabold tracking-wide
  ${
  resultLetter === char
    ? 'flames-result-glow pointer-events-none'
    : 'text-white md:hover:text-[#FF6A00] transition-colors duration-300'
}

    block md:inline mobile-flames-text md:mobile-flames-text-none
  `}

            whileHover={
              resultLetter !== char
                ? { scale: 1.3, rotate: [0, -5, 5, 0] }
                : {}
            }
          >
  
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.form
        onSubmit={submitHandler}
        className="flex flex-col items-center gap-5 w-full max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          type="text"
          placeholder="Enter Name 1"
          className="p-3 rounded-lg bg-[#1f1f2e] text-white w-full outline-none border border-transparent focus:border-[#7f5af0] transition-all duration-300 placeholder-gray-400"
        />
        <input
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          type="text"
          placeholder="Enter Name 2"
          className="p-3 rounded-lg bg-[#1f1f2e] text-white w-full outline-none border border-transparent focus:border-[#7f5af0] transition-all duration-300 placeholder-gray-400"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
         className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition-transform duration-200"
        >
         Check
        
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
          whileTap={{ scale: 0.98 }}
          type="button" 
          onClick={resetAll}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
        >
          Reset
        </motion.button>
      </motion.form>

      <Result result={result} crct={crct} reresult={reresult} />
    </div>
  );
};

export default EnterNames;
