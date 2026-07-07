import React, { useState } from 'react';
import './BusinessTrips.css';

const BusinessTrips = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Статистика
  const stats = {
    total: 12,
    upcoming: 2,
    thisYear: 5,
  };

  // Командировки
  const trips = [
    {
      id: 1,
      destination: 'Санкт-Петербург',
      purpose: 'Участие в конференции "Библиотеки будущего"',
      startDate: '15.04.2026',
      endDate: '18.04.2026',
      days: 4,
      status: 'approved',
      orderDate: '01.03.2026'
    },
    {
      id: 2,
      destination: 'Казань',
      purpose: 'Обмен опытом с Национальной библиотекой РТ',
      startDate: '20.05.2026',
      endDate: '24.05.2026',
      days: 5,
      status: 'planned',
      orderDate: '15.03.2026'
    },
    {
      id: 3,
      destination: 'Новосибирск',
      purpose: 'Проверка филиала РГБ',
      startDate: '10.02.2026',
      endDate: '14.02.2026',
      days: 5,
      status: 'completed',
      orderDate: '15.01.2026'
    },
    {
      id: 4,
      destination: 'Екатеринбург',
      purpose: 'Участие в выставке',
      startDate: '05.01.2026',
      endDate: '08.01.2026',
      days: 4,
      status: 'completed',
      orderDate: '10.12.2025'
    },
    {
      id: 5,
      destination: 'Москва (область)',
      purpose: 'Согласование документов в архиве',
      startDate: '15.12.2025',
      endDate: '15.12.2025',
      days: 1,
      status: 'completed',
      orderDate: '01.12.2025'
    },
  ];

  const filteredTrips = activeTab === 'all' 
    ? trips 
    : trips.filter(t => t.status === activeTab);

  return (
    <div className="trips-page">
      {/* Заголовок и кнопка */}
      <h1 className="page-title">✈️ Командировки</h1>
      
      <div className="trips-button-wrapper">
        <button className="btn-trips-primary" onClick={() => alert('Открыть форму оформления командировки')}>
          <span className="btn-icon">📝</span>
          <span>Оформить командировку</span>
        </button>
      </div>

      {/* Статистика */}
      <div className="trips-stats">
  <div className="stat-card">
    <div className="stat-icon">📊</div>
    <div className="stat-info">
      <div className="stat-label">Всего командировок</div>
      <div className="stat-value">{stats.total}</div>
    </div>
  </div>
  
  <div className="stat-card upcoming">
    <div className="stat-icon">📆</div>  {/* Было 🔜, стало 📆 */}
    <div className="stat-info">
      <div className="stat-label">Предстоит</div>
      <div className="stat-value">{stats.upcoming}</div>
    </div>
  </div>
  
  <div className="stat-card this-year">
    <div className="stat-icon">📅</div>
    <div className="stat-info">
      <div className="stat-label">В этом году</div>
      <div className="stat-value">{stats.thisYear}</div>
    </div>
  </div>
</div>

      {/* Табы */}
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Все
        </button>
        <button 
          className={`tab ${activeTab === 'planned' ? 'active' : ''}`}
          onClick={() => setActiveTab('planned')}
        >
          Запланированные
        </button>
        <button 
          className={`tab ${activeTab === 'approved' ? 'active' : ''}`}
          onClick={() => setActiveTab('approved')}
        >
          Согласованные
        </button>
        <button 
          className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Завершённые
        </button>
      </div>

      {/* Таблица */}
      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="trips-table">
            <thead>
              <tr>
                <th>Место</th>
                <th>Цель</th>
                <th>Дата начала</th>
                <th>Дата окончания</th>
                <th>Дней</th>
                <th>Дата приказа</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrips.map((trip) => (
                <tr key={trip.id}>
                  <td className="font-bold">{trip.destination}</td>
                  <td className="trip-purpose">{trip.purpose}</td>
                  <td>{trip.startDate}</td>
                  <td>{trip.endDate}</td>
                  <td className="days-count">{trip.days} дн.</td>
                  <td>{trip.orderDate}</td>
                  <td>
                    <span className={`status-badge status-${trip.status}`}>
                      {trip.status === 'planned' && 'Запланирована'}
                      {trip.status === 'approved' && 'Согласована'}
                      {trip.status === 'completed' && 'Завершена'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredTrips.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <div className="empty-text">Командировки не найдены</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessTrips;