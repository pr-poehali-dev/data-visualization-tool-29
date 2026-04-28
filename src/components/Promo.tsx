import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const tariffs = [
  {
    name: "Базовый",
    price: "9 999 ₽/мес",
    requests: "200 ИИ-запросов",
    storage: "до 10 проектов · БД 2 ГБ · 20 ГБ хранилища",
    output: "2–3 лендинга · 1 сложный сайт",
  },
  {
    name: "Премиум",
    price: "19 999 ₽/мес",
    requests: "400 ИИ-запросов",
    storage: "до 20 проектов · БД 4 ГБ · 40 ГБ хранилища",
    output: "4–6 лендингов · 2 сложных сайта",
    highlight: true,
  },
  {
    name: "Расширенный",
    price: "49 999 ₽/мес",
    requests: "800 ИИ-запросов",
    storage: "до 50 проектов · БД 10 ГБ · 100 ГБ хранилища",
    output: "8–12 лендингов · 4 сложных сайта",
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
          Приложение · Таблица лицензий
        </h3>
        <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-16 max-w-4xl leading-tight">
          Лицензия в формате баланса. Выбирайте тариф под объём команды.
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
          <p>· Минимальная сумма пополнения баланса — 100 000 ₽</p>
          <p>· Дополнительные ИИ-запросы списываются с того же баланса</p>
          <p>· Возможны индивидуальные условия по объёму и составу пакета</p>
        </div>
      </div>
    </div>
  );
}
