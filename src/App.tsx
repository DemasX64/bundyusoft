import React, { FC } from 'react';
import Div100vh from 'react-div-100vh';
import Calculator from './components/calculator';
import styles from './app.module.css';

const App: FC = () => {
  const { app } = styles;
  return (
    <Div100vh className={app}>
      <Calculator />
    </Div100vh>
  );
};

export default App;
