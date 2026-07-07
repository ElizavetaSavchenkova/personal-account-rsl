import React, { useState } from 'react';
import './Company.css';

const Company = () => {
  const [activeTab, setActiveTab] = useState('employees');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDepartments, setExpandedDepartments] = useState({});

  // Все сотрудники (пример данных)
  const allEmployees = [
    {
      id: 1,
      name: 'Бабаева Мария Павловна',
      position: 'Главный специалист',
      department: '(ОЭФ) Сектор обработки',
      phone: '4482',
      email: 'babaevamp@rsl.ru',
      birthday: '27 декабря',
      office: null
    },
    {
      id: 2,
      name: 'Бабаева Сабина Руслановна',
      position: 'Ведущий библиотекарь',
      department: '(ИЗО) Отдел изоизданий',
      phone: '4461',
      email: 'babaevasr@rsl.ru',
      birthday: '5 июля',
      office: 'Москва, Воздвиженка 3/5, корпус Д, эт. 14, к. - (ярус)'
    },
    {
      id: 3,
      name: 'Бабина Галина Павловна',
      position: 'Библиограф',
      department: '(ПОКБ) Отдел приема обязательных экземпляров книг и брошюр',
      phone: null,
      email: 'babinagp@rsl.ru',
      birthday: '17 июля',
      office: null
    },
    {
      id: 4,
      name: 'Бабина Елена Васильевна',
      position: 'Ведущий библиотекарь',
      department: '(ФБ) Отдел хранения основных фондов',
      phone: null,
      email: null,
      birthday: '9 января',
      office: null
    },
    {
      id: 5,
      name: 'Бабичева Майя Евгеньевна',
      position: 'Ведущий научный сотрудник',
      department: '(ОБГ) Научно-исследовательский отдел библиографии',
      phone: '4381',
      email: 'babichevame@rsl.ru',
      birthday: '13 августа',
      office: 'Москва, Воздвиженка 3/5, корпус Б, эт. 4, к. Б 403'
    },
    {
      id: 6,
      name: 'Бабурина Светлана Алексеевна',
      position: 'Библиограф',
      department: '(ПОКБ) Отдел приема обязательных экземпляров книг и брошюр',
      phone: null,
      email: 'baburinasа@rsl.ru',
      birthday: '1 октября',
      office: null
    },
  ];

  // Структура организации
  const organizationStructure = [
    {
      id: 1,
      title: 'Генеральный директор',
      level: 0,
      children: [
        {
          id: 2,
          title: 'Заместитель генерального директора по научно-издательской деятельности',
          level: 1,
          children: [
            { id: 3, title: 'Отдел редакционно-издательской подготовки', level: 2 },
            { id: 4, title: 'Издательский отдел', level: 2 },
          ]
        },
        {
          id: 5,
          title: 'Заместитель генерального директора по хранению и обслуживанию',
          level: 1,
          children: [
            { id: 6, title: 'Отдел хранения основных фондов', level: 2 },
            { id: 7, title: 'Отдел обслуживания читателей', level: 2 },
          ]
        },
        {
          id: 8,
          title: 'Заместитель генерального директора - директор по цифровизации',
          level: 1,
          children: [
            { id: 9, title: 'Отдел цифровых технологий', level: 2 },
            { id: 10, title: 'Лаборатория оцифровки', level: 2 },
          ]
        },
        {
          id: 11,
          title: 'Заместитель генерального директора по экономике и финансам',
          level: 1,
          children: [
            { id: 12, title: 'Бухгалтерия', level: 2 },
            { id: 13, title: 'Планово-экономический отдел', level: 2 },
          ]
        },
        {
          id: 14,
          title: 'Заместитель генерального директора по формированию фондов и национальной библиографии',
          level: 1,
          children: [
            { id: 15, title: 'Отдел комплектования', level: 2 },
            { id: 16, title: 'Отдел каталогизации', level: 2 },
          ]
        },
        {
          id: 17,
          title: 'Заместитель генерального директора по эксплуатации, строительству и безопасности',
          level: 1,
          children: [
            { id: 18, title: 'Отдел эксплуатации', level: 2 },
            { id: 19, title: 'Служба безопасности', level: 2 },
          ]
        },
      ]
    }
  ];

  // Сотрудники моего отдела (пример: Отдел комплектования)
  const myDepartmentEmployees = [
    {
      id: 101,
      name: 'Андросов Георгий Михайлович',
      position: 'Бизнес-аналитик',
      department: '(по СВО) Проектный офис "Служба внутренней организации"',
      phone: '1023',
      email: 'androsovgm@rsl.ru',
      birthday: '18 апреля',
      office: 'Воздвиженка, 3/5, стр.9, корп. АТК, 2 этаж, АТК-202',
      vacation: { start: '10.06.2026', end: '24.06.2026', type: 'Плановый отпуск' }
    },
    {
      id: 102,
      name: 'Билик Дмитрий Леонидович',
      position: 'Заместитель руководителя проектного офиса',
      department: '(по СВО) Проектный офис "Служба внутренней организации"',
      phone: '1282',
      email: 'blikdl@rsl.ru',
      birthday: '31 августа',
      office: null,
      vacation: null
    },
    {
      id: 103,
      name: 'Минаева Мария Дмитриевна',
      position: 'Руководитель проектного офиса',
      department: '(по СВО) Проектный офис "Служба внутренней организации"',
      phone: '1077',
      email: 'minaevamd@rsl.ru',
      birthday: '13 июня',
      office: null,
      vacation: { start: '15.09.2026', end: '29.09.2026', type: 'Плановый отпуск' }
    },
    {
      id: 104,
      name: 'Савченков Дмитрий Дмитриевич',
      position: 'Техник',
      department: '(по СВО) Проектный офис "Служба внутренней организации"',
      phone: null,
      email: 'savchenkovdd@rsl.ru',
      birthday: '4 октября',
      office: null,
      vacation: null
    },
  ];

  // Фильтрация сотрудников
  const filteredEmployees = allEmployees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Переключение департамента
  const toggleDepartment = (id) => {
    setExpandedDepartments(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Рекурсивный рендер структуры
  const renderStructureItem = (item) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedDepartments[item.id];

    return (
      <div key={item.id} className="structure-item" style={{ paddingLeft: `${item.level * 24}px` }}>
        <div 
          className={`structure-row ${hasChildren ? 'clickable' : ''}`}
          onClick={() => hasChildren && toggleDepartment(item.id)}
        >
          <div className="structure-title">
            {hasChildren && (
              <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▶</span>
            )}
            {!hasChildren && <span className="expand-placeholder"></span>}
            <span>{item.title}</span>
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div className="structure-children">
            {item.children.map(child => renderStructureItem(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="company-page">
      <h1 className="page-title">🏢 Компания</h1>

      {/* Табы */}
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'employees' ? 'active' : ''}`}
          onClick={() => setActiveTab('employees')}
        >
          👥 Сотрудники
        </button>
        <button 
          className={`tab ${activeTab === 'structure' ? 'active' : ''}`}
          onClick={() => setActiveTab('structure')}
        >
          🏛️ Структура
        </button>
        <button 
          className={`tab ${activeTab === 'department' ? 'active' : ''}`}
          onClick={() => setActiveTab('department')}
        >
          📋 Мой отдел
        </button>
      </div>

      {/* СОТРУДНИКИ */}
      {activeTab === 'employees' && (
        <div className="employees-section">
          {/* Поиск */}
          <div className="search-container">
            <input
              type="text"
              placeholder="🔍 Поиск сотрудников (ФИО, должность, отдел)..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Алфавитный фильтр */}
          <div className="alphabet-filter">
            <button className="alphabet-btn active">Все</button>
            {['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 
              'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'].map(letter => (
              <button key={letter} className="alphabet-btn">{letter}</button>
            ))}
          </div>

          {/* Список сотрудников */}
          <div className="employees-list">
            <div className="employees-header">
              <div className="col-employee">сотрудник</div>
              <div className="col-contacts">контакты и день рождения</div>
              <div className="col-office">помещение</div>
            </div>
            
            {filteredEmployees.map((employee) => (
              <div key={employee.id} className="employee-card">
                <div className="col-employee">
                  <div className="emp-name">{employee.name}</div>
                  <div className="emp-position">{employee.position}</div>
                  <div className="emp-department">{employee.department}</div>
                </div>
                <div className="col-contacts">
                  {employee.phone && (
                    <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <a href={`tel:${employee.phone}`} className="contact-link">{employee.phone}</a>
                    </div>
                  )}
                  {employee.email && (
                    <div className="contact-item">
                      <span className="contact-icon">@</span>
                      <a href={`mailto:${employee.email}`} className="contact-link">{employee.email}</a>
                    </div>
                  )}
                  {employee.birthday && (
                    <div className="contact-item">
                      <span className="contact-icon">🎁</span>
                      <span className="contact-text">{employee.birthday}</span>
                    </div>
                  )}
                </div>
                <div className="col-office">
                  {employee.office && (
                    <div className="office-text">{employee.office}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredEmployees.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <div className="empty-text">Сотрудники не найдены</div>
            </div>
          )}
        </div>
      )}

      {/* СТРУКТУРА */}
      {activeTab === 'structure' && (
        <div className="structure-section">
          <div className="structure-header">
            <div className="structure-searches">
              <input 
                type="text" 
                placeholder="Поиск по ФИО"
                className="structure-search"
              />
              <input 
                type="text" 
                placeholder="Поиск по структуре"
                className="structure-search"
              />
            </div>
          </div>

          <div className="structure-tree">
            {organizationStructure.map(item => renderStructureItem(item))}
          </div>
        </div>
      )}

      {/* МОЙ ОТДЕЛ */}
      {activeTab === 'department' && (
        <div className="department-section">
          <div className="department-header">
            <h2 className="department-title">📋 Проектный офис "Служба внутренней организации"</h2>
            <div className="department-stats">
              <span className="stat">Всего: {myDepartmentEmployees.length} сотрудников</span>
              <span className="stat">В отпуске: {myDepartmentEmployees.filter(e => e.vacation).length}</span>
            </div>
          </div>

          <div className="employees-list">
            <div className="employees-header">
              <div className="col-employee">сотрудник</div>
              <div className="col-contacts">контакты и день рождения</div>
              <div className="col-office">помещение</div>
              <div className="col-vacation">отпуск</div>
            </div>
            
            {myDepartmentEmployees.map((employee) => (
              <div key={employee.id} className="employee-card">
                <div className="col-employee">
                  <div className="emp-name">{employee.name}</div>
                  <div className="emp-position">{employee.position}</div>
                  <div className="emp-department">{employee.department}</div>
                </div>
                <div className="col-contacts">
                  {employee.phone && (
                    <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <a href={`tel:${employee.phone}`} className="contact-link">{employee.phone}</a>
                    </div>
                  )}
                  {employee.email && (
                    <div className="contact-item">
                      <span className="contact-icon">@</span>
                      <a href={`mailto:${employee.email}`} className="contact-link">{employee.email}</a>
                    </div>
                  )}
                  {employee.birthday && (
                    <div className="contact-item">
                      <span className="contact-icon">🎁</span>
                      <span className="contact-text">{employee.birthday}</span>
                    </div>
                  )}
                </div>
                <div className="col-office">
                  {employee.office && (
                    <div className="office-text">{employee.office}</div>
                  )}
                </div>
                <div className="col-vacation">
                  {employee.vacation ? (
                    <div className="vacation-info">
                      <div className="vacation-type">{employee.vacation.type}</div>
                      <div className="vacation-dates">
                        {employee.vacation.start} — {employee.vacation.end}
                      </div>
                    </div>
                  ) : (
                    <span className="no-vacation">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default Company;