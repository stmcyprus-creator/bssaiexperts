import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, CheckCircle2, Wrench, ShieldCheck, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";
import heroImage from "@/assets/plumbing-hero.jpg";

const services = [
  {
    title: "Водоснабжение «под ключ»",
    items: [
      "Проектирование систем ХВС и ГВС",
      "Монтаж трубопроводов: PPR, PEX, металлопластик, медь",
      "Установка коллекторов, фильтров, редукторов давления",
      "Подключение бойлеров и проточных водонагревателей",
    ],
  },
  {
    title: "Канализация и водоотведение",
    items: [
      "Разводка внутренней канализации",
      "Монтаж насосов-измельчителей (сололифт)",
      "Установка трапов, ревизионных люков",
      "Прокладка наружных сетей до септика / коллектора",
    ],
  },
  {
    title: "Сантехнические работы",
    items: [
      "Установка ванн, душевых кабин, поддонов, инсталляций",
      "Монтаж раковин, смесителей, полотенцесушителей",
      "Подключение посудомоечных и стиральных машин",
      "Тёплый пол водяной с коллекторной группой",
    ],
  },
  {
    title: "Ремонт и сервис",
    items: [
      "Срочный вызов сантехника, устранение протечек",
      "Замена стояков по согласованию с УК",
      "Прочистка засоров, опрессовка систем",
      "Гарантийное обслуживание после монтажа",
    ],
  },
];

export default function PlumbingPage() {
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
          Водоснабжение <em className="italic font-medium text-accent">и сантехника</em>
        </h1>
        <div className="w-16 h-px bg-accent my-6" />
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl font-light leading-relaxed">
          Проектируем и монтируем системы водоснабжения, канализации и сантехнические узлы
          в квартирах, частных домах и коммерческих помещениях. Работаем с давлением,
          температурой и материалами по нормам СП 30.13330 и СП 73.13330.
        </p>

        <div className="mt-12 overflow-hidden border-t-2 border-accent">
          <img
            src={heroImage}
            alt="Монтаж систем водоснабжения и сантехники"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-border mt-12 border border-border">
          {[
            { icon: Droplets, title: "Сертифицированные материалы", text: "Rehau, Valtec, Grohe, Geberit — с заводской гарантией." },
            { icon: Wrench, title: "Опрессовка и протокол", text: "Каждая система сдаётся с актом испытаний давлением." },
            { icon: ShieldCheck, title: "Гарантия 3 года", text: "На монтаж скрытых коммуникаций — до 3 лет." },
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
            <h3 className="font-display text-2xl md:text-3xl font-bold">Замер и смета — за наш счёт</h3>
            <p className="text-gray-300 mt-2 font-light">Инженер приедет на объект, замерит и подготовит смету в течение 1 рабочего дня.</p>
          </div>
          <a
            href="tel:+79997881555"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-semibold px-6 py-4 hover:bg-accent/90 transition-colors"
          >
            <Phone className="h-5 w-5" /> +7 999 788 15 55
          </a>
        </div>
      </section>

      <footer className="bg-primary text-gray-300 py-8 text-center text-xs">
        © {new Date().getFullYear()} BSS — Бизнес. Стратегии. Сервис
      </footer>
    </main>
  );
}
