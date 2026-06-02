import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function PrivacyPage() {
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
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
          Документ
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-3">
          Политика <em className="italic font-medium text-accent">конфиденциальности</em>
        </h1>
        <div className="w-16 h-px bg-accent my-6" />
        <p className="text-sm text-muted-foreground">
          Редакция от 2 июня 2026 г. Документ разработан в соответствии с Федеральным
          законом от 27.07.2006 № 152-ФЗ «О персональных данных».
        </p>

        <div className="prose prose-neutral max-w-none mt-10 space-y-8 text-[15px] leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика определяет порядок обработки и защиты персональных данных
              физических лиц (далее — Пользователи), пользующихся сайтом и услугами компании
              BSS — Бизнес. Стратегии. Сервис (далее — Оператор), расположенной по адресу:
              г. Липецк, ул. Толстого, 46.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">2. Состав персональных данных</h2>
            <p>Оператор обрабатывает следующие данные, добровольно предоставленные Пользователем:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>имя (как обращаться);</li>
              <li>контактный телефон;</li>
              <li>адрес электронной почты (при наличии);</li>
              <li>текст сообщения, направленного через форму обратной связи.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">3. Цели обработки</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>обработка заявок и обращений Пользователей;</li>
              <li>предоставление консультаций, расчёт стоимости, организация замера;</li>
              <li>заключение и исполнение договоров на выполнение работ;</li>
              <li>информирование о ходе оказания услуг.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">4. Правовые основания</h2>
            <p>
              Обработка осуществляется на основании согласия Пользователя, выражаемого путём
              заполнения и отправки формы обратной связи на сайте, а также в соответствии
              со ст. 6 ФЗ № 152-ФЗ.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">5. Условия обработки и хранения</h2>
            <p>
              Оператор обрабатывает персональные данные с использованием автоматизированных
              средств и без таковых. Передача третьим лицам не осуществляется, за исключением
              случаев, предусмотренных законодательством РФ. Срок хранения — до достижения
              целей обработки или до отзыва согласия.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">6. Cookies и метрики</h2>
            <p>
              Сайт может использовать файлы cookie и системы веб-аналитики (Яндекс.Метрика и др.)
              для сбора обезличенных данных о посещениях. Пользователь может отключить cookie
              в настройках браузера.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">7. Права Пользователя</h2>
            <p>
              Пользователь вправе получать информацию об обработке своих данных, требовать их
              уточнения, блокирования или удаления, а также отозвать согласие, направив запрос
              на e-mail: <a href="mailto:bss-rus@mail.ru" className="text-accent hover:underline">bss-rus@mail.ru</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">8. Меры защиты</h2>
            <p>
              Оператор принимает необходимые правовые, организационные и технические меры
              для защиты персональных данных от неправомерного доступа, изменения, копирования,
              распространения, а также иных неправомерных действий.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">9. Контакты</h2>
            <p>
              BSS — Бизнес. Стратегии. Сервис<br />
              Адрес: г. Липецк, ул. Толстого, 46<br />
              Телефон: <a href="tel:+79046808783" className="text-accent hover:underline">+7 904 680 87 83</a><br />
              E-mail: <a href="mailto:bss-rus@mail.ru" className="text-accent hover:underline">bss-rus@mail.ru</a>
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
