import React from 'react';
import ArticleItem from '../components/ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.title}>{article.title}</div>
      ))}
      {/* // <ArticleItem article={article} />; */}
    </div>
  );
};

export default ArticleList;
