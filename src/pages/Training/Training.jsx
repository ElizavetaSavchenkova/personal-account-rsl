import React, { useState } from 'react';
import './Training.css';

const Training = () => {
  const [activeTab, setActiveTab] = useState('available');

  // Доступные курсы (внутренние)
  const internalCourses = [
    {
      id: 1,
      title: 'Excel для библиотек',
      category: 'internal',
      provider: 'РГБ Обучение',
      duration: '16 часов',
      level: 'Начальный',
      image: '📊',
      description: 'Работа с таблицами, формулами и отчетами',
      rating: 4.8,
      students: 234
    },
    {
      id: 2,
      title: 'Английский язык для библиотекарей',
      category: 'internal',
      provider: 'РГБ Обучение',
      duration: '24 часа',
      level: 'Средний',
      image: '🌍',
      description: 'Профессиональная лексика, перевод документов',
      rating: 4.9,
      students: 189
    },
    {
      id: 3,
      title: 'Библиография и каталогизация',
      category: 'internal',
      provider: 'РГБ Обучение',
      duration: '20 часов',
      level: 'Продвинутый',
      image: '📚',
      description: 'Современные стандарты описания документов',
      rating: 4.7,
      students: 156
    },
  ];

  // Доступные курсы (внешние бесплатные)
  const externalCourses = [
    {
      id: 4,
      title: 'ELMA365: Основы работы',
      category: 'external',
      provider: 'ELMA365 Academy',
      duration: '8 часов',
      level: 'Начальный',
      image: '💼',
      description: 'Работа в системе ELMA365, задачи и процессы',
      rating: 4.9,
      students: 1240,
      link: '#'
    },
    {
      id: 5,
      title: 'Google Документы и Таблицы',
      category: 'external',
      provider: 'Google Skillshop',
      duration: '6 часов',
      level: 'Начальный',
      image: '📝',
      description: 'Облачные инструменты для совместной работы',
      rating: 4.6,
      students: 3420,
      link: '#'
    },
    {
      id: 6,
      title: 'Основы цифровой грамотности',
      category: 'external',
      provider: 'Университет ИТМО',
      duration: '12 часов',
      level: 'Начальный',
      image: '💻',
      description: 'Безопасность, поиск информации, цифровые инструменты',
      rating: 4.7,
      students: 890,
      link: '#'
    },
  ];

  // Курсы в процессе
  const inProgressCourses = [
    {
      id: 101,
      title: 'Excel для библиотек',
      provider: 'РГБ Обучение',
      progress: 65,
      totalLessons: 12,
      completedLessons: 8,
      nextLesson: 'Сводные таблицы',
      dueDate: '15.04.2026'
    },
    {
      id: 102,
      title: 'ELMA365: Основы работы',
      provider: 'ELMA365 Academy',
      progress: 30,
      totalLessons: 8,
      completedLessons: 2,
      nextLesson: 'Создание процессов',
      dueDate: '20.04.2026'
    },
  ];

  // Пройденные курсы
  const completedCourses = [
    {
      id: 201,
      title: 'Введение в библиографию',
      provider: 'РГБ Обучение',
      completedDate: '15.02.2026',
      certificate: true,
      hours: 16
    },
    {
      id: 202,
      title: 'Основы деловой переписки',
      provider: 'РГБ Обучение',
      completedDate: '10.01.2026',
      certificate: true,
      hours: 8
    },
    {
      id: 203,
      title: 'Информационная безопасность',
      provider: 'Внешний курс',
      completedDate: '20.12.2025',
      certificate: false,
      hours: 4
    },
  ];

  // Рекомендованные курсы
  const recommendedCourses = [
    {
      id: 301,
      title: 'Advanced Excel: Макросы и VBA',
      reason: 'После курса "Excel для библиотек"',
      image: '📈',
      provider: 'РГБ Обучение'
    },
    {
      id: 302,
      title: 'Управление проектами',
      reason: 'Рекомендовано для вашей должности',
      image: '📋',
      provider: 'Внешний курс'
    },
  ];

  const [showRequestForm, setShowRequestForm] = useState(false);

  return (
    <div className="training-page">
      <h1 className="page-title">🎓 Обучение и развитие</h1>

      {/* Рекомендации */}
      <div className="recommendations-section">
        <h2 className="section-title">⭐ Рекомендовано для вас</h2>
        <div className="recommendations-grid">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="recommendation-card">
              <div className="rec-icon">{course.image}</div>
              <div className="rec-info">
                <h3 className="rec-title">{course.title}</h3>
                <p className="rec-reason">{course.reason}</p>
                <p className="rec-provider">{course.provider}</p>
              </div>
              <button className="btn-start">Начать</button>
            </div>
          ))}
        </div>
      </div>

      {/* Табы */}
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'available' ? 'active' : ''}`}
          onClick={() => setActiveTab('available')}
        >
          Доступные курсы
        </button>
        <button 
          className={`tab ${activeTab === 'inprogress' ? 'active' : ''}`}
          onClick={() => setActiveTab('inprogress')}
        >
          В процессе ({inProgressCourses.length})
        </button>
        <button 
          className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Пройденные ({completedCourses.length})
        </button>
        <button 
          className={`tab ${activeTab === 'request' ? 'active' : ''}`}
          onClick={() => {setActiveTab('request'); setShowRequestForm(true);}}
        >
          Запросить курс
        </button>
      </div>

      {/* ДОСТУПНЫЕ КУРСЫ */}
      {activeTab === 'available' && (
        <div className="available-courses">
          
          {/* Внутренние курсы */}
          <div className="courses-section">
            <h2 className="section-title">📚 Внутренние курсы РГБ</h2>
            <div className="courses-grid">
              {internalCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Внешние курсы */}
          <div className="courses-section">
            <h2 className="section-title">🌐 Внешние бесплатные курсы</h2>
            <div className="courses-grid">
              {externalCourses.map((course) => (
                <CourseCard key={course.id} course={course} external />
              ))}
            </div>
          </div>

        </div>
      )}

      {/* КУРСЫ В ПРОЦЕССЕ */}
      {activeTab === 'inprogress' && (
        <div className="inprogress-courses">
          <div className="courses-list">
            {inProgressCourses.map((course) => (
              <div key={course.id} className="inprogress-card">
                <div className="progress-header">
                  <div>
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-provider">{course.provider}</p>
                  </div>
                  <span className="progress-percent">{course.progress}%</span>
                </div>
                
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                
                <div className="progress-details">
                  <span>Пройдено: {course.completedLessons} из {course.totalLessons} уроков</span>
                  <span>Следующий урок: {course.nextLesson}</span>
                  <span className="due-date">До: {course.dueDate}</span>
                </div>
                
                <button className="btn-continue">Продолжить обучение</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ПРОЙДЕННЫЕ КУРСЫ */}
      {activeTab === 'completed' && (
        <div className="completed-courses">
          <div className="table-wrapper">
            <div className="table-scroll">
              <table className="training-table">
                <thead>
                  <tr>
                    <th>Название курса</th>
                    <th>Провайдер</th>
                    <th>Дата завершения</th>
                    <th>Часов</th>
                    <th>Сертификат</th>
                  </tr>
                </thead>
                <tbody>
                  {completedCourses.map((course) => (
                    <tr key={course.id}>
                      <td className="font-bold">{course.title}</td>
                      <td>{course.provider}</td>
                      <td>{course.completedDate}</td>
                      <td>{course.hours} ч</td>
                      <td>
                        {course.certificate ? (
                          <span className="badge certificate">📄 Получен</span>
                        ) : (
                          <span className="badge no-cert">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ЗАПРОС КУРСА */}
      {activeTab === 'request' && showRequestForm && (
        <div className="request-course">
          <div className="info-block">
            <div className="info-icon">💡</div>
            <div className="info-text">
              <strong>Не нашли нужный курс?</strong> Мы постоянно расширяем библиотеку курсов. 
              Если вы хотите пройти обучение, которого нет в списке, отправьте нам запрос с описанием курса.
            </div>
          </div>

          <div className="request-form-wrapper">
            <h2 className="section-title">Запросить новый курс</h2>
            <form className="request-form">
              <div className="form-group">
                <label>Название курса *</label>
                <input type="text" placeholder="Например: Яндекс.Директ для начинающих" className="form-input" />
              </div>
              
              <div className="form-group">
                <label>Провайдер/Платформа</label>
                <input type="text" placeholder="Например: Яндекс.Практикум, Coursera, Stepik" className="form-input" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Ссылка на курс</label>
                  <input type="url" placeholder="https://..." className="form-input" />
                </div>
                <div className="form-group">
                  <label>Стоимость</label>
                  <input type="text" placeholder="Бесплатно / 5000 ₽" className="form-input" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Почему этот курс важен для вас? *</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Опишите, как этот курс поможет в вашей работе..."
                  rows="4"
                ></textarea>
              </div>
              
              <div className="form-group">
                <label>Дополнительные пожелания</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Формат, длительность, язык обучения..."
                  rows="2"
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowRequestForm(false)}>Отмена</button>
                <button type="submit" className="btn-primary">Отправить запрос</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

// Компонент карточки курса
const CourseCard = ({ course, external }) => (
  <div className={`course-card ${external ? 'external' : ''}`}>
    <div className="course-image">{course.image}</div>
    <div className="course-content">
      <div className="course-header">
        <span className={`category-badge ${course.category}`}>
          {course.category === 'internal' ? '🏛️ Внутренний' : '🌐 Внешний'}
        </span>
        <span className="course-level">{course.level}</span>
      </div>
      
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>
      
      <div className="course-meta">
        <span className="meta-item">⏱️ {course.duration}</span>
        <span className="meta-item">⭐ {course.rating}</span>
        <span className="meta-item">👥 {course.students}</span>
      </div>
      
      <p className="course-provider">{course.provider}</p>
      
      <button className={`btn-course ${external ? 'btn-external' : ''}`}>
        {external ? '🔗 Перейти к курсу' : '📝 Записаться'}
      </button>
    </div>
  </div>
);

export default Training;