import React, { useState } from 'react';
import './Vacation.css';

const Vacation = () => {
  // Данные сотрудника
  const employeeData = {
    hireDate: '10.03.2015',
    workExperience: '10 лет 11 месяцев',
  };

  // Баланс отпусков по типам
  const vacationBalance = {
    main: {
      total: 28, // Всего положено в год
      used: 14,  // Использовано
      planned: 14, // Запланировано
      remaining: 0, // Остаток
    },
    seniority: {
      total: 2, // За стаж (10+ лет)
      used: 0,
      planned: 2,
      remaining: 0,
    },
    study: {
      total: 30, // Учебный (в днях за год)
      used: 0,
      planned: 0,
      remaining: 30,
    },
    unpaid: {
      
      used: 5,
    
      remaining: 5,
    },
  };

  // Запланированные отпуска
  const plannedVacations = [
    { 
      id: 1, 
      type: 'main', 
      typeName: 'Основной отпуск', 
      startDate: '10.06.2026', 
      endDate: '24.06.2026', 
      days: 14, 
      status: 'approved' 
    },
    { 
      id: 2, 
      type: 'seniority', 
      typeName: 'Дополнительный (за стаж)', 
      startDate: '15.09.2026', 
      endDate: '16.09.2026', 
      days: 2, 
      status: 'planned' 
    },
  ];

  // Использованные отпуска (в этом году)
  const usedVacations = [
    { 
      id: 1, 
      type: 'main', 
      typeName: 'Основной отпуск', 
      startDate: '15.01.2026', 
      endDate: '29.01.2026', 
      days: 14, 
      status: 'completed' 
    },
  ];

  // Стаж и дополнительные дни
  const seniorityBenefits = {
    years: 10,
    additionalDays: 2,
    nextMilestone: 15,
    nextAdditionalDays: 3,
    description: 'За стаж работы более 10 лет положено 2 дополнительных дня',
  };

  // Отпуска за свой счет
  const unpaidLeaves = [
    { 
      id: 1, 
      startDate: '20.02.2026', 
      endDate: '21.02.2026', 
      days: 2, 
      reason: 'По семейным обстоятельствам', 
      status: 'approved' 
    },
    { 
      id: 2, 
      startDate: '15.01.2026', 
      endDate: '15.01.2026', 
      days: 1, 
      reason: 'По семейным обстоятельствам', 
      status: 'approved' 
    },
  ];

  // Отгулы и переработки
  const timeOff = {
    overtime: 16,
    compensatoryDays: 2,
  };

  const [activeTab, setActiveTab] = useState('balance');
  const [showForm, setShowForm] = useState(false);

  return (
       <div className="vacation-page">
    {/* Заголовок по центру */}
    <h1 className="page-title">📅 Отпуска</h1>
    
    {/* Кнопка оформить отпуск слева */}
    <div className="vacation-button-wrapper">
      <button className="btn-vacation-primary" onClick={() => alert('Открыть форму заявления на отпуск')}>
        <span className="btn-icon">✈️</span>
        <span>Оформить отпуск</span>
      </button>
    </div>
    </div>
  )
}
// Компонент формы заявления
const VacationForm = ({ onClose }) => {
  const [vacationType, setVacationType] = useState('main');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Заявление на отпуск</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <div className="form-group">
            <label>Тип отпуска</label>
            <select 
              value={vacationType} 
              onChange={(e) => setVacationType(e.target.value)}
              className="form-select"
            >
              <option value="main">Основной отпуск (28 дней)</option>
              <option value="seniority">Дополнительный за стаж (2 дня)</option>
              <option value="study">Учебный отпуск (до 30 дней)</option>
              <option value="unpaid">За свой счет</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Дата начала</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-group">
              <label>Дата окончания</label>
              <input type="date" className="form-input" />
            </div>
          </div>

          <div className="form-group">
            <label>Количество дней</label>
            <input type="number" className="form-input" placeholder="14" />
          </div>

          {vacationType === 'unpaid' && (
            <div className="form-group">
              <label>Причина</label>
              <textarea 
                className="form-textarea" 
                placeholder="По семейным обстоятельствам..."
                rows="3"
              ></textarea>
            </div>
          )}

          {vacationType === 'study' && (
            <div className="form-group">
              <label>Приложение</label>
              <input type="file" className="form-input" />
              <div className="form-hint">Вызов-справка из учебного заведения</div>
            </div>
          )}

          <div className="form-group">
            <label>Комментарий</label>
            <textarea 
              className="form-textarea" 
              placeholder="Дополнительная информация..."
              rows="2"
            ></textarea>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Отмена</button>
          <button className="btn-primary">Подать заявление</button>
        </div>
      </div>
    </div>
  );
};

// Компонент статуса
const StatusBadge = ({ status }) => {
  const statuses = {
    approved: { text: 'Утверждено', color: '#10b981', bg: '#d1fae5' },
    planned: { text: 'Запланировано', color: '#3b82f6', bg: '#dbeafe' },
    pending: { text: 'На согласовании', color: '#f59e0b', bg: '#fef3c7' },
    completed: { text: 'Завершено', color: '#10b981', bg: '#d1fae5' },
    rejected: { text: 'Отклонено', color: '#ef4444', bg: '#fee2e2' },
  };

  const statusInfo = statuses[status] || statuses.pending;

  return (
    <span 
      className="status-badge"
      style={{ backgroundColor: statusInfo.bg, color: statusInfo.color }}
    >
      {statusInfo.text}
    </span>
  );
};

export default Vacation;