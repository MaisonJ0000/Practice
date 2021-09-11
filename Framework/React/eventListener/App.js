import React from 'react';
const App = () => (
  <div>
    <div className='child1'>
      <p> hi yo </p>
      <button onClick={() => { console.log('jongman')}}> click here</button>
      <button onClick={() => { console.log('jongman2')}}> click here2</button>
    </div>
  </div>
);
export default App;
