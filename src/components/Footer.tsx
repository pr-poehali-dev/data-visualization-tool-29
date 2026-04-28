import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[500px] sm:h-[700px] lg:h-[900px] max-h-[900px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+700px)] lg:h-[calc(100vh+900px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[700px] lg:h-[900px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-700px)] lg:top-[calc(100vh-900px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Исполнитель</h3>
                <p className="text-white text-sm sm:text-base">ИП Яроцкий Даниил Дмитриевич</p>
                <p className="text-neutral-400 text-xs sm:text-sm">ИНН 151304470741</p>
                <p className="text-neutral-400 text-xs sm:text-sm">ОГРНИП 325150000047406</p>
                <p className="text-neutral-400 text-xs sm:text-sm max-w-xs">
                  121069, г. Москва, Мерзляковский пер, д. 5/1
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Связаться</h3>
                <a
                  href="mailto:yaroc.d@gmail.com"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base flex items-center gap-2"
                >
                  <Icon name="Mail" size={16} />
                  yaroc.d@gmail.com
                </a>
                <a
                  href="https://t.me/+79256406498"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base flex items-center gap-2"
                >
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
                <a
                  href="tel:+79256406498"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base flex items-center gap-2"
                >
                  <Icon name="Phone" size={16} />
                  +7 (925) 640-64-98
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Заказчик</h3>
                <p className="text-white text-sm sm:text-base">ООО «Горстройпроект»</p>
                <p className="text-neutral-400 text-xs sm:text-sm">Ген. директору</p>
                <p className="text-neutral-400 text-xs sm:text-sm">Малхасяну М. Г.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                ПОЕХАЛИ
              </h1>
              <p className="text-neutral-400 text-xs sm:text-sm">
                {new Date().getFullYear()} · poehali.dev
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
