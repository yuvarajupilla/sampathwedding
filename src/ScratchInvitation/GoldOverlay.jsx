import { motion } from "framer-motion";

const GoldOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: [0.95, 1, 0.95],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-10 overflow-hidden rounded-[40px]"
    >
      {/* Gold Gradient */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#8B6914]
        via-[#FFD700]
        via-40%
        to-[#A67C00]
      "
      />

      {/* Metallic Reflection */}
      <div
        className="
        absolute
        inset-0
        opacity-30
        bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,.35)_45%,transparent_70%)]
      "
      />

      {/* Noise Texture */}
      <div
        className="
        absolute
        inset-0
        opacity-10
        bg-[radial-gradient(circle,#fff_1px,transparent_1px)]
        [background-size:12px_12px]
      "
      />

      {/* Glow */}
      <div
        className="
        absolute
        -left-32
        top-10
        h-96
        w-96
        rounded-full
        bg-[#FFF4C7]/20
        blur-[140px]
      "
      />

      {/* Animated Shine */}
      <motion.div
        initial={{ x: "-150%" }}
        animate={{ x: "220%" }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
        }}
        className="
        absolute
        top-0
        h-full
        w-32
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        blur-md
      "
      />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <p className="tracking-[8px] uppercase text-[#4B3400] font-medium">
          Scratch Here
        </p>

        <h2 className="mt-5 text-5xl font-serif text-[#3A2900]">
          Reveal Your Invitation
        </h2>

        <p className="mt-6 text-[#4A3900]/80">
          Scratch gently to uncover the celebration details
        </p>

      </div>
    </motion.div>
  );
};

export default GoldOverlay;