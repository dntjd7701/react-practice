import React from 'react';
import logo from './assets/images/logo.svg';
// import styles from './assets/css/App.css';
import './assets/css/App.css';
// module 방식, 하지만 config에서 모듈 사용 x로 설정했으므로 수정 클래스 이름으로.

function App() {
  return (
    <div className={'.App'}>
      <header className={styles["App-header"]}>
        <img src={logo} className={'App-logo'} alt="logo" />
        <p>
          React 1 Week 
        </p>
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
