import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+500px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[500px] lg:h-[600px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-500px)] lg:top-[calc(100vh-600px)]">
          <div className="bg-neutral-900 py-8 lg:py-12 px-6 lg:px-10 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <a
                href="mailto:azaliya@poehalli.ru"
                className="text-white hover:text-neutral-400 transition-colors duration-300 text-base flex items-center gap-2"
              >
                <Icon name="Mail" size={18} />
                azaliya@poehalli.ru
              </a>
              <a
                href="https://poehali.dev"
                className="text-white hover:text-neutral-400 transition-colors duration-300 text-base flex items-center gap-2"
              >
                <Icon name="Globe" size={18} />
                poehali.dev
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] text-white font-bold tracking-tight">ПОЕХАЛИ!</h1>
              <p className="text-neutral-500 text-xs sm:text-sm">
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}