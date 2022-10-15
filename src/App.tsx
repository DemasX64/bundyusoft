import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator';
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);


  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
