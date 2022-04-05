import React from 'react';
import Tree from './components/Tree';
import './App.scss';

import { data } from './dataMock';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Tree data={data} />
      </div>
    </div>
  );
}

export default App;
