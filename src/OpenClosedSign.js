// import react from 'react';

export default function OpenClosed({ zooIsOpen }) {
  return (
    <div className={zooIsOpen ? 'open' : 'closed'}>
      {zooIsOpen ? (
        <h3> Get ready to see the fight!!!</h3>
      ) : (
        <h1>Ohh no! you missed, maybe next time</h1>
      )}
    </div>
  );
}
