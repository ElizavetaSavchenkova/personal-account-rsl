import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [activeTab, setActiveTab] = useState('support'); // support или suggestions
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    priority: 'normal',
    attachments: []
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет отправка на бэкенд
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ subject: '', description: '', priority: 'normal', attachments: [] });
    }, 3000);
  };

  return (
    <div className="feedback-page">
      <h1 className="page-title">💬 Обратная связь</h1>
      
      <div className="feedback-intro">
        <p>Есть вопрос или предложение? Мы всегда рады обратной связи! Выберите категорию и опишите вашу проблему.</p>
      </div>

      {/* Табы */}
      <div className="feedback-tabs">
        <button 
          className={`feedback-tab ${activeTab === 'support' ? 'active' : ''}`}
          onClick={() => setActiveTab('support')}
        >
          🛠️ Техническая поддержка
        </button>
        <button 
          className={`feedback-tab ${activeTab === 'suggestions' ? 'active' : ''}`}
          onClick={() => setActiveTab('suggestions')}
        >
          💡 Вопросы и предложения
        </button>
      </div>

      {/* Форма */}
      <div className="feedback-form-wrapper">
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h2>Заявка отправлена!</h2>
            <p>Мы получили ваше обращение и ответим в ближайшее время.</p>
            <div className="ticket-number">
              Номер заявки: <strong>#{Math.floor(Math.random() * 10000)}</strong>
            </div>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmit}>
            {/* Категория */}
            <div className="form-section">
              <h3 className="section-title">
                {activeTab === 'support' ? '🛠️ Техническая поддержка' : '💡 Вопросы и предложения'}
              </h3>
              
              {activeTab === 'support' && (
                <div className="support-categories">
                  <p className="section-desc">Выберите категорию проблемы:</p>
                  <div className="category-buttons">
                    <button type="button" className="category-btn">🔐 Доступ и авторизация</button>
                    <button type="button" className="category-btn">💻 Компьютеры и ПО</button>
                    <button type="button" className="category-btn">🌐 Интернет и сеть</button>
                    <button type="button" className="category-btn">📧 Почта и мессенджеры</button>
                    <button type="button" className="category-btn">🖨️ Принтеры и сканеры</button>
                    <button type="button" className="category-btn">🔧 Другое</button>
                  </div>
                </div>
              )}
            </div>

            {/* Тема */}
            <div className="form-group">
              <label htmlFor="subject">Тема обращения *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Кратко опишите суть проблемы"
                required
                className="form-input"
              />
            </div>

            {/* Описание */}
            <div className="form-group">
              <label htmlFor="description">Описание *</label>
              <textarea 
                id="description" 
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Подробно опишите вашу проблему или предложение..."
                required
                className="form-textarea"
                rows="6"
              />
              <p className="form-hint">
                {activeTab === 'support' 
                  ? 'Укажите: что произошло, когда, какие шаги привели к проблеме' 
                  : 'Опишите вашу идею или предложение по улучшению'}
              </p>
            </div>

            {/* Приоритет (только для техподдержки) */}
            {activeTab === 'support' && (
              <div className="form-group">
                <label>Приоритет</label>
                <div className="priority-selector">
                  <label className="priority-option">
                    <input 
                      type="radio" 
                      name="priority" 
                      value="low"
                      checked={formData.priority === 'low'}
                      onChange={handleChange}
                    />
                    <span className="priority-label low">🟢 Низкий</span>
                  </label>
                  <label className="priority-option">
                    <input 
                      type="radio" 
                      name="priority" 
                      value="normal"
                      checked={formData.priority === 'normal'}
                      onChange={handleChange}
                    />
                    <span className="priority-label normal">🟡 Средний</span>
                  </label>
                  <label className="priority-option">
                    <input 
                      type="radio" 
                      name="priority" 
                      value="high"
                      checked={formData.priority === 'high'}
                      onChange={handleChange}
                    />
                    <span className="priority-label high">🔴 Высокий</span>
                  </label>
                </div>
              </div>
            )}

            {/* Вложения */}
            <div className="form-group">
              <label>Вложения</label>
              <div className="file-upload">
                <input 
                  type="file" 
                  id="attachments"
                  multiple
                  className="file-input"
                  onChange={(e) => setFormData(prev => ({ ...prev, attachments: e.target.files }))}
                />
                <label htmlFor="attachments" className="file-label">
                  📎 Прикрепить файлы
                </label>
                <span className="file-hint">Максимум 10 MB (скриншоты, документы)</span>
              </div>
              {formData.attachments.length > 0 && (
                <div className="attached-files">
                  {Array.from(formData.attachments).map((file, index) => (
                    <div key={index} className="file-item">
                      📄 {file.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Кнопки */}
            <div className="form-actions">
              <button type="button" className="btn-secondary">
                Очистить
              </button>
              <button type="submit" className="btn-primary">
                📤 Отправить обращение
              </button>
            </div>
          </form>
        )}
      </div>

      

      {/* Контакты поддержки */}
      <div className="support-contacts">
        <h2 className="section-title">📞 Контакты технической поддержки</h2>
        <div className="contacts-grid">
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <div className="contact-info">
              <div className="contact-label">Телефон</div>
              <div className="contact-value">доб. 1234</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <div className="contact-label">Email</div>
              <div className="contact-value">support@rsl.ru</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">🕐</div>
            <div className="contact-info">
              <div className="contact-label">Режим работы</div>
              <div className="contact-value">Пн-Пт 9:00-18:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;