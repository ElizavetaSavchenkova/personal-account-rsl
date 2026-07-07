import React, { useState } from 'react';
import './Profile2.css';

const Profile2 = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // ✅ Данные профиля + Личная информация (объединено)
  const profileData = {
    // Основные данные
    fullName: 'Иванов Иван Иванович',
    email: 'ivanov.ii@rsl.ru',
    phone: '+7 (916) 123-45-67',
    department: 'Отдел комплектования фондов',
    position: 'Ведущий библиограф',
    employeeId: '0012345',
    hireDate: '10.03.2015',
    avatar: null,
    
    // ✅ Добавлено из "Личной информации":
    birthDate: '10.05.1985',
    snils: '123-456-789 00',
    inn: '123456789012',
    passport: '4500 123456',
    passportIssue: 'ОВД "Примерный", 15.06.2010',
    registrationAddress: 'г. Москва, ул. Примерная, д. 10, кв. 50',
    actualAddress: 'г. Москва, ул. Другая, д. 20, кв. 100',
  };

  // Настройки уведомлений
  const [notifications, setNotifications] = useState({
    email: {
      tasks: true,
      requests: true,
      salary: true,
      news: false,
      training: true
    },
    push: {
      tasks: true,
      requests: true,
      salary: false,
      news: false,
      training: false
    },
    sms: {
      tasks: false,
      requests: false,
      salary: true,
      news: false,
      training: false
    }
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
      [type]: {
        ...prev[type],
        [category]: !prev[type][category]
      }
    }));
  };

  return (
    <div className="profile-page">
      <h1 className="page-title">⚙️ Профиль и настройки</h1>

      {/* Табы */}
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          👤 Личные данные
        </button>
        <button 
          className={`tab ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          🔐 Безопасность
        </button>
        <button 
          className={`tab ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          🔔 Уведомления
        </button>
        <button 
          className={`tab ${activeTab === 'interface' ? 'active' : ''}`}
          onClick={() => setActiveTab('interface')}
        >
          🎨 Интерфейс
        </button>
        <button 
          className={`tab ${activeTab === 'sessions' ? 'active' : ''}`}
          onClick={() => setActiveTab('sessions')}
        >
          📱 Устройства
        </button>
      </div>

      {/* ЛИЧНЫЕ ДАННЫЕ */}
      {activeTab === 'personal' && (
        <div className="settings-section">
          
          {/* Основная информация + Личные данные */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">Личная информация</h2>
              <button className="btn-primary-small">✏️ Редактировать</button>
            </div>
            
            <div className="profile-header">
              <div className="avatar-section">
                <div className="avatar-large">
                  {profileData.avatar ? (
                    <img src={profileData.avatar} alt={profileData.fullName} />
                  ) : (
                    <span>ИИ</span>
                  )}
                </div>
                <button className="btn-change-avatar">Загрузить фото</button>
              </div>
              
              <div className="profile-info-grid">
                <InfoField label="ФИО" value={profileData.fullName} />
                <InfoField label="Табельный номер" value={profileData.employeeId} copyable />
                <InfoField label="Дата рождения" value={profileData.birthDate} />
                <InfoField label="Должность" value={profileData.position} />
                <InfoField label="Отдел" value={profileData.department} />
                <InfoField label="Дата приёма" value={profileData.hireDate} />
                <InfoField label="Email" value={profileData.email} copyable />
                <InfoField label="Телефон" value={profileData.phone} copyable />
                
                {/* ✅ Добавленные поля из "Личной информации" */}
                <InfoField label="СНИЛС" value={profileData.snils} copyable />
                <InfoField label="ИНН" value={profileData.inn} copyable />
                <InfoField label="Паспорт" value={profileData.passport} copyable />
                <InfoField label="Кем выдан" value={profileData.passportIssue} />
                <InfoField label="Адрес регистрации" value={profileData.registrationAddress} full />
                <InfoField label="Адрес проживания" value={profileData.actualAddress} full />
              </div>
            </div>
          </div>

          {/* Контактная информация (редактируемая) */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">Контактная информация</h2>
              <button className="btn-primary-small">✏️ Изменить</button>
            </div>
            
            <div className="settings-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Рабочий email</label>
                  <input type="email" defaultValue={profileData.email} className="form-input" />
                </div>
                <div className="form-group">
                  <label>Личный email</label>
                  <input type="email" defaultValue="ivanov.ii@mail.ru" className="form-input" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Рабочий телефон</label>
                  <input type="tel" defaultValue="доб. 5678" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Мобильный телефон</label>
                  <input type="tel" defaultValue={profileData.phone} className="form-input" />
                </div>
              </div>
              
              <div className="form-group full">
                <label>Адрес проживания</label>
                <input 
                  type="text" 
                  defaultValue={profileData.actualAddress} 
                  className="form-input" 
                />
              </div>
              
              <div className="form-actions">
                <button className="btn-secondary">Отмена</button>
                <button className="btn-primary">Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* БЕЗОПАСНОСТЬ */}
      {activeTab === 'security' && (
        <div className="settings-section">
          {/* Смена пароля */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">🔑 Смена пароля</h2>
            </div>
            
            <div className="settings-form">
              <div className="form-group">
                <label>Текущий пароль</label>
                <input type="password" className="form-input" placeholder="••••••••" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Новый пароль</label>
                  <input type="password" className="form-input" placeholder="Минимум 8 символов" />
                </div>
                <div className="form-group">
                  <label>Подтвердите пароль</label>
                  <input type="password" className="form-input" placeholder="Повторите пароль" />
                </div>
              </div>
              
              <div className="password-requirements">
                <p className="requirements-title">Требования к паролю:</p>
                <ul className="requirements-list">
                  <li className="req-ok">✓ Минимум 8 символов</li>
                  <li className="req-ok">✓ Заглавная буква</li>
                  <li className="req-ok">✓ Цифра</li>
                  <li className="req-pending">○ Специальный символ (!@#$%)</li>
                </ul>
              </div>
              
              <div className="form-actions">
                <button className="btn-primary">Изменить пароль</button>
              </div>
            </div>
          </div>

          {/* Двухфакторная аутентификация */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">📱 Двухфакторная аутентификация</h2>
            </div>
            
            <div className="security-feature">
              <div className="feature-info">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <h3>2FA через приложение</h3>
                  <p>Дополнительная защита аккаунта с помощью кодов из приложения-аутентификатора</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="toggle-slider"></span>
              </label>
            </div>
            
            <div className="security-feature">
              <div className="feature-info">
                <div className="feature-icon">📧</div>
                <div className="feature-text">
                  <h3>Коды на email</h3>
                  <p>Получение кодов подтверждения на рабочую почту</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* УВЕДОМЛЕНИЯ */}
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
                    { icon: '💰', name: 'Зарплата и бухгалтерия', key: 'salary' },
                    { icon: '📢', name: 'Новости организации', key: 'news' },
                    { icon: '🎓', name: 'Обучение и курсы', key: 'training' },
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

      {/* ИНТЕРФЕЙС */}
      {activeTab === 'interface' && (
        <div className="settings-section">
          {/* Тема */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">🎨 Тема оформления</h2>
            </div>
            
            <div className="theme-selector">
              <label className="theme-card active">
                <input type="radio" name="theme" defaultChecked />
                <div className="theme-preview light">
                  <div className="preview-header"></div>
                  <div className="preview-content"></div>
                </div>
                <span className="theme-name">Светлая</span>
              </label>
              
              <label className="theme-card">
                <input type="radio" name="theme" />
                <div className="theme-preview dark">
                  <div className="preview-header"></div>
                  <div className="preview-content"></div>
                </div>
                <span className="theme-name">Тёмная</span>
              </label>
              
              <label className="theme-card">
                <input type="radio" name="theme" />
                <div className="theme-preview system">
                  <div className="preview-header"></div>
                  <div className="preview-content"></div>
                </div>
                <span className="theme-name">Как в системе</span>
              </label>
            </div>
          </div>

          {/* Язык */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">🌐 Язык интерфейса</h2>
            </div>
            
            <div className="settings-form">
              <div className="form-group">
                <select className="form-select">
                  <option value="ru">🇷🇺 Русский</option>
                  <option value="en">🇬🇧 English</option>
                </select>
              </div>
            </div>
          </div>

          {/* Доступность */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">♿ Доступность</h2>
            </div>
            
            <div className="accessibility-options">
              <div className="accessibility-feature">
                <div className="feature-text">
                  <h3>Крупный текст</h3>
                  <p>Увеличить размер шрифта во всём интерфейсе</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="accessibility-feature">
                <div className="feature-text">
                  <h3>Высокая контрастность</h3>
                  <p>Улучшить читаемость для слабовидящих</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* УСТРОЙСТВА */}
      {activeTab === 'sessions' && (
        <div className="settings-section">
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">📱 Активные устройства</h2>
              <button className="btn-danger-small">🚪 Выйти везде</button>
            </div>
            
            <div className="sessions-list">
              {sessions.map((session) => (
                <div key={session.id} className={`session-card ${session.current ? 'current' : ''}`}>
                  <div className="session-icon">
                    {session.device.includes('macOS') && '🍎'}
                    {session.device.includes('iPhone') && '📱'}
                    {session.device.includes('Windows') && '🪟'}
                  </div>
                  <div className="session-info">
                    <div className="session-device">
                      {session.device}
                      {session.current && <span className="current-badge">Текущее</span>}
                    </div>
                    <div className="session-meta">
                      <span>📍 {session.location}</span>
                      <span>🕐 {session.lastActive}</span>
                    </div>
                  </div>
                  {!session.current && (
                    <button className="btn-logout">Выйти</button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* История входов */}
          <div className="table-wrapper">
            <div className="table-header">
              <h2 className="table-section-title">📜 История входов</h2>
            </div>
            
            <div className="table-scroll">
              <table className="sessions-table">
                <thead>
                  <tr>
                    <th>Дата и время</th>
                    <th>Устройство</th>
                    <th>Местоположение</th>
                    <th>IP-адрес</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>04.03.2026, 09:15</td>
                    <td>Chrome на macOS</td>
                    <td>Москва, Россия</td>
                    <td className="mono">192.168.1.100</td>
                    <td><span className="badge success">✓ Успешно</span></td>
                  </tr>
                  <tr>
                    <td>03.03.2026, 18:30</td>
                    <td>Safari на iPhone</td>
                    <td>Москва, Россия</td>
                    <td className="mono">192.168.1.101</td>
                    <td><span className="badge success">✓ Успешно</span></td>
                  </tr>
                  <tr>
                    <td>02.03.2026, 14:20</td>
                    <td>Chrome на Windows</td>
                    <td>Москва, Россия</td>
                    <td className="mono">192.168.1.102</td>
                    <td><span className="badge warning">⚠ Подозрительно</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Компонент поля информации
const InfoField = ({ label, value, copyable, full = false }) => (
  <div className={`info-field ${full ? 'full-width' : ''}`}>
    <div className="info-label">{label}</div>
    <div className="info-value">
      {value}
      {copyable && (
        <button className="btn-copy" title="Копировать" onClick={() => navigator.clipboard.writeText(value)}>
          📋
        </button>
      )}
    </div>
  </div>
);

export default Profile2;