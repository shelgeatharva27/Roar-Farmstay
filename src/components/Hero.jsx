import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import ProfilePic from "../assets/photo_6149698070821060733_y.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image with text overlay */}
      <div className="relative h-full w-full">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1 }} 
          src={ProfilePic} 
          alt="Profile pic" 
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Cinematic overlay with text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold tracking-wide text-white lg:text-8xl"
          >
            Roar Farmstay
          </motion.h1>
          
          <motion.span 
            initial={{ y: -30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:text-4xl"
          >
            Experience Life on the Farm!
          </motion.span>

          <motion.p 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl mt-6 text-white font-light text-lg tracking-wide lg:text-2xl"
          >
            Welcome to Roar Farmstay, a peaceful hideaway just 2 minutes from Tipeshwar’s Sunna Safari Gate. Here, you’ll wake up to gentle breezes, endless greenery, and the soothing sounds of nature. Wander through our vegetable gardens, pick fresh produce, and soak in the calm of true farm life. Roar Farmstay is a place to slow down, reconnect, and unwind amidst lush plantations and open skies. Experience pure tranquility with nature as your closest companion.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
