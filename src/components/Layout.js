import React,{useState} from 'react';
import SidePanel from './SidePanel'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import WholeLayout from './WholeLayout';
import '../style/routecontainer.css'
import { MenuOutlined } from '@ant-design/icons';
function Layout() {
  const [isClose, setIsClose] = useState(true)
  return <div>
            <Router>
             <div className='route-container'>
                    <span
                      className='hamburger-menu'
                      onClick={()=> setIsClose(!isClose)}
                      >
                      <MenuOutlined />
                    </span>
                    <SidePanel
                      isClose={isClose}
                      onClick={()=> setIsClose(true)}
                       />
                  <Routes>
                  
                    <Route path="/blog" element={<WholeLayout><Blog /></WholeLayout>} />
                    <Route path="/contact" element={  <WholeLayout><Contact /></WholeLayout>}/>
                    <Route path="/" element={<WholeLayout><Home /></WholeLayout>}/>
                      
                  </Routes>
            </div>
          </Router>
        
     </div>;
}

export default Layout;
