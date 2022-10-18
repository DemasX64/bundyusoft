import React, { FC } from 'react';
import Calculator from './components/calculator';
import styles from './app.module.css';

const App: FC = () => {
  const { app } = styles;
  return (
    <div className={app}>
      <Calculator />
    </div>
  );
};

export default App;
