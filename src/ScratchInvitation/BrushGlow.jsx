import { motion } from "framer-motion";

const BrushGlow = ({ position, visible }) => {
  return (
    <motion.div
      animate={{
        x: position.x - 45,
        y: position.y - 45,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
        mass: 0.3,
      }}
      className="pointer-events-none absolute z-50"
    >
      {/* Outer Glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: 90,
          height: 90,
          background:
            "radial-gradient(circle, rgba(255,215,0,.45), transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      {/* Inner Glow */}
      <div
        className="absolute rounded-full"
        style={{
          left: 20,
          top: 20,
          width: 50,
          height: 50,
          background:
            "radial-gradient(circle, rgba(255,255,255,.9), rgba(255,215,0,.5), transparent)",
        }}
      />
    </motion.div>
  );
};

export default BrushGlow;