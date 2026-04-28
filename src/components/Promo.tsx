import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const tariffs = [
  {
    name: "Базовый",
    price: "9 999 ₽/мес",
    requests: "200 запросов к ИИ",
    storage: "10 проектов · 2 ГБ база · 20 ГБ файлов",
    output: "2–3 лендинга и 1 большой сайт в месяц",
  },
  {
    name: "Премиум",
    price: "19 999 ₽/мес",
    requests: "400 запросов к ИИ",
    storage: "20 проектов · 4 ГБ база · 40 ГБ файлов",
    output: "4–6 лендингов и 2 больших сайта в месяц",
    highlight: true,
  },
  {
    name: "Расширенный",
    price: "49 999 ₽/мес",
    requests: "800 запросов к ИИ",
    storage: "50 проектов · 10 ГБ база · 100 ГБ файлов",
    output: "8–12 лендингов и 4 больших сайта в месяц",
  },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      id="tariffs"
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden py-24"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6">
        <h3 className="text-white uppercase text-sm md:text-base tracking-[0.3em] mb-4">
          Тарифы
        </h3>
        <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-16 max-w-4xl leading-tight">
          Платите как за подписку на сервис. Не как за разработку сайта.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tariffs.map((t) => (
            <div
              key={t.name}
              className={`p-8 backdrop-blur-md border transition-all duration-500 hover:-translate-y-2 ${
                t.highlight
                  ? "bg-white text-neutral-900 border-white"
                  : "bg-white/10 text-white border-white/20"
              }`}
            >
              <h4 className="uppercase tracking-widest text-xs mb-4 opacity-70">{t.name}</h4>
              <p className="text-3xl lg:text-4xl font-bold mb-6">{t.price}</p>
              <div className="space-y-3 text-sm border-t border-current/20 pt-6">
                <p>{t.requests}</p>
                <p className="opacity-80">{t.storage}</p>
                <p className="opacity-80">{t.output}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-white/80 text-sm md:text-base max-w-3xl space-y-2">
          <p>— Платите авансом, минимум 100 000 ₽. Баланс не сгорает.</p>
          <p>— Закончились запросы — докупаете с того же баланса.</p>
          <p>— Под большой объём — обсудим персональные условия.</p>
        </div>
      </div>
    </div>
  );
}