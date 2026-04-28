import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Icon from "@/components/ui/icon";

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
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/80cea824-f242-4d1c-92d7-c126d258457c/bucket/795a401c-bd6c-441f-9568-768bf73c42cd.png"
          alt="Современный жилой комплекс"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm mb-8 opacity-80"
        >
          Предложение для «Горстройпроект»
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight leading-[0.95] mx-auto mb-8"
        >
          Сайты ЖК —<br />без агентства
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 mb-12 leading-relaxed font-light"
        >
          Соберите первый сайт за неделю. Бесплатно — мы покажем, как.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-5"
        >
          <a
            href="mailto:azaliya@poehalli.ru?subject=Запрос%20бесплатного%20пробного%20периода%20—%20Горстройпроект"
            className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-sm md:text-base uppercase tracking-wider font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)]"
          >
            <span className="relative z-10">Запустить бесплатно</span>
            <Icon
              name="ArrowRight"
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="absolute inset-0 bg-gradient-to-r from-white via-amber-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm opacity-80">
            <span className="flex items-center gap-2">
              <Icon name="Check" size={14} className="text-emerald-400" />
              Без карты
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Check" size={14} className="text-emerald-400" />
              Без обязательств
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Check" size={14} className="text-emerald-400" />
              Ответим за день
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-xs uppercase tracking-widest flex flex-col items-center gap-2 animate-bounce">
        <span>Тарифы</span>
        <Icon name="ChevronDown" size={16} />
      </div>
    </div>
  );
}
