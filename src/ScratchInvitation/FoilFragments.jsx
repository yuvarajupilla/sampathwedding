import { AnimatePresence, motion } from "framer-motion";

const FoilFragments = ({ fragments }) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
      <AnimatePresence>
        {fragments.map((fragment) => (
          <motion.div
            key={fragment.id}
            initial={{
              x: fragment.x,
              y: fragment.y,
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: fragment.x + fragment.dx,
              y: fragment.y + fragment.dy,
              rotate: fragment.rotate,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute rounded-sm"
            style={{
              width: fragment.size,
              height: fragment.size,
              background:
                "linear-gradient(135deg,#FFF6C9,#FFD700,#C99700)",
              boxShadow:
                "0 0 10px rgba(255,215,0,.8)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FoilFragments;