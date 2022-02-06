import React from 'react';

function WholeLayout({children}) {
    return <div id='container' className='container'>
      {children}
  </div>;
}

export default WholeLayout;
