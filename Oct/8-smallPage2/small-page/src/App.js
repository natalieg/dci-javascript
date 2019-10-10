import React from 'react';
import './App.css';
import Header from './Components/Header';
import NaviItem from './Components/Navi';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      <Header name="Page Title" desc="This is a React Webpage"
        height="150" />

      <ul className="naviBar">
        <NaviItem name="First" link="#one" />
        <NaviItem name="Second" link="#two" />
        <NaviItem name="Third" link="#three" />
        <NaviItem name="Whatever" link="http://www.google.com" />
      </ul>

      <Content id="one" img="/imgCon/ocean1.jpeg" title="First Section" subtitle="Here are many information" content="Lorem ipsum d do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim labore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad adsfadsf minim veniam, quve sdfsdf niam, qu Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia etc...."/>
      <Content id="two" title="Second Section" subtitle="Here are many information" content="Lorem ipsum d do eiusmod tempor incididunt ut laborelabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qu et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sdfsdf voluptate velit esse cillum dolore eu fugia etc...."/>
      <Content id="three" title="Third Section" subtitle="Here are many information" content="Lorem ipsum d do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irurlabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua. Ut enim ad minim veniam, qulabore et dolore magna aliqua.sdfdsf  Ut ensdfsdf im ad minim veniam, que dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia etc...."/>

    </div>
  );
}

export default App;
