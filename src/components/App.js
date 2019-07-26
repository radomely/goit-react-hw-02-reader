import React from 'react';
import Reader from './Reader/Reader';
import publications from '../publications.json';

function App() {
  return <Reader items={publications} />;
}

export default App;
