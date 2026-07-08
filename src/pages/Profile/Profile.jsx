import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // Данные профиля
  const profileData = {
    fullName: 'Иванов Иван Иванович',
    position: 'Ведущий библиограф',
    department: 'Отдел комплектования фондов',
    employeeId: '0012345',
    hireDate: '10.03.2015',
    birthDate: '15.04.1985',
    snils: '123-456-789 01',
    inn: '770123456789',
    email: 'ivanov.ii@rsl.ru',
    phone: '+7 (916) 123-45-67',
    workExperience: '8 лет 10 месяцев',
    employmentType: 'Основное место работы',
    schedule: 'Полная занятость, 40 часов в неделю',
    status: 'active',
    lastVisit: '04.03.2026 в 09:15',
    avatar: null,
    equipment: [
      {
        id: 1,
        type: '💻 Ноутбук',
        model: 'Apple MacBook Pro 16"',
        inventoryNumber: 'ИНВ-2024-001234',
        dateAssigned: '10.03.2024',
      
      },
      {
        id: 2,
        type: '🖥️ Монитор',
        model: 'Dell UltraSharp U2720Q',
        inventoryNumber: 'ИНВ-2024-001235',
        dateAssigned: '10.03.2024',
       
      },
      {
        id: 3,
        type: '⌨️ Клавиатура',
        model: 'Logitech MX Keys',
        inventoryNumber: 'ИНВ-2024-001236',
        dateAssigned: '15.06.2024',
       
      },
      {
        id: 4,
        type: '🖱️ Мышь',
        model: 'Logitech MX Master 3',
        inventoryNumber: 'ИНВ-2024-001237',
        dateAssigned: '15.06.2024',
       
      }
    ]
  };

  // Настройки уведомлений
  const [notifications, setNotifications] = useState({
    email: { tasks: true, requests: true, salary: true, news: false, training: true },
    push: { tasks: true, requests: true, salary: false, news: false, training: false },
    sms: { tasks: false, requests: false, salary: true, news: false, training: false }
  });

  // Активные сессии
  const sessions = [
    { id: 1, device: 'Chrome на macOS', location: 'Москва, Россия', lastActive: 'Сейчас', current: true },
    { id: 2, device: 'Safari на iPhone', location: 'Москва, Россия', lastActive: '2 часа назад', current: false },
    { id: 3, device: 'Chrome на Windows', location: 'Москва, Россия', lastActive: '5 дней назад', current: false },
  ];

  const handleToggle = (type, category) => {
    setNotifications(prev => ({
      ...prev,
      [type]: { ...prev[type], [category]: !prev[type][category] }
    }));
  };

  return (
    <div className="profile-page">
      <h1 className="page-title">⚙️ Профиль и настройки</h1>

      {/* Табы */}
      <div className="tabs-container">
        <button className={`tab ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>
          👤 Личные данные
        </button>
        <button className={`tab ${activeTab === 'equipment' ? 'active' : ''}`} onClick={() => setActiveTab('equipment')}>
          🖥️ Имущество
        </button>
        <button className={`tab ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => setActiveTab('notifications')}>
          🔔 Уведомления
        </button>
        <button className={`tab ${activeTab === 'interface' ? 'active' : ''}`} onClick={() => setActiveTab('interface')}>
          🎨 Интерфейс
        </button>
      </div>

      {/* ВКЛАДКА 1: ЛИЧНЫЕ ДАННЫЕ */}
      {activeTab === 'personal' && (
        <div className="personal-info-page">
          {/* Шапка профиля */}
          <div className="profile-header-card">
            <div className="profile-header-left">
              <div className="avatar-large">
                {profileData.avatar ? (
                  <img src={profileData.avatar} alt={profileData.fullName} />
                ) : (
                  <span>ИИИ</span>
                )}
              </div>
            </div>
            <div className="profile-header-right">
              <h2 className="profile-name">{profileData.fullName}</h2>
              <div className="profile-position">{profileData.position}</div>
              <div className="profile-department">{profileData.department}</div>
              <div className={`status-badge ${profileData.status}`}>
                <span className="status-dot"></span>
                Активен
              </div>
              <div className="last-visit">
                <span className="icon">🕐</span>
                Последнее посещение: {profileData.lastVisit}
              </div>
            </div>
          </div>

          {/* Две колонки: Личные данные + Рабочая информация */}
          <div className="info-cards-grid">
            <div className="info-card">
              <h3 className="card-title">👤 Личные данные</h3>
              <div className="info-list">
                <InfoRow label="ФИО" value={profileData.fullName} copyable />
                <InfoRow label="Дата рождения" value={profileData.birthDate} />
                <InfoRow label="СНИЛС" value={profileData.snils} copyable />
                <InfoRow label="ИНН" value={profileData.inn} copyable />
              </div>
            </div>

            <div className="info-card">
              <h3 className="card-title">💼 Рабочая информация</h3>
              <div className="info-list">
                <InfoRow label="Табельный номер" value={profileData.employeeId} copyable />
                <InfoRow label="Отдел" value={profileData.department} />
                <InfoRow label="Должность" value={profileData.position} />
                <InfoRow label="Дата приёма" value={profileData.hireDate} />
                <InfoRow label="Стаж работы" value={profileData.workExperience} />
                <InfoRow label="Тип занятости" value={profileData.employmentType} />
                <InfoRow label="График" value={profileData.schedule} />
              </div>
            </div>
          </div>

          {/* Контактная информация и Руководитель */}
          <div className="info-cards-grid">
            <div className="info-card">
              <h3 className="card-title">📞 Контактная информация</h3>
              <div className="info-list">
                <InfoRow label="Рабочий телефон" value="доб. 5678" copyable />
                <InfoRow label="Рабочий email" value={profileData.email} copyable />
                <InfoRow label="Личный email" value="ivanov.ii@mail.ru" copyable />
                <InfoRow label="Мобильный телефон" value={profileData.phone} copyable />
                <InfoRow label="Адрес" value="г. Москва, ул. Примерная, д. 10, кв. 50" full />
              </div>
            </div>

            <div className="info-card">
              <h3 className="card-title">👔 Руководитель</h3>
              <div className="info-list">
                <InfoRow label="ФИО" value="Петрова Мария Сергеевна" />
                <InfoRow label="Должность" value="Начальник отдела комплектования" />
                <InfoRow label="Телефон" value="доб. 1234" copyable />
                <InfoRow label="Email" value="petrova.ms@rsl.ru" copyable />
                <button className="btn-write-manager">✉️ Написать</button>
              </div>
            </div>
          </div>

          {/* Документы и Действия */}
          <div className="info-cards-grid">
            <div className="info-card">
              <h3 className="card-title">📄 Документы</h3>
              <div className="documents-list">
                <div className="document-item">
                  <div className="document-icon">📋</div>
                  <div className="document-info">
                    <div className="document-name">Трудовой договор</div>
                    <div className="document-meta">10.03.2015 • 2.4 MB</div>
                  </div>
                  <button className="btn-download">⬇️</button>
                </div>
                <div className="document-item">
                  <div className="document-icon">📝</div>
                  <div className="document-info">
                    <div className="document-name">Должностная инструкция</div>
                    <div className="document-meta">15.03.2015 • 1.1 MB</div>
                  </div>
                  <button className="btn-download">⬇️</button>
                </div>
                <div className="document-item">
                  <div className="document-icon">🎓</div>
                  <div className="document-info">
                    <div className="document-name">Доп. соглашение к трудовому договору</div>
                    <div className="document-meta">20.06.2007 • 3.8 MB</div>
                  </div>
                  <button className="btn-download">⬇️</button>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="card-title">⚙️ Действия</h3>
              <div className="actions-list">
                <button className="action-item">
                  <span className="action-icon">✏️</span>
                  <div className="action-info">
                    <div className="action-title">Редактировать данные</div>
                    <div className="action-desc">Изменить контактную информацию</div>
                  </div>
                </button>
                <button className="action-item">
                  <span className="action-icon">🔒</span>
                  <div className="action-info">
                    <div className="action-title">Сменить пароль</div>
                    <div className="action-desc">Обновить пароль от кабинета</div>
                  </div>
                </button>
                <button className="action-item">
                  <span className="action-icon">🔔</span>
                  <div className="action-info">
                    <div className="action-title">Настроить уведомления</div>
                    <div className="action-desc">Email, SMS, push</div>
                  </div>
                </button>
                <button className="action-item">
                  <span className="action-icon">⬇️</span>
                  <div className="action-info">
                    <div className="action-title">Скачать профиль</div>
                    <div className="action-desc">PDF, DOCX</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ВКЛАДКА 2: ЗАКРЕПЛЕННОЕ ИМУЩЕСТВО */}
      {activeTab === 'equipment' && (
        <div className="equipment-page">
          <div className="equipment-header">
            <h2 className="section-title">🖥️ Закрепленное имущество</h2>
            <p className="section-subtitle">
              За вами закреплено {profileData.equipment.length} ед. техники
            </p>
          </div>

          <div className="equipment-grid">
            {profileData.equipment.map((item) => (
              <div key={item.id} className="equipment-card">
                <div className="equipment-card-header">
                  <div className="equipment-card-icon">{item.type.split(' ')[0]}</div>
                  <div className="equipment-card-type">{item.type.split(' ').slice(1).join(' ')}</div>
                 
                </div>
                
                <div className="equipment-card-body">
                  <div className="equipment-detail">
                    <span className="detail-label">Модель:</span>
                    <span className="detail-value">{item.model}</span>
                  </div>
                  <div className="equipment-detail">
                    <span className="detail-label">Инвентарный номер:</span>
                    <span className="detail-value mono">{item.inventoryNumber}</span>
                  </div>
                  <div className="equipment-detail">
                    <span className="detail-label">Дата выдачи:</span>
                    <span className="detail-value">{item.dateAssigned}</span>
                  </div>
                </div>

                <button className="btn-equipment-report-issue">
                  ⚠️ Сообщить о проблеме
                </button>
              </div>
            ))}
          </div>

          <div className="equipment-actions">
            <button className="btn-equipment-main-report">
              🔧 Создать заявку на ремонт
            </button>
            <button className="btn-equipment-replace">
              🔄 Запросить замену
            </button>
          </div>
        </div>
      )}

      {/* ВКЛАДКА 3: УВЕДОМЛЕНИЯ */}
      {activeTab === 'notifications' && (
        <div className="settings-section">
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">🔔 Настройки уведомлений</h2>
              <button className="btn-primary-small">💾 Сохранить</button>
            </div>
            <div className="notifications-table">
              <table className="notify-table">
                <thead>
                  <tr>
                    <th>Тип уведомления</th>
                    <th>Email</th>
                    <th>Push</th>
                    <th>SMS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { icon: '📋', name: 'Задачи и поручения', key: 'tasks' },
                    { icon: '📝', name: 'Заявки', key: 'requests' },
                    { icon: '💰', name: 'Зарплата', key: 'salary' },
                    { icon: '📢', name: 'Новости', key: 'news' },
                    { icon: '🎓', name: 'Обучение', key: 'training' },
                  ].map((item) => (
                    <tr key={item.key}>
                      <td>
                        <div className="notify-type">
                          <span className="notify-icon">{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                      </td>
                      {['email', 'push', 'sms'].map((type) => (
                        <td key={type}>
                          <label className="checkbox-label">
                            <input 
                              type="checkbox" 
                              checked={notifications[type][item.key]} 
                              onChange={() => handleToggle(type, item.key)} 
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ВКЛАДКА 4: ИНТЕРФЕЙС */}
      {activeTab === 'interface' && (
        <div className="settings-section">
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">🎨 Тема оформления</h2>
            </div>
            <div className="theme-selector">
              <label className="theme-card active">
                <input type="radio" name="theme" defaultChecked />
                <div className="theme-preview light"></div>
                <span className="theme-name">Светлая</span>
              </label>
              <label className="theme-card">
                <input type="radio" name="theme" />
                <div className="theme-preview dark"></div>
                <span className="theme-name">Тёмная</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Компонент строки информации
const InfoRow = ({ label, value, copyable, full = false }) => (
  <div className={`info-row ${full ? 'full' : ''}`}>
    <span className="info-label">{label}</span>
    <span className="info-value">
      {value}
      {copyable && <button className="btn-copy" onClick={() => navigator.clipboard.writeText(value)}>📋</button>}
    </span>
  </div>
);

export default Profile;