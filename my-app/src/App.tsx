// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from 'antd/es/button';
import ButtonTest from './General/ButtonTest'
import TypoTest from './General/TypoTest';
import GridTest from './General/GridTest';
import LayoutTest from './General/LayoutTest';
import AffixTest from './Navigation/AffixTest';
import BreadcrumbTest from './Navigation/BreadcrumbTest';
import PaginationTest from './Navigation/PaginationTest';
import HeaderTest from './Navigation/HeaderTest';
// import DropdownTest from './Navigation/DropdownTest';
// import MenuTest from './Navigation/Menutest';
// import StepTest from './Navigation/Steptest';


function App() {
  return (
    <div className="App">
     
      <ButtonTest />
      <hr />
      <TypoTest />
      <hr />
      <GridTest />
      <br />
      <br />
      <hr />
      <LayoutTest />
      <hr />
      <AffixTest />
      <hr />
      <BreadcrumbTest />
      <hr />
      {/* <DropdownTest /> */}
      {/* <hr /> */}
      {/* <MenuTest /> */}
      {/* <hr /> */}
      <PaginationTest />
      <hr />
      <HeaderTest />
      {/* <hr /> */}
      {/* <StepTest /> */}
    </div>
  );
}

export default App;