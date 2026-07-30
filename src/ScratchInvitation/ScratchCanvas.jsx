import { useEffect, useRef } from "react";

const ScratchCanvas = ({ onReveal,setParticles,setFragments,setBrushPosition,
  setShowBrush,
 }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const lastPoint = useRef(null);

  const ctxRef = useRef(null);

  const isDrawing = useRef(null);

  const revealed = useRef(false);

const scratchThreshold = 60;

  const brushSize = 40;

  useEffect(() => {
    initializeCanvas();

    window.addEventListener("resize", initializeCanvas);

    return () => {
      window.removeEventListener("resize", initializeCanvas);
    };
  }, []);

  //---------------------------------------

const createDust = (x, y) => {
  const dust = Array.from({ length: 6 }).map((_, i) => ({
    id: Date.now() + i + Math.random(),
    x,
    y,
    dx: (Math.random() - 0.5) * 40,
    dy: (Math.random() - 0.5) * 40,
    size: Math.random() * 6 + 2,
  }));

  setParticles((prev) => [...prev, ...dust]);

  setTimeout(() => {
    setParticles((prev) =>
      prev.filter((p) => !dust.find((d) => d.id === p.id))
    );
  }, 800);
};

const createFragments = (x, y) => {
  const pieces = Array.from({ length: 4 }, (_, i) => ({
    id: Date.now() + i + Math.random(),
    x,
    y,
    dx: (Math.random() - 0.5) * 80,
    dy: (Math.random() - 0.5) * 80,
    rotate: Math.random() * 360,
    size: Math.random() * 10 + 4,
  }));

  setFragments((prev) => [...prev, ...pieces]);

  setTimeout(() => {
    setFragments((prev) =>
      prev.filter(
        (fragment) =>
          !pieces.some((piece) => piece.id === fragment.id)
      )
    );
  }, 1000);
};

  const initializeCanvas = () => {
    const canvas = canvasRef.current;

    const wrapper = wrapperRef.current;

    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");

    ctxRef.current = ctx;

    canvas.width = wrapper.offsetWidth;

    canvas.height = wrapper.offsetHeight;

    ctx.beginPath();
ctx.roundRect(0, 0, canvas.width, canvas.height, 40);
ctx.clip();

    drawGoldFoil();
  };

  //---------------------------------------

  const drawGoldFoil = () => {
  const canvas = canvasRef.current;
  const ctx = ctxRef.current;

  const w = canvas.width;
  const h = canvas.height;

  // Base Metallic Gradient
  const gradient = ctx.createLinearGradient(0, 0, w, h);

  gradient.addColorStop(0, "#6F4E00");
  gradient.addColorStop(0.15, "#B8860B");
  gradient.addColorStop(0.35, "#FFD700");
  gradient.addColorStop(0.5, "#FFF2A8");
  gradient.addColorStop(0.7, "#C99700");
  gradient.addColorStop(1, "#6B4A00");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  // Random Metallic Speckles
  for (let i = 0; i < 2500; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;

    const alpha = Math.random() * 0.08;

    ctx.fillStyle = `rgba(255,255,255,${alpha})`;

    ctx.fillRect(x, y, 1, 1);
  }

  // Soft Highlight
  const light = ctx.createRadialGradient(
    w * 0.3,
    h * 0.25,
    20,
    w * 0.3,
    h * 0.25,
    280
  );

  light.addColorStop(0, "rgba(255,255,255,.45)");
  light.addColorStop(1, "transparent");

  ctx.fillStyle = light;
  ctx.fillRect(0, 0, w, h);

  // Reflection Strip
  const reflection = ctx.createLinearGradient(0, 0, w, 0);

  reflection.addColorStop(0, "transparent");
  reflection.addColorStop(0.45, "rgba(255,255,255,.15)");
  reflection.addColorStop(0.5, "rgba(255,255,255,.45)");
  reflection.addColorStop(0.55, "rgba(255,255,255,.15)");
  reflection.addColorStop(1, "transparent");

  ctx.fillStyle = reflection;
  ctx.fillRect(0, 0, w, h);
};
  //---------------------------------------

  const getPosition = (e) => {
    const rect =
      canvasRef.current.getBoundingClientRect();

    if (e.touches) {
      return {
        x:
          e.touches[0].clientX - rect.left,
        y:
          e.touches[0].clientY - rect.top,
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  //---------------------------------------

  const erase = (x, y) => {
    const ctx = ctxRef.current;

    ctx.globalCompositeOperation =
      "destination-out";

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      brushSize,
      0,
      Math.PI * 2
    );

    ctx.fill();
  };

  const drawLine = (x1, y1, x2, y2) => {
  const distance = Math.hypot(x2 - x1, y2 - y1);

  const angle = Math.atan2(y2 - y1, x2 - x1);

  for (let i = 0; i < distance; i += 2) {
    const x = x1 + Math.cos(angle) * i;

    const y = y1 + Math.sin(angle) * i;

    erase(x, y);
  }
};

  const calculateScratchPercentage = () => {
  const canvas = canvasRef.current;

  const ctx = ctxRef.current;

  if (!canvas || !ctx) return;

  const { data } = ctx.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );

  let transparentPixels = 0;

  const totalPixels = canvas.width * canvas.height;

  // Every pixel has RGBA values.
  // Alpha channel is every 4th value.
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] === 0) {
      transparentPixels++;
    }
  }

  const percentage =
    (transparentPixels / totalPixels) * 100;

  if (
    percentage >= scratchThreshold &&
    !revealed.current
  ) {
    revealed.current = true;

    revealAnimation();
  }
};

const revealAnimation = () => {
  const canvas = canvasRef.current;

  canvas.style.transition =
    "opacity .8s ease";

  canvas.style.opacity = 0;

  setTimeout(() => {
    onReveal();
  }, 800);
};

  //---------------------------------------

const handleStart = (e) => {
  isDrawing.current = true;

  const pos = getPosition(e);

  lastPoint.current = pos;
  setBrushPosition(pos);
setShowBrush(true);

  erase(pos.x, pos.y);



  calculateScratchPercentage();
};
  //---------------------------------------

const handleMove = (e) => {
  if (!isDrawing.current) return;


  e.preventDefault();

  const pos = getPosition(e);
  setBrushPosition(pos);

  if (lastPoint.current) {
    drawLine(
      lastPoint.current.x,
      lastPoint.current.y,
      pos.x,
      pos.y
    );
  }

  erase(pos.x, pos.y);
  createDust(pos.x, pos.y);
  createFragments(pos.x,pos.y);

  lastPoint.current = pos;

  calculateScratchPercentage();
};

  //---------------------------------------

 const handleEnd = () => {
  isDrawing.current = false;
  lastPoint.current = null;
  setShowBrush(false);
};

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 z-20 overflow-hidden rounded-[40px]"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-pointer touch-none"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      />
    </div>
  );
};

export default ScratchCanvas;