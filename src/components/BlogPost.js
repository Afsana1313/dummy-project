import React from 'react';

function BlogPost({ article}) {
  return <div className='single-blog-post'>
    
      <img
        className='single-blog-post-img'
          src={`${article.urlToImage}`}
        />
  
    
  </div>;
}

export default BlogPost;
