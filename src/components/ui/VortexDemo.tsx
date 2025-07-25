import { Vortex } from "../ui/vortex";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="#333d29" // black_olive color
        baseHue={90} // Green-ish hue for earth tones
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        particleCount={500}
        rangeY={400}
        baseSpeed={0.05}
        rangeSpeed={0.5}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sage-50 text-2xl md:text-6xl font-bold text-center mb-6"
        >
          Welcome to My Portfolio
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sage-200 text-sm md:text-2xl max-w-xl mt-6 text-center leading-relaxed"
        >
          Discover my journey through innovative projects, academic excellence, 
          and meaningful experiences that shape my passion for technology.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-russet-600 hover:bg-russet-700 transition duration-200 rounded-lg text-sage-50 shadow-lg flex items-center gap-2 font-medium"
          >
            <ArrowRight size={20} />
            Explore Projects
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-sage-200 hover:text-sage-50 transition duration-200 border border-sage-400 hover:border-sage-300 rounded-lg flex items-center gap-2 font-medium"
          >
            <Play size={20} />
            Watch Demo
          </motion.button>
        </motion.div>
      </Vortex>
    </div>
  );
}
