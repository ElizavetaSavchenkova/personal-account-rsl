import React, { useState } from 'react';
import './Accounting.css';

const Accounting = () => {
  // Данные сотрудника
  const salaryData = {
    nextPaymentDate: '31.03.2026',
    nextPaymentAmount: '70 000 тыс. руб.',
    lastSalary: '75 000 ₽',
    lastAdvance: '25 000 ₽',
    vacationDaysLeft: 28,
    sickLeaveBalance: '5 дней оплачено',
  };

  // Материальная помощь
  const materialHelp = {
    available: true,
    used: false,
    amount: '15 000 тыс. руб.',
    description: 'Единовременная материальная помощь',
  };

  // KPI баллы
  const kpiData = {
    currentPoints: 100,
    maxPoints: 100,
    period: 'Март 2026',
  };

  // Расчетные листки
  const payStubs = [
    { month: 'Февраль 2026', date: '28.02.2026', salary: '75 000 ₽', advance: '25 000 ₽', bonus: '10 000 ₽', total: '110 000 ₽', status: 'paid' },
    { month: 'Январь 2026', date: '31.01.2026', salary: '75 000 ₽', advance: '25 000 ₽', bonus: '0 ₽', total: '100 000 ₽', status: 'paid' },
    { month: 'Декабрь 2025', date: '31.12.2025', salary: '75 000 ₽', advance: '25 000 ₽', bonus: '50 000 ₽', total: '150 000 ₽', status: 'paid' },
    { month: 'Ноябрь 2025', date: '30.11.2025', salary: '75 000 ₽', advance: '25 000 ₽', bonus: '0 ₽', total: '100 000 ₽', status: 'paid' },
    { month: 'Октябрь 2025', date: '31.10.2025', salary: '75 000 ₽', advance: '25 000 ₽', bonus: '0 ₽', total: '100 000 ₽', status: 'paid' },
    { month: 'Сентябрь 2025', date: '30.09.2025', salary: '75 000 ₽', advance: '25 000 ₽', bonus: '0 ₽', total: '100 000 ₽', status: 'paid' },
  ];

  // Справки
  const certificates = [
    { type: '2-НДФЛ', year: '2025', status: 'ready', date: '01.01.2026' },
    { type: '2-НДФЛ', year: '2024', status: 'ready', date: '01.01.2025' },
    { type: '3-НДФЛ', year: '2025', status: 'ready', date: '01.01.2026' },
    { type: 'Справка с места работы', year: '2026', status: 'ready', date: '04.03.2026' },
    { type: 'Справка о доходах', year: '2026', status: 'ready', date: '04.03.2026' },
  ];

  // Больничные
  const sickLeaves = [
    { id: 'БЛ-2026-001', period: '15.01.2026 — 22.01.2026', days: 8, amount: '18 400 ₽', status: 'paid' },
    { id: 'БЛ-2025-012', period: '10.11.2025 — 17.11.2025', days: 8, amount: '17 200 ₽', status: 'paid' },
    { id: 'БЛ-2025-008', period: '05.06.2025 — 10.06.2025', days: 6, amount: '12 900 ₽', status: 'paid' },
  ];

  // Компенсации
  //const compensations = [
    //{ type: 'Питание', amount: '5 000 ₽/мес', status: 'active' },
   // { type: 'Транспорт', amount: '3 000 ₽/мес', status: 'active' },
   // { type: 'ДМС', amount: 'Полный пакет', status: 'active' },
   // { type: 'Обучение', amount: 'до 50 000 ₽/год', status: 'active' },
  //];

  const [activeTab, setActiveTab] = useState('salary');

  return (
    <div className="accounting">
      <h1 className="page-title">Финансы</h1>

  

      {/* Табы */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'salary' ? 'active' : ''}`}
          onClick={() => setActiveTab('salary')}
        >
          Расчетные листки
        </button>

       
      </div>

      {/* Контент табов */}
      <div className="tab-content">
        
        {/* Расчетные листки */}
        {activeTab === 'salary' && (
          <div className="pay-stubs">
            <div className="table-header">
              <h3>История выплат</h3>
              <button className="btn-primary">📥 Скачать все</button>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Период</th>
                  <th>Дата</th>
                  <th>Оклад</th>
                  <th>Аванс</th>
                  <th>Премия</th>
                  <th>Итого</th>
                  <th>Статус</th>
                  <th>Действие</th>
                </tr>
              </thead>
              <tbody>
                {payStubs.map((stub, index) => (
                  <tr key={index}>
                    <td className="font-medium">{stub.month}</td>
                    <td>{stub.date}</td>
                    <td>{stub.salary}</td>
                    <td>{stub.advance}</td>
                    <td>{stub.bonus}</td>
                    <td className="font-bold">{stub.total}</td>
                    <td><StatusBadge status={stub.status} /></td>
                    <td>
                      <button className="btn-icon" title="Скачать">📥</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Справки */}
        {activeTab === 'certificates' && (
          <div className="certificates">
            <div className="table-header">
              <h3>Доступные справки</h3>
              <button className="btn-primary">📝 Заказать новую</button>
            </div>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-card">
                  <div className="certificate-icon">📄</div>
                  <div className="certificate-info">
                    <div className="certificate-type">{cert.type}</div>
                    <div className="certificate-year">{cert.year} год</div>
                    <div className="certificate-date">от {cert.date}</div>
                  </div>
                  <StatusBadge status={cert.status} small />
                  <button className="btn-download">⬇️</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Больничные */}
        {activeTab === 'sick' && (
          <div className="sick-leaves">
            <div className="table-header">
              <h3>История больничных</h3>
              <button className="btn-primary">🏥 Открыть больничный</button>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Номер</th>
                  <th>Период</th>
                  <th>Дней</th>
                  <th>Сумма</th>
                  <th>Статус</th>
                  <th>Действие</th>
                </tr>
              </thead>
              <tbody>
                {sickLeaves.map((sick, index) => (
                  <tr key={index}>
                    <td className="font-medium">{sick.id}</td>
                    <td>{sick.period}</td>
                    <td>{sick.days} дн.</td>
                    <td className="font-bold">{sick.amount}</td>
                    <td><StatusBadge status={sick.status} /></td>
                    <td>
                      <button className="btn-icon" title="Скачать">📥</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}


      </div>
    </div>
  );
};

// Компонент статуса
const StatusBadge = ({ status, small = false }) => {
  const statuses = {
    paid: { text: 'Выплачено', color: '#10b981', bg: '#d1fae5' },
    ready: { text: 'Готово', color: '#10b981', bg: '#d1fae5' },
    active: { text: 'Активно', color: '#3b82f6', bg: '#dbeafe' },
    pending: { text: 'В обработке', color: '#f59e0b', bg: '#fef3c7' },
    cancelled: { text: 'Отменено', color: '#6b7280', bg: '#f2f3f7' },
  };

  const statusInfo = statuses[status] || statuses.pending;

  return (
    <span 
      className={`status-badge ${small ? 'small' : ''}`}
      style={{ backgroundColor: statusInfo.bg, color: statusInfo.color }}
    >
      {statusInfo.text}
    </span>
  );
};

export default Accounting;