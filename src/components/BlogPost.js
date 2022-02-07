import React from 'react';

function BlogPost({ article }) {
  
  return <div className='single-blog-post'>
    
      <img
        className='single-blog-post-img'
          src={`${article.urlToImage}`}
        />
    <div className='single-blog-post-text'>
      <h3>{article.title}</h3>
      <span className='published-time'>{article.publishedAt.slice(0,10)}</span>
      <span className='content'>{article.content}</span>
      <span><i>published by - </i>{article.author}</span><br />
      <a href={article.url} target="_blank">Visit Main Post</a>
    </div>
    
  </div>;
}

export default BlogPost;
