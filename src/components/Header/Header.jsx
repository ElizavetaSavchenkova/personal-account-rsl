import React from 'react';
import { useNavigate } from 'react-router-dom';  // ← Добавляем
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();  // ← Добавляем хук

  const handleProfileClick = () => {
    navigate('/profile');  // ← Переход в профиль
  };

  return (
    <header className="main-header">
      <div className="header-left">
        {/* Логотип */}
        <div className="header-logo">
          <img src={logo} alt="РГБ Логотип" className="header-logo-image" />
        </div>
      </div>

      {/* Поиск */}
      <div className="header-search">
        <input 
          type="text" 
          placeholder="Поиск услуг, документов, коллег..." 
          className="header-search-input"
        />
      </div>

      {/* Правая часть */}
      <div className="header-right">
        {/* Уведомления */}
        <button className="header-notifications-btn">
          <svg 
            className="header-notification-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="header-notification-badge">3</span>
        </button>

        {/* Разделитель */}
        <div className="header-divider"></div>

        {/* 👤 Профиль - КЛИКАБЕЛЬНЫЙ */}
        <div 
          className="header-user-profile" 
          onClick={handleProfileClick}
          style={{ cursor: 'pointer' }}  // ← Показываем что можно кликнуть
        >
          <div className="header-user-info">
            <span className="header-user-name">Иванов И.И.</span>
            <span className="header-user-department">Отдел комплектования</span>
          </div>
          <div className="header-user-avatar">
            <span>ИИ</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;