import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "bss-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handle = (value: "accepted" | "declined") => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление об использовании cookies"
      className="fixed z-[60] bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md"
    >
      <div className="relative bg-primary text-gray-100 border-t-2 border-accent shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] p-5 md:p-6 bg-pattern-lines">
        <button
          onClick={() => handle("declined")}
          aria-label="Закрыть уведомление"
          className="absolute top-3 right-3 text-gray-300 hover:text-accent transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 border border-accent text-accent flex items-center justify-center flex-shrink-0">
            <Cookie className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">Cookies</p>
            <p className="mt-2 text-sm font-light leading-relaxed text-gray-200">
              Мы используем cookies и Яндекс.Метрику для аналитики и улучшения сайта.
              Подробнее — в{" "}
              <Link to="/cookies" className="text-accent underline underline-offset-2 hover:opacity-80">
                политике cookies
              </Link>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                onClick={() => handle("accepted")}
                className="h-9 px-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-none text-xs font-semibold uppercase tracking-wider"
              >
                Принять
              </Button>
              <Button
                onClick={() => handle("declined")}
                variant="outline"
                className="h-9 px-4 border border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground rounded-none text-xs font-semibold uppercase tracking-wider"
              >
                Отклонить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
