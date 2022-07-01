import { useState } from 'react';
import './App.css';
import OpenClosed from './OpenClosedSign';
import VisitorList from './services/VisitorList';

function App() {
  const [lionSize, setLionSize] = useState(10);
  const [elephantSize, setElephantSize] = useState(10);
  const [zooIsOpen, setZooIsOpen] = useState(true);
  const [visitors, setVisitors] = useState(['woman', 'man', 'standing', 'couple']);

  function handleWomanClick() {
    visitors.push('woman');
    setVisitors(visitors.slice());
  }
  function handleManClick() {
    visitors.push('Man');
    setVisitors(visitors.slice());
  }
  function handleStandingClick() {
    visitors.push('standing');
    setVisitors(visitors.slice());
  }
  function handleCoupleClick() {
    visitors.push('couple');
    setVisitors(visitors.slice());
  }
  function handleKickVisitor() {
    visitors.pop();
    setVisitors(visitors.slice());
  }
  return (
    <div className="App">
      <div className="fight">
        <div className="animals">
          <img src="lion3.png" width={10 * lionSize} />
          <div className="buttons"></div>
          <button onClick={() => setLionSize(lionSize + 1)}>
            oh no! The lion is getting hungry 😋
          </button>
          <button onClick={() => setElephantSize(elephantSize - 1)}>
            The lion ate the Elephant 😕
          </button>
        </div>
      </div>
      <div className="fight"></div>
      <div className="elephant">
        <img src="elephant.png" width={10 * elephantSize} />
        <div className="buttons"></div>
        <button onClick={() => setElephantSize(elephantSize + 1)}>
          Wow! The elephant is eating a lion 😨
        </button>
        <button onClick={() => setLionSize(lionSize - 1)}>Crikey 😱 😱 😱 !!!</button>
      </div>
      <OpenClosed zooIsOpen={zooIsOpen} />
      <button onClick={() => setZooIsOpen(!zooIsOpen)}>Ready to see the fight?</button>
      <VisitorList visitors={visitors} />
      <button onClick={handleWomanClick}>Add Woman</button>
      <button onClick={handleManClick}>Add Man</button>
      <button onClick={handleStandingClick}>Add Standing</button>
      <button onClick={handleCoupleClick}>Add Couple</button>
      <button onClick={handleKickVisitor}>kick out last visitor</button>
    </div>
  );
}

export default App;
