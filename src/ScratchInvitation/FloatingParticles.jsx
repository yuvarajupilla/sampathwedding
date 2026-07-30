import { motion } from "framer-motion";

const particles = [
  { id: 1, left: "5%", top: "12%", size: 4, delay: 0 },
  { id: 2, left: "15%", top: "70%", size: 6, delay: 1 },
  { id: 3, left: "28%", top: "30%", size: 5, delay: 2 },
  { id: 4, left: "40%", top: "82%", size: 4, delay: 1.5 },
  { id: 5, left: "55%", top: "18%", size: 7, delay: 0.5 },
  { id: 6, left: "68%", top: "60%", size: 5, delay: 2.2 },
  { id: 7, left: "82%", top: "24%", size: 6, delay: 3 },
  { id: 8, left: "92%", top: "75%", size: 4, delay: 1.8 },
  { id: 9, left: "48%", top: "45%", size: 5, delay: 2.5 },
  { id: 10, left: "72%", top: "88%", size: 6, delay: 0.8 },
];

const FloatingParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 18px rgba(212,175,55,0.8)",
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-6, 6, -6],
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;