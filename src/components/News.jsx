import React from 'react';
import NewsItem from './NewsItem';

export const News = ({ news }) => {
  return (
    <>
      {news.map((item, index) => (
        <NewsItem key={index} newsItem={item}/>
      ))}
    </>
  );
};

export default News;
