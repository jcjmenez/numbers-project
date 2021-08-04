import React from 'react';
import { Link } from 'react-router-dom';
import SidebarData from '../sidebar/SidebarData';
import './Home.css';

const Home = () => (
  <>
    <div className="home">
      <h1>Home</h1>
    </div>
    <div className="about">
      <h2>What is Numbers project?</h2>
      <p>Numbers project is a website that lets you visualize algorithms such as: </p>
      <ul>
        {SidebarData.map((data) => (
          data.id === 1
            ? ''
            : (
              <li key={data.id} className="algorithms">
                <Link to={{ pathname: data.wiki }} target="_blank">
                  {data.icon}
                  <span>{data.title}</span>
                </Link>
              </li>
            )
        ))}
      </ul>
      <h2>How do I start?</h2>
      <p>Click on the hamburguer icon, select an algorithm and start experimenting</p>
    </div>
  </>
);

export default Home;
