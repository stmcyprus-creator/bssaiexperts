import { Link } from "react-router-dom";
import { ArrowLeft, Zap, CheckCircle2, Plug, ShieldCheck, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";
import heroImage from "@/assets/electrical-hero.jpg";

const services = [
  {
    title: "Электромонтаж «под ключ»",
    items: [
      "Проектирование схемы электроснабжения",
      "Штробление, прокладка кабеля ВВГнг-LS в гофре",
      "Монтаж распределительных и слаботочных коробок",
      "Сборка и установка электрощита с автоматами и УЗО",
    ],
  },
  {
    title: "Освещение и сценарии",
    items: [
      "Монтаж точечных, трековых и линейных светильников",
      "Подсветка ниш, потолков, лестниц LED-лентой",
      "Установка диммеров и проходных выключателей",
      "Системы «умный дом»: Zigbee, KNX, Tuya",
    ],
  },
  {
    title: "Розетки, выключатели, слаботочка",
    items: [
      "Установка розеток Schneider, Legrand, Werkel",
      "Прокладка интернета, ТВ, спутниковых линий",
      "Видеонаблюдение и СКУД",
      "Зарядные станции для электромобилей до 22 кВт",
    ],
  },
  {
    title: "Сервис и аварийный выезд",
    items: [
      "Диагностика и поиск неисправностей тепловизором",
      "Замена проводки в старых домах",
      "Подключение и пуско-наладка оборудования",
      "Согласование с энергоснабжающей организацией",
    ],
  },
];

export default function ElectricalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-gray-100 bg-pattern-lines">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" aria-label="На главную">
            <img src={logo} alt="BSS" className="h-12 w-auto" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> На главную
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
          Инженерные системы
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-3">
          Электроснабжение <em className="italic font-medium text-accent">и электромонтаж</em>
        </h1>
        <div className="w-16 h-px bg-accent my-6" />
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl font-light leading-relaxed">
          Выполняем полный цикл электромонтажных работ: от проекта и согласования до сборки
          щита и пуско-наладки. Работаем по ПУЭ-7 и ГОСТ Р 50571 с обязательной протоколом
          замеров сопротивления изоляции.
        </p>

        <div className="mt-12 overflow-hidden border-t-2 border-accent">
          <img
            src={heroImage}
            alt="Монтаж электрощита и прокладка кабеля"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-border mt-12 border border-border">
          {[
            { icon: Zap, title: "Опыт 10+ лет", text: "Команда инженеров с практикой на жилых и коммерческих объектах." },
            { icon: Plug, title: "Кабель в гофре ПВХ", text: "Только негорючий ВВГнг-LS, без скруток." },
            { icon: ShieldCheck, title: "Гарантия 5 лет", text: "На скрытый электромонтаж и щитовую сборку." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-6 bg-pattern-lines">
              <Icon className="h-7 w-7 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground font-light">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {services.map((s) => (
            <div key={s.title} className="bg-card p-8 border-t-2 border-accent bg-pattern-lines">
              <h3 className="font-display text-2xl font-bold mb-5">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-muted-foreground font-light">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-primary text-gray-100 p-8 md:p-10 bg-pattern-lines flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-2">Бесплатный выезд</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Расчёт нагрузки и смета — бесплатно</h3>
            <p className="text-gray-300 mt-2 font-light">Электрик-проектировщик приедет, замерит и подготовит спецификацию материалов.</p>
          </div>
          <a
            href="tel:+79046808783"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-semibold px-6 py-4 hover:bg-accent/90 transition-colors"
          >
            <Phone className="h-5 w-5" /> +7 904 680 87 83
          </a>
        </div>
      </section>

      <footer className="bg-primary text-gray-300 py-8 text-center text-xs">
        © {new Date().getFullYear()} BSS — Бизнес. Стратегии. Сервис
      </footer>
    </main>
  );
}
