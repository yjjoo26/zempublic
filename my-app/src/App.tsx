import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'antd/es/button';

function App() {
  return (
    <div className="App">
      test
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
    </div>
  );
}

export default App;
