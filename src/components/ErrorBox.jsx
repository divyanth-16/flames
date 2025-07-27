import { motion, AnimatePresence } from 'framer-motion';
import { resultTexts } from '../utils/resultTexts';

const ErrorBox = ({ errorCode }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={errorCode}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mb-4 px-4 py-2 bg-[#ff4d4d]/80  text-white rounded-md shadow backdrop-blur-md font-semibold border border-red-300"

      >
        {resultTexts[errorCode]}
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorBox;
