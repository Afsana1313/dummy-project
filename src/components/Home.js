import React from 'react';
import image from '../static/Afsana_Zaman_Nipa.jpg'
function Home() {
  return <div className='home-container'>
    <img
      className='homepage-img'
      src={image}
      alt='Afsana Zaman Nipa'
    />
    <h3>Assalamu Alaikum</h3>
    <h3>My Name is Afsana Zaman. And I am a Front End Developer.</h3>
    <h3>Nice to meet you.</h3>
  </div>;
}

export default Home;
