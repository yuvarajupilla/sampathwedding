import { useState } from "react";
import { motion } from "framer-motion";

import ScratchCanvas from "./ScratchCanvas";
import RevealCard from "./RevealCard";
import GoldShine from "./GoldShine";
import Sparkles from "./Sparkles";
import Confetti from "./Confetti";
import "./scratch.css";
import ScratchDust from "./ScratchDust";
import MetallicReflection from "./MetallicReflection";
import FoilFragments from "./FoilFragments";
import BrushGlow from "./BrushGlow";
import RevealBurst from "./RevealBurst"; 

const ScratchInvitation = () => {
  // Controls whether the invitation has been revealed
  const [brushPosition, setBrushPosition] = useState({ x: 0, y: 0 });
const [showBrush, setShowBrush] = useState(false);
const [fragments, setFragments] = useState([]);
const [particles, setParticles] = useState([]);
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,.08),transparent_70%)]" />

      {/* Decorative Effects */}
      <GoldShine />
      <Sparkles />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-[#D4AF37]">
            A Special Surprise
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-serif text-white">
            Scratch To Reveal
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Your invitation is hidden beneath a luxurious golden foil.
            Scratch gently to reveal the venue, date and time.
          </p>
        </motion.div>

        {/* Main Scratch Card */}
<div className="scratch-card relative mx-auto mt-20 h-[550px] max-w-3xl">

  <RevealCard revealed={revealed} />

  <ScratchDust particles={particles} />

  <FoilFragments fragments={fragments} />

  <RevealBurst revealed={revealed} />   {/* ✅ Add here */}

  <MetallicReflection revealed={revealed} />

  <BrushGlow
    position={brushPosition}
    visible={showBrush}
  />

  {!revealed && (
    <ScratchCanvas
      onReveal={() => setRevealed(true)}
      setParticles={setParticles}
      setFragments={setFragments}
      setBrushPosition={setBrushPosition}
      setShowBrush={setShowBrush}
    />
  )}

  {revealed && <Confetti />}

</div>
      </div>
    </section>
  );
};

export default ScratchInvitation;