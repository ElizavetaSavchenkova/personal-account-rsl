import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';

const menuItems = [
  { name: 'Главная', icon: '🏠', path: '/' },
  { name: 'Задачи и поручения', icon: '📋', path: '/tasks', badge: 5 },
  { name: 'Мои заявки', icon: '📝', path: '/requests' },

  // Раскрывающийся пункт "Сервисы"
  {
    name: 'Сервисы',
    icon: '🛠️',
    path: null,
    children: [
      { name: 'Финансы', icon: '₽', path: '/accounting' },
      { name: 'Отпуска', icon: '📅', path: '/vacation' },
      { name: 'Справки', icon: '📄', path: '/certificates' },
      { name: 'Социальные услуги', icon: '🤝', path: '/social' },
      { name: 'Командировки', icon: '✈️', path: '/trips' }, 
    ]
  },


  { name: 'Документы', icon: '📄', path: '/documents' },
 
  { name: 'Компания', icon: '🏢', path: '/company' },
  { name: 'Новости', icon: '📢', path: '/news' },
  { name: 'Профиль и настройки', icon: '⚙️', path: '/profile' },
  { name: 'Обратная связь', icon: '💬', path: '/feedback' }
  



];

const Sidebar = () => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState({
    'Сервисы': true // По умолчанию раскрыто
  });

  const toggleMenu = (menuName) => {
    setExpandedMenu(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const isActive = (path) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const hasActiveChild = (children) => {
    return children.some(child => location.pathname === child.path);
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          if (item.children) {
            // Раскрывающийся пункт
            const isExpanded = expandedMenu[item.name];
            const hasActive = hasActiveChild(item.children);

            return (
              <div key={item.name} className="sidebar-menu-group">
                <button
                  className={`sidebar-menu-header ${hasActive ? 'active' : ''}`}
                  onClick={() => toggleMenu(item.name)}
                >
                  <div className="menu-header-left">
                    <span className="sidebar-item-icon">{item.icon}</span>
                    <span className="sidebar-item-name">{item.name}</span>
                  </div>
                  <span className={`menu-arrow ${isExpanded ? 'expanded' : ''}`}>
                    ▶
                  </span>
                </button>

                {isExpanded && (
                  <div className="sidebar-submenu">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.path}
                        className={`sidebar-subitem ${isActive(child.path) ? 'active' : ''}`}
                      >
                        <span className="submenu-icon">{child.icon}</span>
                        <span className="submenu-name">{child.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            // Обычный пункт
            return (
              <a
                key={item.name}
                href={item.path}
                className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="sidebar-item-icon">{item.icon}</span>
                <span className="sidebar-item-name">{item.name}</span>
                {item.badge && (
                  <span className="sidebar-item-badge">{item.badge}</span>
                )}
              </a>
            );
          }
        })}
      </nav>

    
    </aside>
  );
};

export default Sidebar;