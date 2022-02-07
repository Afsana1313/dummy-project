import React,{useEffect} from 'react';
import '../style/sidepanel.css'
import {
  Link
} from "react-router-dom";
import {CloseOutlined} from '@ant-design/icons'

function SidePanel(props) {
 
  useEffect(() => {
     const container = document.getElementById('container')
   container.addEventListener('click', () => {
     if(props.isClose) props.onClick();
   })
    return () => {
      window.removeEventListener('click')
    };
  }, [])
  const sidepanelStyle = {
    left: props.isClose ? `-100%` : 0
  }
  return <div
            className='sidepanel'
            style={sidepanelStyle}>
            <span
              className='close-btn'>
              <CloseOutlined
                    onClick={props.onClick}
              />
            </span> 
            <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>

  </div>;
}

export default SidePanel;
