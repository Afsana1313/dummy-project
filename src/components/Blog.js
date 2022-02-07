import React, { useEffect,useState } from 'react';
import { baseUrl, ApiKey } from '../static/api'
import '../style/blog.css'
import BlogPost from './BlogPost';
//https://newsapi.org/v2/everything?q=keyword&apiKey=
function Blog() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}${ApiKey}`)
      .then(res => res.json())
      .then((res) => {
        setArticle(res.articles);
        console.log(res.articles)
      }
      )
  },[])
  return <div className='blog-container'>
     <h2>Blog Posts</h2>
    <div className='blog-grid'>
      {
        article.map(i => {
          
          return   <BlogPost
                      key={i.title}
                      article={i}
                  />
        })
        }   
           
      
    </div>
  </div>;
}

export default Blog;
