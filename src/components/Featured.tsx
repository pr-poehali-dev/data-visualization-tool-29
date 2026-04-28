import Icon from "@/components/ui/icon";

const points = [
  {
    icon: "Rocket",
    title: "Сайт ЖК — за дни, не за месяцы",
    text: "Агентство делает сайт жилого комплекса 2–4 месяца. На старте продаж это упущенные заявки. С poehali.dev рабочий сайт — за несколько дней, посадочная под акцию — за часы.",
  },
  {
    icon: "Unlink",
    title: "Без подрядчиков и тикетов",
    text: "Изменить цену, обновить акцию, добавить блок — ваш сотрудник делает это сам за минуты. Без ожидания 3–7 дней и счетов по 15 000–25 000 ₽/час.",
  },
  {
    icon: "TrendingDown",
    title: "В разы дешевле агентства",
    text: "Один сайт ЖК через агентство — от 350 000 до 1 500 000 ₽, плюс поддержка от 50 000 ₽/мес. Лицензия poehali.dev — от 9 999 ₽/мес и неограниченное число правок включено.",
  },
];

const compareRows: [string, string, string][] = [
  ["Разработка", "0 ₽", "350 000 – 1 500 000 ₽"],
  ["Подписка / лицензия", "от 9 999 ₽/мес", "—"],
  ["Поддержка и доработки", "включено", "600 000 – 1 800 000 ₽/год"],
  ["Время до запуска", "от 1 дня", "2–4 месяца"],
  ["Внесение изменений", "минуты, силами сотрудника", "тикет 3–7 дней"],
];

export default function Featured() {
  return (
    <div className="min-h-screen px-6 py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-[0.3em] text-neutral-500">
          Что это даст «Горстройпроект»
        </h3>
        <p className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight max-w-4xl font-bold">
          Сайт жилого комплекса — главный канал первого контакта с покупателем. Скорость запуска решает.
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
            Лицензия — напрямую от разработчика. Без посредников. Серверы в РФ, соответствие 152-ФЗ.
          </p>
        </div>
      </div>
    </div>
  );
}
