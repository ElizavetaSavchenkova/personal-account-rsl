import React, { useState } from 'react';
import './News.css';
import rgbImage from '../../assets/images/rgb.jpg';
import newsImage from '../../assets/images/rgb.jpg'
import rgbImg2 from '../../assets/images/rgb2.jpg'
import rgbImg3 from '../../assets/images/rgb3.jpg'
import rgbImg4 from '../../assets/images/rgb4.jpg'
import rgbImg5 from '../../assets/images/rgb5.jpg'
import rgbImg6 from '../../assets/images/rgb6.jpg'
import rgbImg7 from '../../assets/images/rgb7.jpg'

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все новости' },
    { id: 'culture', name: 'Культура' },
    { id: 'social', name: 'Социальная сфера' },
    { id: 'chanel GD', name: 'Канал ГД' },
    { id: 'library', name: 'Библиотека' },
    { id: 'events', name: 'События' },
  ];

  //const newsImage = 'https://via.placeholder.com/800x400/0d4cd3/ffffff?text=Будущее+библиотек';

  const news = [
      {
      id: 1,
      category: 'social',
      categoryName: 'Социальная сфера',
      time: '12:02',
      title: 'Национальный центр «Россия» проведёт «Уроки географии»',
      excerpt: 'В апреле Национальный центр «Россия» представит выставочный проект «Уроки географии»...',
      image: rgbImg2,
      date: '23.03.2026'
    },
    {
      id: 2,
      category: 'culture',
      categoryName: 'Культура',
      time: '12:00',
      title: 'Будущее библиотек',
      excerpt: 'Стартовал второй сезон Всероссийского конкурса молодых лидеров библиотечного дела',
      image: rgbImage,
      date: '13.03.2026'
    },
  
    {
      id: 3,
      category: 'economy',
      categoryName: 'Культура',
      time: '10:05',
      title: 'Презентация книги «Испания в огне»',
      excerpt: 'Российская государственная библиотека 17 марта провела презентацию книги Пола Престона «Испания в огне»...',
      image: rgbImg6,
      date: '23.03.2026'
    },
    {
      id: 4,
      category: 'social',
      categoryName: 'Благотворительность',
      time: '07:01',
      title: 'В Ленинке поговорят о сказках',
      excerpt: 'Радио РБК и Российская государственная библиотека запускают серию оффлайн-мероприятий...',
      image: rgbImg7,
      date: '23.03.2026'
    },
    {
      id: 5,
      category: 'library',
      categoryName: 'Библиотека',
      time: 'Вчера, 18:30',
      title: 'Выставка «Ход конём»',
      excerpt: 'Выставка, посвящённая китайскому Новому году, стала доброй традицией Центра восточной литературы...',
      image: rgbImg5,
      date: '19.03.2026'
    },
  ];

  const sideBlocks = [
    {
      id: 1,
      title: 'Уважаемые коллеги!',
      text: 'В связи с проблемами доступа в интернет в Москве возможны сбои при подключении к вай-фаю Библиотеки',
      color: 'blue',
      icon: '📶'
    },
    {
      id: 2,
      title: 'Внимание!',
      text: 'С 10 по 23 марта кофейня в третьем подъезде не работает.',
      color: 'red',
      image: '🥤'
    },
    {
      id: 3,
      title: 'Временно закрыты!',
      text: 'До 23 марта — читальный зал отдела рукописей будет закрыт',
      color: 'beige',
      image: '📚'
    },
    {
      id: 4,
      title: 'Новое расписание!',
      text: 'В расписание читального зала РГБ в ЕМиЦТ в апреле внесены изменения',
      color: 'green',
      image: '⏰'
    },
  ];

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(n => n.category === selectedCategory);

  const mainNews = filteredNews[0];
  const gridNews = filteredNews.slice(1, 5); // Берём 4 новости для сетки

  return (
    <div className="news-page">
      <h1 className="page-title">В разработке</h1>


    </div>
  );
};

export default News;