import { Vortex } from "../ui/vortex";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function PortfolioVortex() {
  return (
    <section className="w-full h-screen overflow-hidden relative">
      <Vortex
        backgroundColor="#333d29" // black_olive color from your palette
        baseHue={90} // Earth-tone green hue
        className="flex items-center flex-col justify-center px-4 md:px-10 py-4 w-full h-full"
        particleCount={600}
        rangeY={500}
        baseSpeed={0.1}
        rangeSpeed={0.8}
        baseRadius={1}
        rangeRadius={3}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Animated Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="bg-russet-600 p-4 rounded-full">
              <Code2 size={48} className="text-sage-50" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sage-50 text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Crafting Digital
            <span className="block text-russet-400">Experiences</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sage-200 text-lg md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Passionate developer creating innovative solutions through 
            cutting-edge technology and thoughtful design.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(127, 79, 36, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-russet-600 to-russet-700 hover:from-russet-500 hover:to-russet-600 transition-all duration-300 rounded-lg text-sage-50 shadow-lg flex items-center gap-3 font-semibold text-lg"
              >
                <ArrowRight size={24} />
                View My Work
              </motion.button>
            </Link>
            
            <Link to="/about">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "#c2c5aa",
                  boxShadow: "0 0 20px rgba(194, 197, 170, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-sage-200 hover:text-sage-50 transition-all duration-300 border-2 border-sage-400 hover:border-sage-300 rounded-lg flex items-center gap-3 font-semibold text-lg backdrop-blur-sm"
              >
                <Sparkles size={24} />
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-sage-300 rounded-full relative"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-sage-300 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Vortex>
    </section>
  );
}
