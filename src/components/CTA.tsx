export default function CTA() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="uppercase tracking-[0.3em] text-xs sm:text-sm text-neutral-500 mb-4 sm:mb-6">
          Бесплатный пробный период
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.05] mb-6 sm:mb-8">
          Попробуйте,<br />прежде чем платить
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Дадим бесплатный доступ команде. Соберёте первый сайт ЖК — поймёте, подходит ли. Ответим на все вопросы по тарифам, договору и интеграциям.
        </p>

        <a
          href="mailto:azaliya@poehalli.ru?subject=Запрос%20бесплатного%20пробного%20периода%20—%20Горстройпроект"
          className="inline-block text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 hover:text-neutral-500 transition-colors duration-300 underline decoration-2 underline-offset-[10px] decoration-neutral-300 hover:decoration-neutral-500 break-all"
        >
          azaliya@poehalli.ru
        </a>
      </div>
    </section>
  );
}
