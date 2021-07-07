import React from 'react';
import Link from 'next/link';

const ArticleItem = () => {
  return (
    <Link href='/article/[id]' as={`article/${article.id}`}>
      <a className='card'>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
