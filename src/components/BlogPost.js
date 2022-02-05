import React from 'react';

function BlogPost({ article}) {
    return <div>
     {article.author} {article.url}{article.urlToImg}
  </div>;
}

export default BlogPost;
