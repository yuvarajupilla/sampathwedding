import { motion } from "framer-motion";

const particles = [
  { id: 1, x: "8%", y: "12%", size: 6, delay: 0 },
  { id: 2, x: "20%", y: "78%", size: 5, delay: 1 },
  { id: 3, x: "35%", y: "18%", size: 8, delay: 2 },
  { id: 4, x: "52%", y: "70%", size: 6, delay: 3 },
  { id: 5, x: "66%", y: "22%", size: 5, delay: 1.5 },
  { id: 6, x: "82%", y: "80%", size: 7, delay: 2.8 },
  { id: 7, x: "92%", y: "30%", size: 5, delay: .8 },
  { id: 8, x: "14%", y: "48%", size: 6, delay: 1.2 },
  { id: 9, x: "72%", y: "55%", size: 8, delay: 2.2 },
  { id: 10, x: "45%", y: "90%", size: 5, delay: 3.5 },
];

const Sparkles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 18px rgba(212,175,55,.9)",
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-4, 4, -4],
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
};

export default Sparkles;