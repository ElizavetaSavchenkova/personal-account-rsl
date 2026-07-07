import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('available');

  const certificates = [
    {
      id: 1,
      type: '2-НДФЛ',
      year: '2025',
      status: 'ready',
      date: '01.01.2026',
      description: 'Справка о доходах физического лица'
    },
    {
      id: 2,
      type: '2-НДФЛ',
      year: '2024',
      status: 'ready',
      date: '01.01.2025',
      description: 'Справка о доходах физического лица'
    },
    {
      id: 3,
      type: '3-НДФЛ',
      year: '2025',
      status: 'ready',
      date: '01.01.2026',
      description: 'Налоговая декларация'
    },
    {
      id: 4,
      type: 'Справка с места работы',
      year: '2026',
      status: 'ready',
      date: '04.03.2026',
      description: 'Подтверждение трудоустройства в РГБ'
    },
    {
      id: 5,
      type: 'Справка о доходах',
      year: '2026',
      status: 'ready',
      date: '04.03.2026',
      description: 'Для предоставления в банк'
    },
  ];

  const requestCertificate = (type) => {
    alert(`Заказ справки: ${type}`);
  };

  return (
    <div className="certificates-page">
      <h1 className="page-title">📄 Справки</h1>

      {/* Сводка */}
      <div className="certificates-summary">
        <div className="summary-card">
          <div className="summary-icon">📋</div>
          <div className="summary-info">
            <div className="summary-label">Доступно справок</div>
            <div className="summary-value">{certificates.length}</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">⏳</div>
          <div className="summary-info">
            <div className="summary-label">В обработке</div>
            <div className="summary-value">0</div>
          </div>
        </div>
      </div>

      {/* Табы */}
      <div className="tabs-container">
         <button 
          className={`tab ${activeTab === 'request' ? 'active' : ''}`}
          onClick={() => setActiveTab('request')}
        >
          Заказать справку
        </button>
        
        <button 
          className={`tab ${activeTab === 'available' ? 'active' : ''}`}
          onClick={() => setActiveTab('available')}
        >
          Доступные справки
        </button>
       
      </div>

      {/* ЗАКАЗАТЬ СПРАВКУ */}
      {activeTab === 'request' && (
        <div className="request-section">
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">Заказать новую справку</h2>
            </div>
            
            <div className="request-form">
              <div className="form-group">
                <label>Тип справки *</label>
                <select className="form-select">
                  <option value="">Выберите тип справки</option>
                  <option value="2ndfl">2-НДФЛ (о доходах)</option>
                  <option value="3ndfl">3-НДФЛ (налоговая декларация)</option>
                  <option value="work">Справка с места работы</option>
                  <option value="income">Справка о доходах (для банка)</option>
                  <option value="average">Справка о среднем заработке</option>
                  <option value="other">Другая справка</option>
                </select>
              </div>

              <div className="form-group">
                <label>Период</label>
                <select className="form-select">
                  <option value="2026">2026 год</option>
                  <option value="2025">2025 год</option>
                  <option value="2024">2024 год</option>
                </select>
              </div>

              <div className="form-group">
                <label>Цель получения</label>
                <input type="text" className="form-input" placeholder="Например: для визы, для банка..." />
              </div>

              <div className="form-group">
                <label>Дополнительные пожелания</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Количество копий, особые требования..."
                  rows="3"
                ></textarea>
              </div>

             

              <div className="form-actions">
                <button className="btn-secondary">Отмена</button>
                <button className="btn-primary" onClick={() => alert('Заявка на справку отправлена!')}>
                  Заказать справку
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ДОСТУПНЫЕ СПРАВКИ */}
      {activeTab === 'available' && (
        <div className="certificates-list">
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">Мои справки</h2>
              <button className="btn-primary-small">📥 Скачать все</button>
            </div>
            
            <div className="table-scroll">
              <table className="certificates-table">
                <thead>
                  <tr>
                    <th>Тип справки</th>
                    <th>Период</th>
                    <th>Дата выдачи</th>
                    <th>Описание</th>
                    <th>Статус</th>
                    <th>Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates.map((cert) => (
                    <tr key={cert.id}>
                      <td>
                        <div className="cert-type">{cert.type}</div>
                      </td>
                      <td>{cert.year} год</td>
                      <td>{cert.date}</td>
                      <td className="cert-description">{cert.description}</td>
                      <td>
                        <span className={`badge ${cert.status}`}>
                          {cert.status === 'ready' && '✓ Готово'}
                        </span>
                      </td>
                      <td>
                        <button className="btn-download">📥 Скачать</button>
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

export default Certificates;