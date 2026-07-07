import React, { useState } from 'react';
import './Requests.css';

const Requests = () => {
  const categories = [
    { id: 'all', name: 'Все заявки' },
    { id: 'it', name: 'IT-поддержка' },
    { id: 'access', name: 'Пропуска' },
    { id: 'equipment', name: 'Оборудование' },
    { id: 'documents', name: 'Документы' },
    { id: 'business', name: 'Командировки' },
    { id: 'library', name: 'Библиотека' },
      { id: 'ecp', name: 'ЭЦП' },
  ];

  const myRequests = [
    {
      id: 'REQ-2026-00142',
      type: 'Неисправность компьютера',
      description: 'Не включается монитор на рабочем месте',
      dueDate: '05.03.2026',
      executor: 'IT-отдел',
      created: '03.03.2026',
      priority: 'high',
      status: 'in_progress'
    },
    {
      id: 'REQ-2026-00138',
      type: 'Продление пропуска',
      description: 'Продление пропуска до конца года',
      dueDate: '10.03.2026',
      executor: 'Отдел безопасности',
      created: '01.03.2026',
      priority: 'medium',
      status: 'approved'
    },
    {
      id: 'REQ-2026-00125',
      type: 'Справка 2-НДФЛ',
      description: 'Справка за 2025 год',
      dueDate: '28.02.2026',
      executor: 'Бухгалтерия',
      created: '25.02.2026',
      priority: 'low',
      status: 'completed'
    },
    {
      id: 'REQ-2026-00118',
      type: 'Канцелярия',
      description: 'Ручки, бумага А4, папки',
      dueDate: '25.02.2026',
      executor: 'АХО',
      created: '20.02.2026',
      priority: 'low',
      status: 'completed'
    },
  ];

  const [activeTab, setActiveTab] = useState('current');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="requests-page">
      {/* Заголовок страницы */}
      <h1 className="page-title"> Мои заявки</h1>

      {/* Табы */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Текущие
        </button>
        <button
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Все
        </button>
      </div>

      {/* Фильтры */}
      <div className="filters-container">
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-filter ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Поиск по заявкам..."
            className="search-input"
          />
        </div>
      </div>

      {/* Контейнер с таблицей */}
      <div className="table-wrapper desktop-view">
        <div className="table-header">
          <h2 className="table-section-title">История заявок</h2>
        </div>
        <div className="table-responsive">
          <table className="requests-table">
            <thead>
              <tr>
                <th>НАЗВАНИЕ / ТИП</th>
                <th>СДЕЛАТЬ ДО</th>
                <th>ИСПОЛНИТЕЛЬ</th>
                <th>ДАТА СОЗДАНИЯ</th>
                <th>ПРИОРИТЕТ</th>
                <th>СТАТУС</th>
              </tr>
            </thead>
            <tbody>
              {myRequests.map((request) => (
                <tr key={request.id}>
                  <td>
                    <div className="request-title">{request.type}</div>
                    <div className="request-desc">{request.description}</div>
                  </td>
                  <td>{request.dueDate}</td>
                  <td>{request.executor}</td>
                  <td>{request.created}</td>
                  <td>
                    <span className={`badge priority-${request.priority}`}>
                      {request.priority === 'high' && 'Высокий'}
                      {request.priority === 'medium' && 'Средний'}
                      {request.priority === 'low' && 'Низкий'}
                    </span>
                  </td>
                  <td>
                    <span className={`badge status-${request.status}`}>
                      {request.status === 'in_progress' && 'В работе'}
                      {request.status === 'approved' && 'Согласовано'}
                      {request.status === 'completed' && 'Выполнено'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Карточки для узких экранов */}
<div className="cards-wrapper cards-view">
  {myRequests.map((request) => (
    <div key={request.id} className="request-card">
      <div className="request-card-header">
        <div className="request-card-title">{request.type}</div>
        <span className={`badge priority-${request.priority}`}>
          {request.priority === 'high' && 'Высокий'}
          {request.priority === 'medium' && 'Средний'}
          {request.priority === 'low' && 'Низкий'}
        </span>
      </div>
      <div className="request-card-desc">{request.description}</div>
      <div className="request-card-row">
        <span className="request-card-label">Сделать до</span>
        <span>{request.dueDate}</span>
      </div>
      <div className="request-card-row">
        <span className="request-card-label">Исполнитель</span>
        <span>{request.executor}</span>
      </div>
      <div className="request-card-row">
        <span className="request-card-label">Создана</span>
        <span>{request.created}</span>
      </div>
      <div className="request-card-footer">
        <span className={`badge status-${request.status}`}>
          {request.status === 'in_progress' && 'В работе'}
          {request.status === 'approved' && 'Согласовано'}
          {request.status === 'completed' && 'Выполнено'}
        </span>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Requests;