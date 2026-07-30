import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 10 + 6,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 0.8,
}));

const Confetti = () => {
  return (
    <AnimatePresence>
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-50">

        {/* Center Light Burst */}
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1.8,
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4AF37]/20
          blur-[120px]
          "
        />

        {/* Gold Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              opacity: 0,
              scale: 0,
              y: 0,
            }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0.5, 1, 0],
              y: -700,
              x: [
                0,
                (Math.random() - 0.5) * 300,
              ],
              rotate: 720,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeOut",
            }}
            className="absolute"
            style={{
              left: `${particle.left}%`,
              bottom: "-20px",
            }}
          >
            <div
              style={{
                width: particle.size,
                height: particle.size,
              }}
              className="
              rounded-full
              bg-[#D4AF37]
              shadow-[0_0_18px_rgba(212,175,55,.8)]
              "
            />
          </motion.div>
        ))}

        {/* Floating Sparkle Icons */}
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              y: [-20, -220],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2.5,
              delay: index * 0.15,
            }}
            className="absolute"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${45 + Math.random() * 15}%`,
            }}
          >
            <Sparkles
              size={20}
              className="text-[#FFE28A]"
            />
          </motion.div>
        ))}

      </div>
    </AnimatePresence>
  );
};

export default Confetti;