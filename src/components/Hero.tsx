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
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src="https://cdn.poehali.dev/projects/80cea824-f242-4d1c-92d7-c126d258457c/bucket/795a401c-bd6c-441f-9568-768bf73c42cd.png"
          alt="Современный жилой комплекс"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      <div className="relative z-20 text-center text-white px-4 sm:px-6 w-full">
        <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 opacity-70">
          Предложение для «Горстройпроект»
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl mx-auto mb-8 sm:mb-10">
          Сайты ЖК — без агентства
        </h1>
        <a
          href="#contact"
          className="relative z-30 inline-block bg-white text-black px-6 sm:px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer w-full max-w-sm sm:w-auto sm:max-w-none"
        >
          Получить бесплатный пробный период
        </a>
      </div>
    </div>
  );
}