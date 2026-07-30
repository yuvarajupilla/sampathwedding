import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-40 lg:pt-42"
    >
      {/* ================= Background ================= */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]" />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-52 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* ================= Floating Particles ================= */}

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-24 top-48 h-3 w-3 rounded-full bg-[#D4AF37]"
      />

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{
          repeat: Infinity,
          duration: 9,
        }}
        className="absolute right-40 top-72 h-2 w-2 rounded-full bg-[#D4AF37]"
      />

      <motion.div
        animate={{ y: [-25, 25, -25] }}
        transition={{
          repeat: Infinity,
          duration: 11,
        }}
        className="absolute bottom-40 left-1/3 h-3 w-3 rounded-full bg-[#D4AF37]"
      />

      {/* ================= Content ================= */}

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center justify-center px-6">

        <div className="max-w-4xl text-center">

          {/* Small Heading */}

          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 uppercase tracking-[10px] text-[#D4AF37]"
          >
            Together With Their Families
          </motion.p>

          {/* Monogram */}

          <motion.div
            initial={{ scale: .7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative mx-auto mb-10 flex h-44 w-44 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0B1220]/40 backdrop-blur-3xl shadow-[0_0_60px_rgba(212,175,55,.25)]"
          >
            <span className="font-serif text-7xl text-[#D4AF37]">
              S
            </span>

            <span className="mx-3 text-4xl text-[#D4AF37]">
              ♡
            </span>

            <span className="font-serif text-7xl text-[#D4AF37]">
              A
            </span>

            <div className="absolute -inset-3 rounded-full border border-[#D4AF37]/10" />
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="font-serif text-6xl leading-tight text-white md:text-7xl xl:text-8xl"
          >
            Dodda Sampath Kumar
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: .8 }}
            className="my-6 text-5xl text-[#D4AF37]"
          >
            &
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
            className="font-serif text-6xl leading-tight text-white md:text-7xl xl:text-8xl"
          >
            Cheviti Asha Jyothi
          </motion.h2>

          {/* Divider */}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 1.1 }}
            className="mx-auto my-12 h-[2px] bg-[#D4AF37]"
          />

          {/* Invitation */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mx-auto max-w-3xl text-lg leading-9 text-gray-300 md:text-xl"
          >
            Request the honour of your gracious presence
            as we celebrate the beginning of a beautiful
            journey filled with love, faith and blessings.
          </motion.p>

          {/* Button */}

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .96,
            }}
            className="mt-14 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 px-10 py-4 uppercase tracking-[5px] text-[#D4AF37] backdrop-blur-xl transition hover:bg-[#D4AF37] hover:text-black"
          >
            Reveal Invitation
          </motion.button>

          {/* Scroll */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-20 flex flex-col items-center"
          >
            <ChevronDown
              size={34}
              className="text-[#D4AF37]"
            />

            <span className="mt-2 text-xs uppercase tracking-[5px] text-[#D4AF37]">
              Scroll
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;