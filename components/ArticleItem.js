import React from 'react';
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    // <Link href='/article/[id]' as={`/article/${article.id}`}>
    <Link href={`/article/${article.id}`}>
      <a className='card'>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
