import React,{useState} from 'react';
import '../style/sidepanel.css'
import {
  Link
} from "react-router-dom";
import {CloseOutlined} from '@ant-design/icons'

function SidePanel(props) {
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
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </nav>

  </div>;
}

export default SidePanel;
