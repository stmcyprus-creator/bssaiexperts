import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-primary text-gray-100 bg-pattern-lines flex flex-col">
      <header className="container mx-auto px-6 py-6">
        <Link to="/" aria-label="На главную">
          <img src={logo} alt="BSS" className="h-12 w-auto" />
        </Link>
      </header>

      <section className="flex-1 container mx-auto px-6 flex items-center">
        <div className="max-w-2xl mx-auto text-center py-20">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            Ошибка
          </span>
          <h1 className="font-display text-[120px] md:text-[180px] leading-none font-bold mt-4 text-accent">
            404
          </h1>
          <div className="mx-auto w-24 h-px bg-accent my-8" />
          <h2 className="font-display text-2xl md:text-4xl font-semibold">
            Страница не&nbsp;найдена
          </h2>
          <p className="mt-5 text-gray-300 font-light leading-relaxed">
            Возможно, она была перемещена или удалена. Вернитесь на&nbsp;главную —
            мы&nbsp;поможем найти нужную информацию о&nbsp;ремонте и&nbsp;отделке.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-none">
              <Link to="/"><ArrowLeft className="h-5 w-5" /> На главную</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground rounded-none">
              <a href="tel:+79997881555">Позвонить нам</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-8 text-center text-xs text-gray-400 border-t border-white/10">
        © BSS — Бизнес. Стратегии. Сервис
      </footer>
    </main>
  );
}
