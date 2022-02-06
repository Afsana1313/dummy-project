import React, { useEffect,useState } from 'react';
import { baseUrl, ApiKey } from '../static/api'
import '../style/blog.css'
import BlogPost from './BlogPost';
//https://newsapi.org/v2/everything?q=keyword&apiKey=
function Blog() {
  const [article, setArticle] = useState([]);
  var d = [1,2,3,4,5,6]
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
