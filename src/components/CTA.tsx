import Icon from "@/components/ui/icon";

export default function CTA() {
  return (
    <section className="bg-white py-20 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
          Бесплатный пробный период
        </h3>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.05] mb-8">
          Попробуйте,<br />прежде чем платить
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Дадим бесплатный доступ команде. Соберёте первый сайт ЖК — поймёте, подходит ли. Ответим на все вопросы по тарифам, договору и интеграциям.
        </p>

        <a
          href="mailto:azaliya@poehalli.ru?subject=Запрос%20бесплатного%20пробного%20периода%20—%20Горстройпроект"
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 text-base uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors duration-300 mb-8"
        >
          <Icon name="Mail" size={20} />
          Написать нам
        </a>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center text-neutral-700">
          <a
            href="mailto:azaliya@poehalli.ru"
            className="hover:text-black transition-colors text-base"
          >
            azaliya@poehalli.ru
          </a>
        </div>
      </div>
    </section>
  );
}
