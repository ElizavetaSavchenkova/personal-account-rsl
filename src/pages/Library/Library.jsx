import React, { useState } from 'react';
import './Library.css';

const Library = () => {
  const [activeTab, setActiveTab] = useState('abonement');

  // Книги на руках
  const booksOnHand = [
    {
      id: 'INV-2025-00142',
      title: 'История русской литературы XIX века',
      author: 'В.В. Виноградов',
      inventory: 'А123456',
      takenDate: '15.02.2026',
      dueDate: '15.03.2026',
      status: 'active',
      location: 'Зал 3, место 45'
    },
    {
      id: 'INV-2025-00138',
      title: 'Словарь древнерусского языка',
      author: 'И.И. Срезневский',
      inventory: 'Б789012',
      takenDate: '01.02.2026',
      dueDate: '01.03.2026',
      status: 'overdue',
      location: 'Зал 2, место 12'
    },
  ];

  // Забронированные книги
  const reservedBooks = [
    {
      id: 'RES-2026-00089',
      title: 'Палеография славянских рукописей',
      author: 'Е.Ф. Карский',
      inventory: 'В345678',
      reserveDate: '03.03.2026',
      readyDate: '07.03.2026',
      status: 'ready',
      location: 'Абонемент, окно 3'
    },
    {
      id: 'RES-2026-00075',
      title: 'Каталог инкунабулов РГБ',
      author: 'Под ред. А.А. Говорова',
      inventory: 'Г901234',
      reserveDate: '28.02.2026',
      readyDate: '10.03.2026',
      status: 'in_progress',
      location: 'Хранение'
    },
  ];

  // Бронь читальных залов
  const hallReservations = [
    {
      id: 'HALL-2026-00234',
      hall: 'Зал 3 (Гуманитарный)',
      seat: 'Место 45',
      date: '05.03.2026',
      time: '10:00 - 19:00',
      status: 'active',
      purpose: 'Работа с документами'
    },
    {
      id: 'HALL-2026-00220',
      hall: 'Зал 2 (Справочный)',
      seat: 'Место 12',
      date: '03.03.2026',
      time: '10:00 - 19:00',
      status: 'completed',
      purpose: 'Научная работа'
    },
  ];

  // Доступные залы для брони
  const availableHalls = [
    { id: 1, name: 'Зал 1 (Основной)', seats: 120, free: 45, computers: 20 },
    { id: 2, name: 'Зал 2 (Справочный)', seats: 80, free: 32, computers: 15 },
    { id: 3, name: 'Зал 3 (Гуманитарный)', seats: 100, free: 28, computers: 25 },
    { id: 4, name: 'Зал 4 (Искусство)', seats: 60, free: 51, computers: 10 },
  ];

  return (
    <div className="library-page">
      <h1 className="page-title">📚 Библиотечные функции</h1>

      {/* Табы */}
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'abonement' ? 'active' : ''}`}
          onClick={() => setActiveTab('abonement')}
        >
          Внутренний абонемент
        </button>
        <button 
          className={`tab ${activeTab === 'halls' ? 'active' : ''}`}
          onClick={() => setActiveTab('halls')}
        >
          Читальные залы
        </button>
      </div>

      {/* КОНТЕНТ: ВНУТРЕННИЙ АБОНЕМЕНТ */}
      {activeTab === 'abonement' && (
        <div className="abonement-content">
          
          {/* Сводка */}
          <div className="summary-cards">
            <div className="summary-card">
              <div className="summary-icon">📖</div>
              <div className="summary-info">
                <div className="summary-label">На руках</div>
                <div className="summary-value">{booksOnHand.length} книги</div>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🔖</div>
              <div className="summary-info">
                <div className="summary-label">Забронировано</div>
                <div className="summary-value">{reservedBooks.length} книги</div>
              </div>
            </div>
            <div className="summary-card warning">
              <div className="summary-icon">⚠️</div>
              <div className="summary-info">
                <div className="summary-label">Просрочено</div>
                <div className="summary-value">
                  {booksOnHand.filter(b => b.status === 'overdue').length} книги
                </div>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">✅</div>
              <div className="summary-info">
                <div className="summary-label">Готово к выдаче</div>
                <div className="summary-value">
                  {reservedBooks.filter(b => b.status === 'ready').length} книги
                </div>
              </div>
            </div>
          </div>

          {/* Книги на руках */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">Книги на руках</h2>
              <button className="btn-primary-small">📥 Вернуть все</button>
            </div>
            
            <div className="table-scroll">
              <table className="library-table">
                <thead>
                  <tr>
                    <th>Название / Автор</th>
                    <th>Инв. номер</th>
                    <th>Взята</th>
                    <th>Вернуть до</th>
                    <th>Место</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {booksOnHand.map((book) => (
                    <tr key={book.id}>
                      <td>
                        <div className="book-title">{book.title}</div>
                        <div className="book-author">{book.author}</div>
                      </td>
                      <td className="mono">{book.inventory}</td>
                      <td>{book.takenDate}</td>
                      <td className={book.status === 'overdue' ? 'overdue' : ''}>
                        {book.dueDate}
                      </td>
                      <td>{book.location}</td>
                      <td>
                        <span className={`badge ${book.status}`}>
                          {book.status === 'active' && 'На руках'}
                          {book.status === 'overdue' && 'Просрочено'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Забронированные книги */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">Забронированные книги</h2>
              <button className="btn-primary-small">➕ Забронировать</button>
            </div>
            
            <div className="table-scroll">
              <table className="library-table">
                <thead>
                  <tr>
                    <th>Название / Автор</th>
                    <th>Инв. номер</th>
                    <th>Заказ от</th>
                    <th>Готов к</th>
                    <th>Где получить</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {reservedBooks.map((book) => (
                    <tr key={book.id}>
                      <td>
                        <div className="book-title">{book.title}</div>
                        <div className="book-author">{book.author}</div>
                      </td>
                      <td className="mono">{book.inventory}</td>
                      <td>{book.reserveDate}</td>
                      <td>{book.readyDate}</td>
                      <td>{book.location}</td>
                      <td>
                        <span className={`badge ${book.status}`}>
                          {book.status === 'ready' && 'Готово'}
                          {book.status === 'in_progress' && 'В работе'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* КОНТЕНТ: ЧИТАЛЬНЫЕ ЗАЛЫ */}
      {activeTab === 'halls' && (
        <div className="halls-content">
          
          {/* Доступные залы */}
          <div className="halls-grid">
            <h2 className="section-title">Доступные залы</h2>
            <div className="halls-cards">
              {availableHalls.map((hall) => (
                <div key={hall.id} className="hall-card">
                  <div className="hall-header">
                    <h3 className="hall-name">{hall.name}</h3>
                    <span className={`hall-status ${hall.free > 30 ? 'good' : hall.free > 10 ? 'medium' : 'low'}`}>
                      {hall.free} мест свободно
                    </span>
                  </div>
                  <div className="hall-info">
                    <div className="hall-stat">
                      <span className="stat-label">Всего мест:</span>
                      <span className="stat-value">{hall.seats}</span>
                    </div>
                    <div className="hall-stat">
                      <span className="stat-label">Компьютеры:</span>
                      <span className="stat-value">{hall.computers}</span>
                    </div>
                  </div>
                  <div className="hall-progress">
                    <div 
                      className="progress-bar" 
                      style={{ 
                        width: `${(hall.free / hall.seats) * 100}%`,
                        backgroundColor: hall.free > 30 ? '#10b981' : hall.free > 10 ? '#f59e0b' : '#ef4444'
                      }}
                    ></div>
                  </div>
                  <button className="btn-reserve">Забронировать место</button>
                </div>
              ))}
            </div>
          </div>

          {/* Мои бронирования */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">Мои бронирования залов</h2>
              <button className="btn-primary-small">➕ Забронировать</button>
            </div>
            
            <div className="table-scroll">
              <table className="library-table">
                <thead>
                  <tr>
                    <th>Зал</th>
                    <th>Место</th>
                    <th>Дата</th>
                    <th>Время</th>
                    <th>Цель</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {hallReservations.map((res) => (
                    <tr key={res.id}>
                      <td className="font-bold">{res.hall}</td>
                      <td>{res.seat}</td>
                      <td>{res.date}</td>
                      <td>{res.time}</td>
                      <td>{res.purpose}</td>
                      <td>
                        <span className={`badge ${res.status}`}>
                          {res.status === 'active' && 'Активно'}
                          {res.status === 'completed' && 'Завершено'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Library;