import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ right: 20, bottom: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('chat-header')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.right,
        y: e.clientY - position.bottom
      });
    }
  };

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          right: window.innerWidth - e.clientX + dragOffset.x - 320,
          bottom: window.innerHeight - e.clientY + dragOffset.y - 80
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div 
      className={`chat-widget ${isOpen ? 'open' : ''}`}
      style={{ 
        right: `${position.right}px`, 
        bottom: `${position.bottom}px` 
      }}
    >
      {/* Кнопка открытия */}
      <button 
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
        {!isOpen && <span className="chat-badge">3</span>}
      </button>

      {/* Окно чата */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-title">Помощь сотруднику</span>
              <span className="chat-status">Онлайн</span>
            </div>
          </div>

          <div className="chat-messages">
            <div className="message received">
              <div className="message-text">
                Здравствуйте! Чем могу помочь?
              </div>
              <div className="message-time">10:30</div>
            </div>

            <div className="message sent">
              <div className="message-text">
                Как оформить материальную помощь?
              </div>
              <div className="message-time">10:32</div>
            </div>

            <div className="message received">
              <div className="message-text">
                Для оформления материальной помощи перейдите в раздел "Финансы" → "Материальная помощь" и нажмите кнопку "Оформить"
              </div>
              <div className="message-time">10:33</div>
            </div>
          </div>

          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Введите сообщение..."
              className="chat-input-field"
            />
            <button className="chat-send-btn">➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;