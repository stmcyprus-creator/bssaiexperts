import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function CookiePolicyPage() {
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

      <section className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Документ</span>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-3">
          Политика использования <em className="italic font-medium text-accent">cookies</em>
        </h1>
        <div className="w-16 h-px bg-accent my-6" />
        <p className="text-sm text-muted-foreground">Редакция от 2 июня 2026 г.</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">1. Что такое cookies</h2>
            <p>
              Cookies — это небольшие текстовые файлы, которые сохраняются в браузере при
              посещении сайта и позволяют узнавать ваше устройство при последующих визитах.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">2. Какие cookies мы используем</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Технические</strong> — обеспечивают корректную работу сайта (сессия,
                сохранение настроек интерфейса).
              </li>
              <li>
                <strong>Аналитические</strong> — Яндекс.Метрика и аналогичные сервисы. Собирают
                обезличенную статистику посещений: источники трафика, поведение на страницах,
                устройство и браузер.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">3. Цели обработки</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>повышение удобства пользования сайтом;</li>
              <li>анализ посещаемости и улучшение контента;</li>
              <li>измерение эффективности рекламных кампаний.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">4. Управление cookies</h2>
            <p>
              Вы можете в любой момент отключить cookies в настройках вашего браузера или
              удалить ранее сохранённые файлы. Учтите, что часть функциональности сайта может
              работать некорректно.
            </p>
            <p className="mt-3">
              Инструкции для популярных браузеров: Chrome, Safari, Firefox, Edge — в разделах
              «Настройки» → «Конфиденциальность».
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">5. Согласие</h2>
            <p>
              Продолжая использовать сайт после уведомления о cookies, вы соглашаетесь
              с условиями настоящей политики и{" "}
              <Link to="/privacy" className="text-accent underline underline-offset-2 hover:opacity-80">
                политикой конфиденциальности
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">6. Контакты</h2>
            <p>
              По вопросам обработки данных пишите на{" "}
              <a href="mailto:info@bss-rus.ru" className="text-accent hover:underline">info@bss-rus.ru</a>.
            </p>
          </section>
        </div>
      </section>

      <footer className="bg-primary text-gray-300 py-8 text-center text-xs">
        © BSS — Бизнес. Стратегии. Сервис
      </footer>
    </main>
  );
}
