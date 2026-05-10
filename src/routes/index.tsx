import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

const NAV_LINKS: [string, string][] = [
  ["#services", "Услуги"],
  ["#portfolio", "Портфолио"],
  ["#prices", "Цены"],
  ["#process", "Этапы"],
];

// Header height in px (h-20 = 80). Used to offset both anchor scroll and active-section detection.
const HEADER_OFFSET = 80;

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const getElements = () =>
      ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

    const compute = () => {
      const els = getElements();
      if (els.length === 0) return;
      // Activation line sits just below the fixed header.
      const line = HEADER_OFFSET + 8;
      let current = "";
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top - line <= 0 && rect.bottom - line > 0) {
          current = el.id;
          break;
        }
      }
      // Near the bottom of the page — force the last section active.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = els[els.length - 1].id;
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [ids.join(",")]);
  return active;
}

function Landing() {
  const [filter, setFilter] = useState<"all" | "apt" | "office">("all");
  const [area, setArea] = useState(50);
  const [type, setType] = useState<"cosmetic" | "capital" | "premium">("capital");
  const rates = { cosmetic: 5000, capital: 12000, premium: 20000 };
  const total = (area * rates[type]).toLocaleString("ru-RU");
  const activeSection = useActiveSection(["services", "portfolio", "prices", "process", "contact"]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Современный интерьер" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-1.5 border border-accent/60 text-accent text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
              Ремонт под ключ — с 2008
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] mb-6 tracking-tight">
              Ремонт квартир и&nbsp;офисов{" "}
              <em className="not-italic block md:inline">
                <span className="font-display italic font-medium text-accent">без сюрпризов</span>
              </em>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl font-body font-light leading-relaxed">
              Прозрачная смета, фиксированная цена и&nbsp;сдача в&nbsp;срок. Технадзор на&nbsp;каждом этапе.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-14 px-8 text-base rounded-none" style={{ boxShadow: "var(--shadow-accent)" }}>
                Рассчитать стоимость <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent text-white border border-white/70 hover:bg-white hover:text-primary rounded-none">
                Смотреть работы
              </Button>
            </div>
          </div>

          {/* Calculator with corner accents */}
          <div className="relative bg-card text-card-foreground p-8 md:p-10">
            {/* Corner accents */}
            <span className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-accent" aria-hidden />
            <span className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-accent" aria-hidden />
            <span className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-accent" aria-hidden />
            <span className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-accent" aria-hidden />

            <div className="text-[11px] tracking-[0.25em] uppercase text-accent font-semibold mb-2">Калькулятор</div>
            <h3 className="font-display text-3xl font-bold mb-1">Стоимость ремонта</h3>
            <p className="text-sm text-muted-foreground mb-6 font-light italic">за тридцать секунд</p>
            <div className="space-y-5">
              <div>
                <Label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Тип ремонта</Label>
                <div className="grid grid-cols-3 gap-2">
                  {([["cosmetic","Косметика"],["capital","Капитал"],["premium","Премиум"]] as const).map(([k, l]) => (
                    <button key={k} onClick={() => setType(k)}
                      className={`py-3 text-sm font-semibold transition-all border ${type===k ? "bg-accent text-accent-foreground border-accent" : "bg-transparent text-card-foreground border-border hover:border-accent"}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Площадь — <span className="text-accent font-bold">{area} м²</span></Label>
                <input type="range" min={20} max={300} value={area} onChange={(e)=>setArea(+e.target.value)}
                  className="w-full h-1 rounded-full bg-secondary accent-accent" />
              </div>
              <div className="border-t border-b border-border py-5 flex items-end justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Ориентировочно</div>
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mt-1 tabular-nums">{total} ₽</div>
                </div>
                <div className="text-right text-xs text-muted-foreground italic font-display">
                  {rates[type].toLocaleString("ru-RU")} ₽/м²
                </div>
              </div>
              <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-none">
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
        <div className="grid md:grid-cols-3 gap-px bg-border mt-14 border border-border">
          {[
            { icon: FileText, title: "Прозрачная смета", text: "Цена в договоре не меняется в процессе работы. Никаких «вылезших» расходов." },
            { icon: ShieldCheck, title: "Технический надзор", text: "Прораб проверяет каждый этап. Отчёт с фото — раз в неделю в мессенджер." },
            { icon: Sparkles, title: "Чистота на объекте", text: "Вывозим мусор и делаем профессиональный клининг перед сдачей." },
          ].map(({icon:Icon, title, text}) => (
            <div key={title} className="bg-background p-8 group transition-colors hover:bg-card">
              <Icon className="h-8 w-8 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 py-24 bg-card/40 border-y border-border">
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
      <section id="portfolio" className="scroll-mt-20 py-24 container mx-auto px-6">
        <SectionTitle eyebrow="Портфолио" title="Наши работы" />
        <div className="flex justify-center gap-0 mt-10 mb-10 border border-border w-fit mx-auto">
          {([["all","Все объекты"],["apt","Квартиры"],["office","Офисы"]] as const).map(([k, l]) => (
            <button key={k} onClick={()=>setFilter(k)}
              className={`px-6 py-2.5 text-sm font-semibold transition-all border-r border-border last:border-r-0 ${filter===k ? "bg-accent text-accent-foreground" : "bg-transparent text-foreground hover:bg-card"}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.filter(p => filter==="all" || p.cat===filter).map((p, i) => (
            <article key={i} className="group bg-card overflow-hidden border-t-2 border-accent">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                    {p.cat === "apt" ? "Квартира" : "Офис"}
                  </span>
                  <span className="text-xs text-muted-foreground italic font-display">{p.term}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-light">{p.done}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Стоимость</span>
                  {p.price === "—"
                    ? <span className="font-medium text-muted-foreground italic font-display">по согласованию</span>
                    : <span className="font-bold text-foreground tabular-nums">{p.price}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-none">
            Показать все работы
          </Button>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="scroll-mt-20 py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Цены" title="Прайс-лист" light />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { name: "Косметический", price: "5 000", desc: "Покраска, обои, замена напольных покрытий", features: ["Демонтаж старой отделки", "Шпаклёвка и покраска стен", "Укладка ламината", "Замена плинтусов"] },
              { name: "Капитальный", price: "12 000", featured: true, desc: "Полное обновление с заменой коммуникаций", features: ["Всё из косметического", "Замена электрики и сантехники", "Выравнивание стен и полов", "Сан­узел под ключ"] },
              { name: "Премиальный", price: "20 000", desc: "Дизайнерский ремонт по авторскому проекту", features: ["Всё из капитального", "Реализация дизайн-проекта", "Скрытый монтаж, теневые профили", "Премиум-материалы"] },
            ].map((t) => (
              <div key={t.name} className={`p-8 flex flex-col border ${t.featured ? "bg-accent text-accent-foreground border-accent scale-[1.02]" : "bg-white/[0.03] border-white/15"}`}>
                {t.featured && <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-3 px-3 py-1 border border-accent-foreground/40 self-start">Популярный</span>}
                <h3 className="font-display text-2xl font-bold mb-2">{t.name}</h3>
                <p className={`text-sm mb-6 font-light ${t.featured ? "text-accent-foreground/85" : "text-white/65"}`}>{t.desc}</p>
                <div className="mb-6 border-t border-b border-current/20 py-4 -mx-1">
                  <span className="text-sm italic font-display">от</span>
                  <span className="font-display text-5xl font-bold mx-2 tabular-nums">{t.price}</span>
                  <span className="text-sm">₽/м²</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.features.map(f => (
                    <li key={f} className="flex gap-3 text-sm">
                      <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${t.featured ? "" : "text-accent"}`} strokeWidth={1.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className={`mt-auto w-full h-12 font-semibold rounded-none ${t.featured
                    ? "bg-transparent border border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                    : "bg-transparent border border-white/60 text-white hover:bg-accent hover:text-accent-foreground hover:border-accent"}`}
                >
                  {t.featured ? "Выбрать" : "Узнать подробнее"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-20 py-24 container mx-auto px-6">
        <SectionTitle eyebrow="Этапы" title="Как мы работаем" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
          {[
            { icon: Ruler, title: "Замер", text: "Бесплатный выезд инженера" },
            { icon: FileText, title: "Смета", text: "Прозрачный расчёт и договор" },
            { icon: Hammer, title: "Демонтаж", text: "Подготовка объекта" },
            { icon: Wrench, title: "Ремонт", text: "Все этапы по графику" },
            { icon: CheckCircle2, title: "Сдача", text: "Клининг и гарантия 5 лет" },
          ].map((s, i) => (
            <div key={s.title} className="relative bg-card p-6 border-t-2 border-accent">
              <div className="absolute -top-px right-4 font-display italic text-accent text-3xl font-bold leading-none -translate-y-1/2 bg-background px-2">
                {String(i+1).padStart(2,"0")}
              </div>
              <s.icon className="h-9 w-9 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-display font-bold mb-1 text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT — split layout */}
      <section id="contact" className="scroll-mt-20">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* LEFT: dark + pattern */}
          <div className="relative bg-primary text-primary-foreground p-10 md:p-16 bg-pattern-lines overflow-hidden">
            <span className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-accent" aria-hidden />
            <span className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-accent" aria-hidden />
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto lg:mr-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">Контакты</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
                Обсудим <em className="font-display italic font-medium text-accent">ваш проект</em>
              </h2>
              <p className="text-white/75 mt-4 mb-10 font-light leading-relaxed">
                Оставьте заявку — перезвоним в&nbsp;течение 15&nbsp;минут и&nbsp;согласуем удобное время для бесплатного замера.
              </p>
              <div className="space-y-5 border-t border-white/15 pt-8">
                {[
                  { icon: Phone, label: "+7 904 680 87 83", href: "tel:+79046808783" },
                  { icon: Mail, label: "bss-rus@mail.ru", href: "mailto:bss-rus@mail.ru" },
                  { icon: MapPin, label: "г. Липецк, ул. Толстого, 46" },
                ].map(({icon:Icon, label, href}) => (
                  <a key={label} href={href ?? "#"} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 border border-accent/50 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                      <Icon className="h-4 w-4 text-accent group-hover:text-accent-foreground transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
              <div className="flex gap-3 mt-10">
                <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors rounded-none"><MessageCircle className="h-5 w-5" /> WhatsApp</Button>
                <Button size="lg" variant="outline" className="gap-2 border border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent/80 active:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors rounded-none"><Send className="h-5 w-5" /> Telegram</Button>
              </div>
            </div>
          </div>

          {/* RIGHT: light form */}
          <div className="relative bg-secondary text-foreground p-10 md:p-16 flex items-center">
            <span className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-accent" aria-hidden />
            <span className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-accent" aria-hidden />
            <form className="w-full max-w-md mx-auto lg:mx-0 lg:mr-auto lg:ml-12 space-y-5" onSubmit={(e)=>e.preventDefault()}>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">Заявка</span>
                <h3 className="font-display text-3xl font-bold mt-2">На&nbsp;бесплатный <em className="italic font-medium text-accent">замер</em></h3>
              </div>
              <div className="space-y-2"><Label className="text-xs uppercase tracking-widest text-muted-foreground">Имя</Label><Input placeholder="Как к вам обращаться" className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent" /></div>
              <div className="space-y-2"><Label className="text-xs uppercase tracking-widest text-muted-foreground">Телефон</Label><Input placeholder="+7 (___) ___-__-__" className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent" /></div>
              <div className="space-y-2"><Label className="text-xs uppercase tracking-widest text-muted-foreground">Сообщение</Label><Textarea placeholder="Тип объекта, площадь, пожелания" rows={3} className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent resize-none" /></div>
              <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-none">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center font-light">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-6 py-12">
          <div className="overflow-hidden border-t-2 border-accent">
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

      <footer className="bg-primary text-gray-300 py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 grid gap-8 md:gap-8 md:grid-cols-3 items-center text-center md:text-left">
          <img src={logoFooter} alt="BSS — Бизнес. Стратегии. Сервис" className="h-14 md:h-16 w-auto mx-auto md:mx-0" />
          <nav aria-label="Быстрые ссылки в футере" className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm justify-items-center md:flex md:flex-wrap md:justify-center md:gap-x-5">
            {NAV_LINKS.map(([h, l]) => {
              const id = h.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={h}
                  href={h}
                  aria-label={`Перейти к разделу «${l}»`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded px-1 py-0.5 transition-colors hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
                    isActive ? "text-white font-semibold underline underline-offset-4 decoration-accent" : ""
                  }`}
                >
                  {l}
                </a>
              );
            })}
          </nav>
          <p className="text-xs sm:text-sm leading-relaxed md:text-right">© {new Date().getFullYear()} BSS. Все права защищены.</p>
        </div>
      </footer>

      {/* MOBILE QUICK CONTACT BAR */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-primary border-t border-white/10"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        role="navigation"
        aria-label="Быстрый контакт"
      >
        <div className="grid grid-cols-3 h-16">
          <a
            href="tel:+79046808783"
            aria-label="Позвонить по телефону +7 904 680 87 83"
            className="flex flex-col items-center justify-center gap-1 text-primary-foreground hover:bg-white/10 active:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset transition-colors"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] font-semibold">Звонок</span>
          </a>
          <a
            href="https://wa.me/79046808783"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="flex flex-col items-center justify-center gap-1 bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset transition-colors"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] font-semibold">WhatsApp</span>
          </a>
          <a
            href="https://t.me/+79046808783"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Telegram"
            className="flex flex-col items-center justify-center gap-1 text-primary-foreground hover:bg-white/10 active:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset transition-colors"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] font-semibold">Telegram</span>
          </a>
        </div>
      </div>
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
