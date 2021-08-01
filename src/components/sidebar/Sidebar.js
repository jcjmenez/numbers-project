import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import './Sidebar.css';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="sidebar">
          <Link to="/#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          <ul className="sidebar-menu-items">
            {SidebarData.map((data) => (
              <li key={data.id} className={data.className}>
                <Link to={data.path} onClick={showSidebar}>
                  {data.icon}
                  <span>{data.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
