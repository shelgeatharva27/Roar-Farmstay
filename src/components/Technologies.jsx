import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Gallery</h2>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="mb-6 text-xl text-neutral-400">
          Visit our gallery to know more about our work and projects!
        </p>
        <motion.a
          href="https://vocal-fox-bcd221.netlify.app/" // Replace with your actual link
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500 transition duration-300 ease-in-out"
        >
          Visit Gallery
        </motion.a>
      </div>
    </div>
  );
};

export default Technologies;

