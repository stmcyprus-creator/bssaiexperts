import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Flame,
  Droplets,
  Recycle,
  Ruler,
  FileText,
  ShieldCheck,
  Truck,
  Video,
  Home,
  Building2,
  Wrench,
  CheckCircle2,
  Phone,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import heroImage from "@/assets/plumbing-hero.jpg";

const audiences = [
  {
    icon: Home,
    title: "Для частных домов и коттеджей",
    text: "Полный комплекс от бурения скважины и разводки труб до запуска котельной и тёплого пола.",
  },
  {
    icon: Building2,
    title: "Для коммерческой недвижимости",
    text: "Отопление и водоснабжение для складов, офисов, автосервисов и производственных цехов с соблюдением всех СНиП и ГОСТ.",
  },
  {
    icon: Wrench,
    title: "Модернизация и ремонт",
    text: "Замена устаревшего оборудования, устранение ошибок прошлых монтажников, повышение энергоэффективности системы — снижение расходов на газ и электричество до 40%.",
  },
];

const services = [
  {
    icon: Flame,
    title: "Отопление «под ключ»",
    items: [
      "Монтаж газовых, электрических и твердотопливных котельных",
      "Установка радиаторов и конвекторов",
      "Проектирование водяного тёплого пола",
    ],
  },
  {
    icon: Droplets,
    title: "Водоснабжение и водоотведение",
    items: [
      "Организация подачи воды из скважины или колодца",
      "Разводка труб: полипропилен, сшитый полиэтилен",
      "Установка систем очистки и фильтрации воды",
    ],
  },
  {
    icon: Recycle,
    title: "Автономная канализация",
    items: [
      "Подбор, доставка и монтаж септиков",
      "Станции биологической очистки",
      "Монтаж с учётом уровня грунтовых вод",
    ],
  },
  {
    icon: Ruler,
    title: "Проектирование и аудит",
    items: [
      "Точный теплорасчёт здания",
      "Подбор оборудования без избыточной мощности",
      "Не переплачивайте за котёл и радиаторы",
    ],
  },
];

const pillars = [
  {
    icon: FileText,
    title: "Прозрачная смета и договор",
    text: "Цена фиксируется до начала работ. Никаких «внезапных» расходов и доплат в процессе монтажа.",
  },
  {
    icon: Video,
    title: "Строгий технадзор",
    text: "Все скрытые работы (заливка тёплого пола, штробление) фиксируются на фото и видео. Двойной контроль качества соединений.",
  },
  {
    icon: ShieldCheck,
    title: "Официальная гарантия",
    text: "Даём официальную гарантию до 5 лет на выполненные работы и помогаем с подбором сертифицированного оборудования.",
  },
  {
    icon: Truck,
    title: "Снабжение «под ключ»",
    text: "Сами закупим и доставим проверенные материалы (Rehau, Stout, Baxi и др.) по оптовым ценам напрямую от дистрибьюторов.",
  },
];

const steps = [
  {
    title: "Заявка и консультация",
    text: "Вы оставляете заявку, мы обсуждаем детали и делаем предварительный расчёт.",
  },
  {
    title: "Выезд инженера на объект",
    text: "Проводим точные замеры, оцениваем теплопотери здания, помогаем выбрать места для оборудования.",
  },
  {
    title: "Договор и смета",
    text: "Составляем подробную спецификацию материалов и график работ. Подписываем официальный договор.",
  },
  {
    title: "Монтаж и пусконаладка",
    text: "Бригада монтирует систему, проводит обязательные гидравлические испытания (опрессовку) и запускает объект.",
  },
  {
    title: "Сдача объекта",
    text: "Вы получаете готовую, работающую систему, исполнительную документацию и памятку по эксплуатации.",
  },
];

export default function PlumbingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Здравствуйте! Хочу получить консультацию по отоплению/водоснабжению. Меня зовут ${name || "—"}, телефон: ${phone}`
    );
    window.open(`https://wa.me/79997881555?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

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
          Инженерные системы под ключ
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
          Проектирование и монтаж систем <em className="italic font-medium text-accent">отопления и водоснабжения</em> в Липецке и области
        </h1>
        <div className="w-16 h-px bg-accent my-6" />
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl font-light leading-relaxed">
          Создаём энергоэффективные инженерные системы для загородных домов, коттеджей и коммерческих
          объектов с гарантией до 5 лет. Уложимся в смету или вернём деньги!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-4 hover:bg-accent/90 transition-colors"
          >
            <Ruler className="h-5 w-5" /> Рассчитать стоимость за 2 минуты
          </a>
          <a
            href="tel:+79997881555"
            className="inline-flex items-center justify-center gap-2 border border-accent text-accent font-semibold px-6 py-4 hover:bg-accent/10 transition-colors"
          >
            <Phone className="h-5 w-5" /> Вызвать инженера на замер
          </a>
        </div>

        <div className="mt-12 overflow-hidden border-t-2 border-accent">
          <img
            src={heroImage}
            alt="Монтаж систем отопления и водоснабжения"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Блок 1: Кому и чем мы полезны */}
        <h2 className="font-display text-2xl md:text-4xl font-bold mt-16 mb-8">
          Инженерные системы любой сложности <em className="italic font-medium text-accent">для вашего объекта</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {audiences.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-6 bg-pattern-lines">
              <Icon className="h-7 w-7 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Блок 2: Наши ключевые услуги */}
        <h2 className="font-display text-2xl md:text-4xl font-bold mt-16 mb-8">
          Что именно <em className="italic font-medium text-accent">мы делаем</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card p-8 border-t-2 border-accent bg-pattern-lines">
              <div className="flex items-center gap-3 mb-5">
                <s.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
              </div>
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

        {/* Блок 3: Почему выбирают «БлицСпецСтрой» */}
        <h2 className="font-display text-2xl md:text-4xl font-bold mt-16 mb-2">
          Почему выбирают «БлицСпецСтрой»
        </h2>
        <p className="text-muted-foreground font-light mb-8">4 столпа нашей надёжности</p>
        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-6 bg-pattern-lines">
              <Icon className="h-7 w-7 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Блок 4: Как мы работаем */}
        <h2 className="font-display text-2xl md:text-4xl font-bold mt-16 mb-8">
          Как мы <em className="italic font-medium text-accent">работаем</em>
        </h2>
        <ol className="space-y-px bg-border border border-border">
          {steps.map((s, idx) => (
            <li key={s.title} className="bg-background p-6 bg-pattern-lines flex gap-6 items-start">
              <span className="font-display text-3xl font-bold text-accent leading-none mt-1 w-10 flex-shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Блок 5: Форма захвата */}
        <div id="contact" className="mt-16 bg-primary text-gray-100 bg-pattern-lines border-t-2 border-accent">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-2">
                Бесплатная консультация
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Остались вопросы? Получите бесплатную консультацию ведущего инженера BSS
              </h2>
              <p className="text-gray-300 mt-4 font-light leading-relaxed">
                Введите ваши данные, и мы перезвоним вам в течение 15 минут, чтобы ответить на все
                вопросы по отоплению вашего дома.
              </p>
              <a
                href="tel:+79997881555"
                className="inline-flex items-center gap-3 mt-6 text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                <Phone className="h-5 w-5" /> +7 999 788 15 55
              </a>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="plumbing-name" className="block text-xs font-semibold uppercase tracking-widest text-gray-300 mb-2">
                  Ваше имя
                </label>
                <input
                  id="plumbing-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-accent outline-none py-3 text-gray-100 placeholder:text-gray-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="plumbing-phone" className="block text-xs font-semibold uppercase tracking-widest text-gray-300 mb-2">
                  Номер телефона
                </label>
                <input
                  id="plumbing-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-accent outline-none py-3 text-gray-100 placeholder:text-gray-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-semibold px-6 py-4 hover:bg-accent/90 transition-colors"
              >
                Получить консультацию
              </button>
              {sent && (
                <p className="text-sm text-accent font-light">
                  Заявка подготовлена — мы свяжемся с вами в течение 15 минут.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-gray-300 py-8 text-center text-xs">
        © {new Date().getFullYear()} BSS — Бизнес. Стратегии. Сервис
      </footer>
    </main>
  );
}
