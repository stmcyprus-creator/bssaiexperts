import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-interior.jpg";
import logo from "@/assets/logo.svg";
import logoFooter from "@/assets/logo-footer.svg";
import apt1 from "@/assets/portfolio-apt-1.jpg";
import apt2 from "@/assets/portfolio-apt-2.jpg";
import office1 from "@/assets/portfolio-office-1.jpg";
import office2 from "@/assets/portfolio-office-2.jpg";
import process1 from "@/assets/portfolio-process.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Home, Building2, Wrench, ShieldCheck, Sparkles, ClipboardList,
  Ruler, FileText, Hammer, CheckCircle2, Phone, Mail, MapPin,
  MessageCircle, Send, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BSS — Ремонт квартир и офисов под ключ" },
      { name: "description", content: "Дизайнерский, капитальный и косметический ремонт квартир и офисов. Прозрачная смета, технадзор, сдача в срок." },
      { property: "og:title", content: "BSS — Ремонт под ключ" },
      { property: "og:description", content: "Ремонт квартир и офисов с гарантией качества. Калькулятор стоимости онлайн." },
    ],
  }),
  component: Landing,
});

const portfolio = [
  {
    cat: "apt", img: apt1, title: "ЖК «Скандинавия», 74 м²",
    task: "Дизайнерский ремонт «под ключ» за 3 месяца.",
    done: "Перепланировка, замена электрики, теневой профиль, кварцвинил единым контуром.",
    term: "95 дней", price: "1 200 000 ₽",
  },
  {
    cat: "apt", img: apt2, title: "Санузел «Премиум», 6 м²",
    task: "Полная переделка санузла с инсталляцией.",
    done: "Душевой трап, крупноформатный керамогранит, скрытые люки.",
    term: "21 день", price: "280 000 ₽",
  },
  {
    cat: "office", img: office1, title: "БЦ «Кристалл», 200 м²",
    task: "Ремонт офиса класса B без остановки работы.",
    done: "Стеклянные перегородки, ресепшн, СКС, климат-система.",
    term: "45 дней", price: "по запросу",
  },
  {
    cat: "office", img: office2, title: "Open-space, 320 м²",
    task: "Современный опен-спейс с переговорными.",
    done: "Потолок «грильято», линейные светильники, износостойкий ковролин.",
    term: "60 дней", price: "по запросу",
  },
  {
    cat: "apt", img: process1, title: "Черновые работы, 92 м²",
    task: "Капитальный ремонт с заменой коммуникаций.",
    done: "Разводка электрики, штукатурка по маякам, новые трубы ППР.",
    term: "30 дней (этап)", price: "—",
  },
  {
    cat: "apt", img: heroImg, title: "Пентхаус, 140 м²",
    task: "Премиальный ремонт с панорамными окнами.",
    done: "Полы с подогревом, акустический потолок, дизайнерский свет.",
    term: "150 дней", price: "3 800 000 ₽",
  },
];

function Landing() {
  const [filter, setFilter] = useState<"all" | "apt" | "office">("all");
  const [area, setArea] = useState(50);
  const [type, setType] = useState<"cosmetic" | "capital" | "premium">("capital");
  const rates = { cosmetic: 5000, capital: 12000, premium: 20000 };
  const total = (area * rates[type]).toLocaleString("ru-RU");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Современный интерьер" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wider uppercase mb-6">
              Ремонт под ключ с 2008 года
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
              Ремонт квартир и офисов <span className="text-accent">без сюрпризов</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl">
              Прозрачная смета, фиксированная цена и сдача в срок. Технадзор на каждом этапе.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-14 px-8 text-base" style={{ boxShadow: "var(--shadow-accent)" }}>
                Рассчитать стоимость <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary">
                Смотреть работы
              </Button>
            </div>
          </div>

          {/* Calculator */}
          <div className="bg-card rounded-2xl p-8 md:p-10" style={{ boxShadow: "var(--shadow-card)" }}>
            <h3 className="text-2xl font-bold mb-1">Калькулятор стоимости</h3>
            <p className="text-sm text-muted-foreground mb-6">Узнайте цену ремонта за 30 секунд</p>
            <div className="space-y-5">
              <div>
                <Label className="mb-2 block font-semibold">Тип ремонта</Label>
                <div className="grid grid-cols-3 gap-2">
                  {([["cosmetic","Косметика"],["capital","Капитал"],["premium","Премиум"]] as const).map(([k, l]) => (
                    <button key={k} onClick={() => setType(k)}
                      className={`py-3 rounded-lg text-sm font-semibold transition-all ${type===k ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label className="mb-2 block font-semibold">Площадь: <span className="text-accent">{area} м²</span></Label>
                <input type="range" min={20} max={300} value={area} onChange={(e)=>setArea(+e.target.value)}
                  className="w-full h-2 rounded-full bg-secondary accent-accent" />
              </div>
              <div className="bg-secondary rounded-xl p-5 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Ориентировочно</div>
                  <div className="text-4xl font-extrabold text-primary mt-1">{total} ₽</div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  {rates[type].toLocaleString("ru-RU")} ₽/м²
                </div>
              </div>
              <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Получить точную смету
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 grid grid-cols-3 divide-x divide-white/15">
          {[["340+", "объектов"], ["16 лет", "на рынке"], ["5 лет", "гарантии"]].map(([n, l]) => (
            <div key={l} className="text-center px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-accent">{n}</div>
              <div className="text-sm text-primary-foreground/70 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="pt-20 pb-16 container mx-auto px-6">
        <SectionTitle eyebrow="Почему мы" title="Три причины доверить ремонт нам" />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            { icon: FileText, title: "Прозрачная смета", text: "Цена в договоре не меняется в процессе работы. Никаких «вылезших» расходов." },
            { icon: ShieldCheck, title: "Технический надзор", text: "Прораб проверяет каждый этап. Отчёт с фото — раз в неделю в мессенджер." },
            { icon: Sparkles, title: "Чистота на объекте", text: "Вывозим мусор и делаем профессиональный клининг перед сдачей." },
          ].map(({icon:Icon, title, text}) => (
            <div key={title} className="bg-card rounded-2xl p-8 border border-border hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#F5A623" }}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Услуги" title="Что мы делаем" />
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            <ServiceCard icon={Home} title="Ремонт квартир" items={[
              "Дизайнерский — реализация авторского проекта",
              "Капитальный — замена коммуникаций и отделки",
              "Косметический — обновление без перепланировки",
            ]} />
            <ServiceCard icon={Building2} title="Ремонт офисов" items={[
              "Open-space — рабочие зоны и переговорные",
              "Кабинеты — звукоизоляция, перегородки",
              "Зоны ресепшн — лицо вашей компании",
            ]} />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 container mx-auto px-6">
        <SectionTitle eyebrow="Портфолио" title="Наши работы" />
        <div className="flex justify-center gap-2 mt-10 mb-10">
          {([["all","Все объекты"],["apt","Квартиры"],["office","Офисы"]] as const).map(([k, l]) => (
            <button key={k} onClick={()=>setFilter(k)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${filter===k ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.filter(p => filter==="all" || p.cat===filter).map((p, i) => (
            <article key={i} className="group bg-card rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    {p.cat === "apt" ? "Квартира" : "Офис"}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.term}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.done}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Стоимость работ</span>
                  {p.price === "—"
                    ? <span className="font-medium text-muted-foreground">по согласованию</span>
                    : <span className="font-bold text-primary">{p.price}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Показать все работы
          </Button>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Цены" title="Прайс-лист" light />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { name: "Косметический", price: "5 000", desc: "Покраска, обои, замена напольных покрытий", features: ["Демонтаж старой отделки", "Шпаклёвка и покраска стен", "Укладка ламината", "Замена плинтусов"] },
              { name: "Капитальный", price: "12 000", featured: true, desc: "Полное обновление с заменой коммуникаций", features: ["Всё из косметического", "Замена электрики и сантехники", "Выравнивание стен и полов", "Сан­узел под ключ"] },
              { name: "Премиальный", price: "20 000", desc: "Дизайнерский ремонт по авторскому проекту", features: ["Всё из капитального", "Реализация дизайн-проекта", "Скрытый монтаж, теневые профили", "Премиум-материалы"] },
            ].map((t) => (
              <div key={t.name} className={`rounded-2xl p-8 flex flex-col ${t.featured ? "bg-accent text-accent-foreground scale-[1.02]" : "bg-white/5"}`} style={t.featured ? undefined : { border: "1px solid rgba(255,255,255,0.15)" }}>
                {t.featured && <span className="inline-block text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 bg-accent-foreground/10 rounded-full self-start">Популярный</span>}
                <h3 className="text-2xl font-bold mb-2">{t.name}</h3>
                <p className={`text-sm mb-6 ${t.featured ? "text-accent-foreground/80" : "text-white/70"}`}>{t.desc}</p>
                <div className="mb-6">
                  <span className="text-sm">от</span>
                  <span className="text-5xl font-extrabold mx-2">{t.price}</span>
                  <span className="text-sm">₽/м²</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.features.map(f => (
                    <li key={f} className="flex gap-3 text-sm">
                      <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${t.featured ? "" : "text-accent"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className={`mt-auto w-full h-12 font-semibold ${t.featured
                    ? "bg-transparent border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                    : "bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-primary"}`}
                >
                  {t.featured ? "Выбрать" : "Узнать подробнее"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 container mx-auto px-6">
        <SectionTitle eyebrow="Этапы" title="Как мы работаем" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
          {[
            { icon: Ruler, title: "Замер", text: "Бесплатный выезд инженера" },
            { icon: FileText, title: "Смета", text: "Прозрачный расчёт и договор" },
            { icon: Hammer, title: "Демонтаж", text: "Подготовка объекта" },
            { icon: Wrench, title: "Ремонт", text: "Все этапы по графику" },
            { icon: CheckCircle2, title: "Сдача", text: "Клининг и гарантия 5 лет" },
          ].map((s, i) => (
            <div key={s.title} className="relative bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-extrabold text-sm">
                {i+1}
              </div>
              <s.icon className="h-9 w-9 text-primary mb-4" />
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle eyebrow="Контакты" title="Обсудим ваш проект" align="left" />
            <p className="text-muted-foreground mt-4 mb-8 max-w-md">
              Оставьте заявку — перезвоним в течение 15 минут и согласуем удобное время для бесплатного замера.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "+7 904 680 87 83" },
                { icon: Mail, label: "bss-rus@mail.ru" },
                { icon: MapPin, label: "г. Липецк, ул. Толстого, 46" },
              ].map(({icon:Icon, label}) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors"><MessageCircle className="h-5 w-5" /> WhatsApp</Button>
              <Button size="lg" variant="outline" className="gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground active:bg-accent/80 active:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors"><Send className="h-5 w-5" /> Telegram</Button>
            </div>
          </div>
          <form className="bg-card rounded-2xl p-8 md:p-10 space-y-5" style={{ boxShadow: "var(--shadow-card)" }} onSubmit={(e)=>e.preventDefault()}>
            <h3 className="text-2xl font-bold">Заявка на замер</h3>
            <div className="space-y-2"><Label>Имя</Label><Input placeholder="Как к вам обращаться" /></div>
            <div className="space-y-2"><Label>Телефон</Label><Input placeholder="+7 (___) ___-__-__" /></div>
            <div className="space-y-2"><Label>Сообщение</Label><Textarea placeholder="Тип объекта, площадь, пожелания" rows={4} /></div>
            <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
          </form>
        </div>
        <div className="container mx-auto px-6 mt-12">
          <div className="rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <iframe
              title="Карта: г. Липецк, ул. Толстого, 46"
              src="https://yandex.ru/map-widget/v1/?ll=39.594000%2C52.610000&mode=search&text=%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%2C%20%D1%83%D0%BB.%20%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B3%D0%BE%2C%2046&z=16"
              width="100%"
              height="420"
              loading="lazy"
              allowFullScreen
              className="block w-full border-0"
            />
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <img src={logoFooter} alt="BSS — Бизнес. Стратегии. Сервис" className="h-16 w-auto" />
          <p className="text-sm text-gray-300">© 2026 BSS. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="BSS — Бизнес. Стратегии. Сервис" className="h-16 w-auto" />
        </a>
        <nav className="hidden md:flex gap-8 text-[15px] font-extrabold tracking-wide uppercase">
          {[["#services","Услуги"],["#portfolio","Портфолио"],["#prices","Цены"],["#process","Этапы"],["#contact","Контакты"]].map(([h,l])=>(
            <a key={h} href={h} className="hover:text-accent transition-colors">{l}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, light, align = "center" }: { eyebrow: string; title: string; light?: boolean; align?: "left"|"center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : ""}>
      <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 ${light ? "text-accent" : "text-accent"}`}>{eyebrow}</span>
      <h2 className={`text-4xl md:text-5xl font-extrabold ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map(i => (
          <li key={i} className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
