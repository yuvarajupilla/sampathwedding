import { motion } from "framer-motion";
import {
  FaChurch,
  FaCalendarAlt,
  FaClock,
  FaHeart,
  FaCross,
} from "react-icons/fa";

const RevealCard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 60,
        rotateX: 15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      className="absolute inset-0 flex items-center justify-center p-5"
    >
      {/* Card */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[40px] border border-yellow-500/30 bg-gradient-to-br from-[#0d1117]/95 via-[#111827]/95 to-[#090909]/95 shadow-[0_0_80px_rgba(255,215,0,.15)] backdrop-blur-xl">

        {/* Animated Glow */}
        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl"
        />

        {/* Decorative Border */}
        <div className="pointer-events-none absolute inset-3 rounded-[32px] border border-yellow-400/25"></div>

        {/* Top Ornament */}
        <div className="absolute left-1/2 top-0 h-20 w-[2px] -translate-x-1/2 bg-gradient-to-b from-yellow-300 to-transparent"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="relative z-10 px-8 py-12">

          {/* Cross */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="flex justify-center"
          >
            <div className="rounded-full border border-yellow-500/40 bg-yellow-500/10 p-5 shadow-[0_0_40px_rgba(255,215,0,.25)]">
              <FaCross className="text-4xl text-yellow-300" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="mt-8 text-center"
          >
            <p className="tracking-[6px] uppercase text-yellow-400 text-sm">
              By The Grace Of God
            </p>

            <h2 className="mt-4 text-5xl font-serif text-white">
              Engagement Ceremony
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

            <p className="mt-6 text-lg text-gray-300 leading-8 max-w-xl mx-auto">
              Together with our beloved families,
              we joyfully invite you to celebrate
              a beautiful beginning of our forever journey.
            </p>
          </motion.div>

          {/* Couple */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.7,
            }}
            className="mt-14"
          >
            <h1 className="text-center text-5xl font-serif text-yellow-200">
              Dodda Sampath Kumar
            </h1>

            <div className="my-8 flex items-center justify-center gap-5">
              <div className="h-px w-24 bg-yellow-500/40"></div>

              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <FaHeart className="text-rose-400 text-3xl" />
              </motion.div>

              <div className="h-px w-24 bg-yellow-500/40"></div>
            </div>

            <h1 className="text-center text-5xl font-serif text-yellow-200">
              Cheviti Asha Jyothi
            </h1>
          </motion.div>

          {/* Divider */}
          <div className="mx-auto my-14 h-[2px] w-full max-w-lg bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

          {/* Event Details */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* Venue */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 text-center backdrop-blur-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
                <FaChurch className="text-2xl text-yellow-300" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Venue
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                St. Mary's Church
                <br />
                Vijayawada
              </p>
            </motion.div>

            {/* Date */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 text-center backdrop-blur-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
                <FaCalendarAlt className="text-2xl text-yellow-300" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Date
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                21 August
                <br />
                2026
              </p>
            </motion.div>

            {/* Time */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 text-center backdrop-blur-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
                <FaClock className="text-2xl text-yellow-300" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Time
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                10:30 AM
                <br />
                Followed by Lunch
              </p>
            </motion.div>
          </div>

                    {/* Divider */}
          <div className="mx-auto my-14 h-[2px] w-full max-w-lg bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

          {/* Bible Verse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="text-center"
          >
            <p className="text-2xl italic font-serif leading-10 text-yellow-100">
              "Love is patient,
              <br />
              Love is kind.
              <br />
              It always protects,
              always trusts,
              always hopes,
              always perseveres."
            </p>

            <p className="mt-6 tracking-[4px] uppercase text-yellow-400 text-sm">
              1 Corinthians 13:4–7
            </p>
          </motion.div>

          {/* Divider */}
          <div className="mx-auto my-14 h-[2px] w-full max-w-lg bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

          {/* Invitation Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <h3 className="text-3xl font-serif text-white">
              We Look Forward To Celebrating With You
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-300">
              Your presence, love and blessings will make this special
              occasion even more meaningful. We sincerely request the
              pleasure of your company as we begin this beautiful chapter
              together.
            </p>
          </motion.div>

          {/* Decorative Bottom Ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
            }}
            className="mt-14 flex justify-center"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-20 bg-yellow-500/40"></div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/40 bg-yellow-500/10">
                ✨
              </div>

              <div className="h-px w-20 bg-yellow-500/40"></div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.8,
            }}
            className="mt-12 text-center"
          >
            <p className="text-sm tracking-[5px] uppercase text-yellow-400">
              Save The Date
            </p>

            <h2 className="mt-4 text-5xl font-serif text-yellow-200">
              21 • 08 • 2026
            </h2>

            <p className="mt-8 text-gray-400">
              We can't wait to celebrate this unforgettable day with you.
            </p>
          </motion.div>
        </div>

        {/* Animated Border Glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="pointer-events-none absolute inset-0 rounded-[40px] border border-yellow-300/20"
        />

        {/* Corner Decorations */}

        <div className="absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-yellow-400/40 rounded-tl-2xl"></div>

        <div className="absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-yellow-400/40 rounded-tr-2xl"></div>

        <div className="absolute bottom-6 left-6 h-10 w-10 border-l-2 border-b-2 border-yellow-400/40 rounded-bl-2xl"></div>

        <div className="absolute bottom-6 right-6 h-10 w-10 border-r-2 border-b-2 border-yellow-400/40 rounded-br-2xl"></div>
      </div>
    </motion.div>
  );
};

export default RevealCard;