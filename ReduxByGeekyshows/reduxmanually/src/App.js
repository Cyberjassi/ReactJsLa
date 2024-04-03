
import './App.css';
import { useState } from 'react';
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';
import Theme from './features/theme/theme';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <Coin></Coin>
    <Theme></Theme>

    </div>
  );
}

export default App;
