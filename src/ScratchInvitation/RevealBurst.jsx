import { motion, AnimatePresence } from "framer-motion";

const RevealBurst = ({ revealed }) => {
  if (!revealed) return null;

  return (
    <AnimatePresence>
      <div className="pointer-events-none absolute inset-0 z-[70] flex items-center justify-center">

        {/* Expanding Ring */}
        <motion.div
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 8,
            opacity: 0,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="absolute h-24 w-24 rounded-full border-4 border-[#FFD700]"
        />

        {/* Flash */}
        <motion.div
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 5,
            opacity: 0,
          }}
          transition={{
            duration: .8,
          }}
          className="absolute h-10 w-10 rounded-full bg-[#FFF8D0] blur-xl"
        />

        {/* Sparkles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: Math.cos((i / 18) * Math.PI * 2) * 180,
              y: Math.sin((i / 18) * Math.PI * 2) * 180,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="absolute h-3 w-3 rounded-full bg-[#FFD700]"
            style={{
              boxShadow:
                "0 0 15px rgba(255,215,0,.9)",
            }}
          />
        ))}

      </div>
    </AnimatePresence>
  );
};

export default RevealBurst;