import React, { useState } from 'react';
import './Tasks.css';

const Tasks = () => {
    const [activeTab, setActiveTab] = useState('current');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Все задачи' },
        { id: 'documents', name: 'Документы' },
        { id: 'approval', name: 'Согласование' },
        { id: 'reports', name: 'Отчёты' },
        { id: 'library', name: 'Библиотечные' },
    ];

    const myTasks = [
        {
            id: 'TASK-2026-00142',
            title: 'Согласовать заявку на закупку',
            category: 'approval',
            description: 'Заявка №45 от 03.03.2026',
            dueDate: '15.04.2026',
            author: 'Савченкова Е.Д.',
            created: '03.03.2026',
            priority: 'high',
            status: 'in_progress'
        },
        {
            id: 'TASK-2026-00138',
            title: 'Обновить карточку книги',
            category: 'library',
            description: 'Инв. номер А123456',
            dueDate: null,
            author: 'Система',
            created: '01.03.2026',
            priority: 'low',
            status: 'in_progress'
        },
        {
            id: 'TASK-2026-00125',
            title: 'Утвердить решение о командировании...',
            category: 'approval',
            description: 'Служебная записка от Абраменкова Е.В.',
            dueDate: '10.04.2026',
            author: 'Савченкова Е.Д.',
            created: '25.02.2026',
            priority: 'medium',
            status: 'pending'
        },
        {
            id: 'TASK-2026-00118',
            title: 'Подготовить отчёт по фондам за март',
            category: 'reports',
            description: 'Ежемесячный отчёт',
            dueDate: '20.04.2026',
            author: 'Петрова М.С.',
            created: '20.02.2026',
            priority: 'medium',
            status: 'pending'
        },
        {
            id: 'TASK-2026-00110',
            title: 'Проверить поступление новых изданий',
            category: 'library',
            description: 'Март 2026',
            dueDate: null,
            author: 'Система',
            created: '15.02.2026',
            priority: 'low',
            status: 'completed'
        },
    ];

    const filteredTasks = selectedCategory === 'all'
        ? myTasks
        : myTasks.filter(t => t.category === selectedCategory);

    return (
        <div className="tasks-page">
            <h1 className="page-title">📋 Задачи и поручения</h1>

            {/* Табы */}
            <div className="tabs-container">
                <button
                    className={`tab ${activeTab === 'current' ? 'active' : ''}`}
                    onClick={() => setActiveTab('current')}
                >
                    Текущие
                </button>
                <button
                    className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    Все
                </button>
            </div>

            {/* Фильтры категорий */}
            <div className="tasks-filters">
                <div className="category-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`category-filter ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.id)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="🔍 Поиск по задачам..."
                        className="search-input"
                    />
                </div>
            </div>

            {/* 📊 Статистика - ПЕРЕНЕСЕНО НАВЕРХ */}
            <div className="tasks-stats">
                <div className="stat-item">
                    <span className="stat-number">{myTasks.filter(t => t.status === 'in_progress').length}</span>
                    <span className="stat-label">В работе</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{myTasks.filter(t => t.status === 'pending').length}</span>
                    <span className="stat-label">На согласовании</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{myTasks.filter(t => t.status === 'completed').length}</span>
                    <span className="stat-label">Выполнено</span>
                </div>
            </div>

            {/* Таблица */}
            <div className="table-container">
                <div className="table-scroll">
                    <table className="tasks-table">
                        <thead>
                            <tr>
                                <th>Название / Тип</th>
                                <th>Сделать до</th>
                                <th>Автор</th>
                                <th>Дата создания</th>
                                <th>Приоритет</th>
                                <th>Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task) => (
                                <tr key={task.id}>
                                    <td>
                                        <div className="task-title">{task.title}</div>
                                        <div className="task-description">{task.description}</div>
                                    </td>
                                    <td className={task.dueDate ? '' : 'no-date'}>
                                        {task.dueDate || '—'}
                                    </td>
                                    <td>{task.author}</td>
                                    <td>{task.created}</td>
                                    <td>
                                        <span className={`badge priority-${task.priority}`}>
                                            {task.priority === 'high' && 'Высокий'}
                                            {task.priority === 'medium' && 'Средний'}
                                            {task.priority === 'low' && 'Низкий'}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge status-${task.status}`}>
                                            {task.status === 'in_progress' && 'В работе'}
                                            {task.status === 'pending' && 'На согласовании'}
                                            {task.status === 'completed' && 'Выполнено'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Tasks;