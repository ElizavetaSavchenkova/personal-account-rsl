import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

// Данные для примера
const userData = {
  name: 'Иван Иванович',
  department: 'Отдел комплектования',
  tasksCount: 5,
  notificationsCount: 1,
  nextSalary: '31.03.2026',
  vacationDaysLeft: 28,
};

// Новости для карусели
const newsCarousel = [
  {
    id: 1,
    date: '03.03.2026',
    title: 'Изменения в графике работы с 8 марта',
    excerpt: 'В связи с праздничными днями график работы библиотеки меняется...',
    category: 'Организация'
  },
  {
    id: 2,
    date: '28.02.2026',
    title: 'Новая система бронирования читальных залов',
    excerpt: 'Теперь забронировать место в читальном зале можно через личный кабинет...',
    category: 'Технологии'
  },
  {
    id: 3,
    date: '25.03.2026',
    title: 'Обучение работе с новыми базами данных',
    excerpt: 'Приглашаем сотрудников на вебинар по работе с обновлёнными ресурсами...',
    category: 'Обучение'
  },
  {
    id: 4,
    date: '20.03.2026',
    title: 'Открытие выставки редких книг',
    excerpt: 'В главном корпусе открылась выставка изданий XVIII века...',
    category: 'События'
  },
  {
    id: 5,
    date: '15.03.2026',
    title: 'Пополнение электронного каталога',
    excerpt: 'В систему добавлено более 10 000 новых записей...',
    category: 'Фонды'
  },
];

// Функция для расчета последнего понедельника месяца
const getLastMondayOfMonth = (year, month) => {
  const lastDay = new Date(year, month + 1, 0);
  let lastMonday = new Date(lastDay);
  
  // Идем назад, пока не найдем понедельник (1)
  while (lastMonday.getDay() !== 1) {
    lastMonday.setDate(lastMonday.getDate() - 1);
  }
  
  const y = lastMonday.getFullYear();
  const m = String(lastMonday.getMonth() + 1).padStart(2, '0');
  const d = String(lastMonday.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

// Праздничные и выходные дни 2026
const holidays = [
  '2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04', 
  '2026-01-05', '2026-01-06', '2026-01-07', '2026-01-08',
  '2026-02-23',
  '2026-03-08', '2026-03-09',
  '2026-05-01', '2026-05-09', '2026-05-10', '2026-05-11',
  '2026-06-12', '2026-11-04', '2026-12-31'
];

const Dashboard = () => {
  const [currentDate] = useState(new Date(2026, 2, 4)); // Март 2026

  return (
    <div className="dashboard">
      {/* Приветствие */}
      <div className="dashboard-greeting">
        <h1>Добрый день, {userData.name}!</h1>
        <p>
          У вас {userData.tasksCount} новые задачи и {userData.notificationsCount} уведомление от отдела кадров.
        </p>
      </div>

      {/* 📰 Карусель новостей */}
      <NewsCarousel news={newsCarousel} />

      {/* Сетка виджетов */}
      <div className="dashboard-grid">
        
        {/* Мои задачи */}
        <div className="widget widget-tasks">
          <div className="widget-header">
            <h3>Мои задачи</h3>
          </div>
          <div className="tasks-list">
            <div className="task-item urgent">
              <div className="task-title">Согласовать заявку на закупку</div>
              <div className="task-date">До 15.04.2026</div>
            </div>
            <div className="task-item">
              <div className="task-title">Обновить карточку книги</div>
              <div className="task-status">В работе</div>
            </div>
            <div className="task-item">
              <div className="task-title">Утвердить решение о командировании...</div>
              <div className="task-date">До 10.04.2026</div>
            </div>
            <div className="task-item">
              <div className="task-title">Подготовить отчёт по фондам за март</div>
              <div className="task-date">До 20.04.2026</div>
            </div>
            <div className="task-item">
              <div className="task-title">Проверить поступление новых изданий</div>
              <div className="task-status">В работе</div>
            </div>
          </div>
          <Link to="/tasks" className="widget-link">Все задачи →</Link>
        </div>

        {/* Отпуска + Зарплата */}
        <div className="widget widget-vacation">
          <h3>Отпуска и отсутствие</h3>
          <div className="vacation-info">
            <div className="vacation-block">
              <div className="vacation-type">Плановый отпуск</div>
              <div className="vacation-dates">10.06.2026 — 24.06.2026</div>
            </div>
            <div className="vacation-balance">
              Осталось дней: <strong>{userData.vacationDaysLeft}</strong>
            </div>
          </div>
          <button className="btn btn-secondary">Подать заявление</button>
          
          <div className="salary-section">
            <h3 className="salary-title">Зарплата</h3>
            <div className="salary-info">
              <div className="salary-item">
                <span className="salary-label">Следующая выплата:</span>
                <span className="salary-value">{userData.nextSalary}</span>
              </div>
            </div>
            <button className="btn btn-secondary">Расчётный листок</button>
          </div>
        </div>

        {/* Быстрые действия */}
        <div className="widget widget-quick-actions">
          <h3>Быстрые действия</h3>
          <div className="quick-actions-grid">
            <QuickAction icon="📄" text="Заказать справку" />
            <QuickAction icon="🎫" text="Заказать пропуск" />
            <QuickAction icon="💻" text="Заявка в IT" />
            <QuickAction icon="🏖️" text="Заявление на отпуск" />
            <QuickAction icon="📚" text="Взять отгул" />
            <QuickAction icon="📖" text="Меню столовой" />
            <QuickAction icon="📞" text="Справочник" />
            <QuickAction icon="🎓" text="Обучение" />
          </div>
        </div>

        {/* Календарь */}
        <div className="widget widget-calendar">
          <h3>Календарь</h3>
          <CalendarWidget currentDate={currentDate} />
        </div>

      </div>
    </div>
  );
};

// 🎠 Компонент карусели новостей
const NewsCarousel = ({ news }) => {
  return (
    <div className="news-carousel-wrapper">
      <div className="news-carousel-header">
        <h3>📢 Новости РГБ</h3>
        <Link to="/news" className="news-carousel-link">Все новости →</Link>
      </div>
      
      <div className="news-carousel" id="newsCarousel">
        {news.map((item, index) => (
          <div key={item.id} className="news-carousel-slide">
            <div className="news-carousel-card">
              <div className="news-carousel-category">{item.category}</div>
              <div className="news-carousel-date">{item.date}</div>
              <h4 className="news-carousel-title">{item.title}</h4>
              <p className="news-carousel-excerpt">{item.excerpt}</p>
              <div className="news-carousel-indicator">
                {index + 1} / {news.length}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Кнопки навигации */}
      <button 
        className="carousel-btn carousel-prev"
        onClick={() => scrollCarousel(-1)}
        aria-label="Предыдущая новость"
      >
        ◀
      </button>
      <button 
        className="carousel-btn carousel-next"
        onClick={() => scrollCarousel(1)}
        aria-label="Следующая новость"
      >
        ▶
      </button>
    </div>
  );
};

// Функция прокрутки карусели
const scrollCarousel = (direction) => {
  const carousel = document.getElementById('newsCarousel');
  if (carousel) {
    const slideWidth = carousel.clientWidth;
    carousel.scrollBy({
      left: direction * slideWidth,
      behavior: 'smooth'
    });
  }
};

// Компонент календаря
const CalendarWidget = ({ currentDate }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  
  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const sanitaryDay = getLastMondayOfMonth(year, month);

  const isSanitaryDay = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dateStr === sanitaryDay;
  };

  const isHoliday = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays.includes(dateStr);
  };

  const isWeekend = (day) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           month === today.getMonth() && 
           year === today.getFullYear();
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        {monthNames[month]} {year}
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-header">Пн</div>
        <div className="calendar-day-header">Вт</div>
        <div className="calendar-day-header">Ср</div>
        <div className="calendar-day-header">Чт</div>
        <div className="calendar-day-header">Пт</div>
        <div className="calendar-day-header">Сб</div>
        <div className="calendar-day-header">Вс</div>
        
        {Array.from({ length: startOffset }, (_, i) => (
          <div key={`empty-${i}`} className="calendar-day calendar-day-empty"></div>
        ))}
        
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const sanitary = isSanitaryDay(day);
          const holiday = isHoliday(day);
          const weekend = isWeekend(day);
          const today = isToday(day);
          
          return (
            <div 
              key={day} 
              className={`calendar-day 
                ${today ? 'today' : ''} 
                ${weekend || holiday ? 'weekend' : ''} 
                ${sanitary ? 'sanitary' : ''}
                ${holiday ? 'holiday' : ''}`}
              title={
                sanitary ? 'Санитарный день в РГБ — библиотека закрыта для посетителей' :
                holiday ? 'Праздничный выходной день' :
                weekend ? 'Выходной день' : ''
              }
            >
              {day}
              {sanitary && <span className="sanitary-mark">🧹</span>}
              {holiday && <span className="holiday-mark">🎉</span>}
            </div>
          );
        })}
      </div>
      <div className="calendar-legend">
        <span className="legend-item"><span className="legend-sanitary">🧹</span> Санитарный день</span>
        <span className="legend-item"><span className="legend-holiday">🎉</span> Праздник</span>
        <span className="legend-item"><span className="legend-weekend"></span> Выходной</span>
      </div>
    </div>
  );
};

// Компонент быстрого действия
const QuickAction = ({ icon, text }) => (
  <button className="quick-action">
    <span className="quick-action-icon">{icon}</span>
    <span className="quick-action-text">{text}</span>
  </button>
);

export default Dashboard;