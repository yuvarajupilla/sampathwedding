import { motion } from "framer-motion";

const GoldShine = () => {
  return (
    <>
      {/* Top Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      </motion.div>

      {/* Moving Gold Shine */}
      <motion.div
        initial={{
          x: "-150%",
        }}
        animate={{
          x: "250%",
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
        className="
        pointer-events-none
        absolute
        inset-y-0
        w-40
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        blur-md
        "
      />

      {/* Small Golden Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-0
        right-0
        h-[250px]
        w-[250px]
        rounded-full
        bg-[#D4AF37]/10
        blur-[120px]
        pointer-events-none
        "
      />
    </>
  );
};

export default GoldShine;