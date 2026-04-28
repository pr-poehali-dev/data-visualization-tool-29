import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/80cea824-f242-4d1c-92d7-c126d258457c/files/36ce4317-7c15-4c6b-b41b-e94e907782f0.jpg"
          alt="Современный жилой комплекс"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-8 opacity-70">
          Предложение для «Горстройпроект»
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1] max-w-5xl mx-auto">
          Сайты ЖК — без агентства
        </h1>
      </div>
    </div>
  );
}