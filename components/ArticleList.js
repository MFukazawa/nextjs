import React from 'react';
import ArticleItem from '../components/ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <div className='grid'>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.title} />
      ))}
    </div>
  );
};

export default ArticleList;
