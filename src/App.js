import React from 'react';
import logo from './logo.svg';
import './App.css';

import LineChart from './Linechart'
import BarChart from './Barchart';


class App extends React.Component {
  render()
  {
    return (
      <div className='box'>
        <LineChart/>
        <BarChart/>
      </div>
    );
  }
  
}

export default App;
