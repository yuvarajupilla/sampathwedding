import { motion } from "framer-motion";

const MetallicReflection = ({ revealed }) => {
  if (revealed) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[40px]">
      <motion.div
        initial={{ x: "-180%", rotate: 18 }}
        animate={{ x: "220%", rotate: 18 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "linear",
        }}
        className="
          absolute
          top-[-25%]
          h-[150%]
          w-32
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          blur-xl
        "
      />
    </div>
  );
};

export default MetallicReflection;