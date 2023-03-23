import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/es/button';
// import Menu from 'antd';
import { Button, Menu, Dropdown, Icon } from 'antd';


function App() {


  return (
    <div className="App">

    <Menu>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>

    </div>
  );
}

export default App;
