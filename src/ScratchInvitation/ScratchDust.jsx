import { motion, AnimatePresence } from "framer-motion";

const ScratchDust = ({ particles }) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: particle.x + particle.dx,
              y: particle.y + particle.dy,
              opacity: 0,
              scale: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="absolute rounded-full bg-[#FFD700]"
            style={{
              width: particle.size,
              height: particle.size,
              boxShadow: "0 0 10px rgba(255,215,0,0.9)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ScratchDust;