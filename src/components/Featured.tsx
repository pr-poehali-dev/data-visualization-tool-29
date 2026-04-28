import Icon from "@/components/ui/icon";

const points = [
  {
    icon: "Rocket",
    title: "Сайт за неделю",
    text: "Агентство делает сайт ЖК 2–4 месяца. Пока ждёте — теряете заявки на старте продаж. У нас сайт собирается за несколько дней, лендинг под акцию — за пару часов.",
  },
  {
    icon: "Unlink",
    title: "Правки без подрядчика",
    text: "Меняете цену, добавляете акцию, переделываете блок — ваш маркетолог делает сам, за минуты. Не ждёте 3–7 дней и не платите по 20 000 ₽ в час.",
  },
  {
    icon: "TrendingDown",
    title: "Дешевле в 30 раз",
    text: "Сайт в агентстве — от 350 тысяч до 1,5 миллиона. Плюс 50 тысяч в месяц на поддержку. У нас — от 9 999 ₽ в месяц, правки включены.",
  },
];

const compareRows: [string, string, string][] = [
  ["Разработка сайта", "0 ₽", "350 000 – 1 500 000 ₽"],
  ["Подписка", "от 9 999 ₽/мес", "—"],
  ["Правки и доработки", "включены", "600 000 – 1 800 000 ₽/год"],
  ["Запуск первого сайта", "от 1 дня", "2–4 месяца"],
  ["Поменять цену или акцию", "сами, за минуты", "тикет 3–7 дней"],
];

export default function Featured() {
  return (
    <div className="min-h-screen px-6 py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-[0.3em] text-neutral-500">
          Что получает «Горстройпроект»
        </h3>
        <p className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight max-w-4xl font-bold">
          Покупатель квартиры идёт на сайт ЖК первым. Если сайта нет — заявка уходит к конкуренту.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {points.map((p) => (
            <div
              key={p.title}
              className="border-t-2 border-neutral-900 pt-6 hover:border-neutral-400 transition-colors duration-300"
            >
              <Icon name={p.icon} size={32} className="mb-6 text-neutral-900" />
              <h4 className="text-xl lg:text-2xl font-bold mb-4 text-neutral-900">
                {p.title}
              </h4>
              <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-neutral-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-neutral-900 text-white">
            <div className="p-4 lg:p-6 text-xs lg:text-sm uppercase tracking-wider">Параметр</div>
            <div className="p-4 lg:p-6 text-xs lg:text-sm uppercase tracking-wider border-l border-white/20">
              poehali.dev
            </div>
            <div className="p-4 lg:p-6 text-xs lg:text-sm uppercase tracking-wider border-l border-white/20 opacity-60">
              Агентство
            </div>
          </div>

          {compareRows.map(([param, ours, theirs], i) => (
            <div
              key={param}
              className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
            >
              <div className="p-4 lg:p-6 text-sm lg:text-base text-neutral-700">{param}</div>
              <div className="p-4 lg:p-6 text-sm lg:text-base font-semibold text-neutral-900 border-l border-neutral-200">
                {ours}
              </div>
              <div className="p-4 lg:p-6 text-sm lg:text-base text-neutral-500 border-l border-neutral-200">
                {theirs}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="#tariffs"
            className="bg-black text-white border border-black px-8 py-4 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wide"
          >
            Перейти к тарифам
          </a>
          <p className="text-sm text-neutral-500 max-w-md">
            Договор — напрямую с разработчиком, без посредников. Данные хранятся в России, по 152-ФЗ.
          </p>
        </div>
      </div>
    </div>
  );
}