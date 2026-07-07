import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = () => {
  // Данные сотрудника (потом придут из API)
  const employee = {
    // Личные данные
    fullName: 'Иванов Иван Иванович',
    birthDate: '15.04.1985',
    snils: '123-456-789 01',
    inn: '770123456789',
    
    // Рабочая информация
    employeeId: '0012345',
    department: 'Отдел комплектования фондов',
    position: 'Ведущий библиограф',
    hireDate: '10.03.2015',
    workExperience: '8 лет 10 месяцев',
    employmentType: 'Основное место работы',
    schedule: 'Полная занятность, 40 часов в неделю',
    
    // Руководитель
    manager: {
      name: 'Петрова Мария Сергеевна',
      position: 'Начальник отдела комплектования',
      phone: 'доб. 1234',
      email: 'petrova.ms@rsl.ru'
    },
    
    // Контакты
    workPhone: 'доб. 5678',
    workEmail: 'ivanov.ii@rsl.ru',
    personalEmail: 'ivanov.ii@mail.ru',
    mobilePhone: '+7 (916) 123-45-67',
    address: 'г. Москва, ул. Примерная, д. 10, кв. 50',
    
    // Статус
    status: 'active', // active, vacation, sick, remote
    lastVisit: '04.03.2026 в 09:15',
    
    // Фото (заглушка)
    photo: null
  };

  const getStatusInfo = (status) => {
    const statuses = {
      active: { text: 'Активен', color: '#10b981', bg: '#d1fae5' },
      vacation: { text: 'В отпуске', color: '#f59e0b', bg: '#fef3c7' },
      sick: { text: 'На больничном', color: '#ef4444', bg: '#fee2e2' },
      remote: { text: 'Удалённая работа', color: '#3b82f6', bg: '#dbeafe' }
    };
    return statuses[status] || statuses.active;
  };

  const statusInfo = getStatusInfo(employee.status);

  return (
    <div className="personal-info">
      <h1 className="page-title">Личная информация</h1>

      {/* Шапка с фото и статусом */}
      <div className="profile-header">
        <div className="profile-avatar">
          {employee.photo ? (
            <img src={employee.photo} alt={employee.fullName} />
          ) : (
            <div className="avatar-placeholder">
              {employee.fullName.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        
        <div className="profile-main-info">
          <h2 className="profile-name">{employee.fullName}</h2>
          <div className="profile-position">{employee.position}</div>
          <div className="profile-department">{employee.department}</div>
          
          <div className="profile-status" style={{ 
            backgroundColor: statusInfo.bg, 
            color: statusInfo.color 
          }}>
            <span className="status-indicator"></span>
            {statusInfo.text}
          </div>
          
          <div className="profile-meta">
            <span>🕐 Последнее посещение: {employee.lastVisit}</span>
          </div>
        </div>
      </div>

      {/* Сетка карточек с информацией */}
      <div className="info-grid">
        
        {/* Личные данные */}
        <div className="info-card">
          <h3 className="card-title">👤 Личные данные</h3>
          <div className="card-content">
            <InfoRow label="ФИО" value={employee.fullName} />
            <InfoRow label="Дата рождения" value={employee.birthDate} />
          </div>
        </div>

        {/* Рабочая информация */}
        <div className="info-card">
          <h3 className="card-title">💼 Рабочая информация</h3>
          <div className="card-content">
            <InfoRow label="Табельный номер" value={employee.employeeId} copyable />
            <InfoRow label="Отдел" value={employee.department} />
            <InfoRow label="Должность" value={employee.position} />
            <InfoRow label="Дата приёма" value={employee.hireDate} />
            <InfoRow label="Стаж работы" value={employee.workExperience} />
            <InfoRow label="Тип занятости" value={employee.employmentType} />
            <InfoRow label="График" value={employee.schedule} />
          </div>
        </div>

        {/* Контакты */}
        <div className="info-card">
          <h3 className="card-title">📞 Контактная информация</h3>
          <div className="card-content">
            <InfoRow label="Рабочий телефон" value={employee.workPhone} copyable />
            <InfoRow label="Рабочий email" value={employee.workEmail} copyable />
            <InfoRow label="Личный email" value={employee.personalEmail} copyable />
            <InfoRow label="Мобильный телефон" value={employee.mobilePhone} copyable />
            <InfoRow label="Адрес" value={employee.address} />
          </div>
        </div>

        {/* Руководитель */}
        <div className="info-card">
          <h3 className="card-title">👔 Руководитель</h3>
          <div className="card-content">
            <InfoRow label="ФИО" value={employee.manager.name} />
            <InfoRow label="Должность" value={employee.manager.position} />
            <InfoRow label="Телефон" value={employee.manager.phone} copyable />
            <InfoRow label="Email" value={employee.manager.email} copyable />
          </div>
          <div className="card-actions">
            <button className="btn-contact">📧 Написать</button>
            
          </div>
        </div>

        {/* Документы */}
        <div className="info-card">
          <h3 className="card-title">📄 Документы</h3>
          <div className="documents-list">
            <DocumentItem 
              icon="📋"
              name="Трудовой договор"
              date="10.03.2015"
              size="2.4 MB"
            />
            <DocumentItem 
              icon="📝"
              name="Должностная инструкция"
              date="15.03.2015"
              size="1.1 MB"
            />
            <DocumentItem 
              icon="🎓"
              name="Дополнительное соглашение к трудовому договору"
              date="20.06.2007"
              size="3.8 MB"
            />
            <DocumentItem 
              icon=""
              name="Карта KPI"
              date="10.03.2015"
              size="1.5 MB"
            />
          </div>
          <button className="btn-secondary">📥 Все документы</button>
        </div>

        {/* Действия */}
        <div className="info-card">
          <h3 className="card-title">⚙️ Действия</h3>
          <div className="actions-list">
            <ActionButton 
              icon="✏️"
              text="Редактировать личные данные"
              description="Изменить контактную информацию"
            />
            <ActionButton 
              icon="🔐"
              text="Сменить пароль"
              description="Обновить пароль от личного кабинета"
            />
            <ActionButton 
              icon="🔔"
              text="Настроить уведомления"
              description="Email, SMS, push-уведомления"
            />
            <ActionButton 
              icon="📤"
              text="Скачать профиль"
              description="PDF с личной информацией"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

// Компонент строки с информацией
const InfoRow = ({ label, value, copyable }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    // Можно добавить уведомление "Скопировано"
  };

  return (
    <div className="info-row">
      <div className="info-label">{label}</div>
      <div className="info-value">
        {value}
        {copyable && (
          <button className="copy-btn" onClick={handleCopy} title="Копировать">
            📋
          </button>
        )}
      </div>
    </div>
  );
};

// Компонент документа
const DocumentItem = ({ icon, name, date, size }) => (
  <div className="document-item">
    <div className="document-icon">{icon}</div>
    <div className="document-info">
      <div className="document-name">{name}</div>
      <div className="document-meta">{date} • {size}</div>
    </div>
    <button className="document-download">⬇️</button>
  </div>
);

// Компонент действия
const ActionButton = ({ icon, text, description }) => (
  <button className="action-button">
    <div className="action-icon">{icon}</div>
    <div className="action-info">
      <div className="action-text">{text}</div>
      <div className="action-description">{description}</div>
    </div>
  </button>
);

export default PersonalInfo;