import React from 'react';
import logo from './logo.svg';
import styles from './App.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          React 1 Week 
        </p>
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
