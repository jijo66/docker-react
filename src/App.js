import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Buuuda!!! Dokero! hii Stuff inataka kubembelezwa ka mtoto. 
          Inauma but si ni life. Alafu sasa uongeze sijui travis sijui aws! weh! wagwan!
          But Finally! oyaaa!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// docker run -p 3000:3000 -v /app/node_modules -v ${pwd}:/app CONTAINER_ID