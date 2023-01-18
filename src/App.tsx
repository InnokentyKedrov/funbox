import React from 'react';
import styles from './App.module.css';
import Card from './components/Card/Card';

function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.app__title}>Ты сегодня покормил кота?</h1>
      <ul className={styles.app__list}>
        <li className={styles.app__item}>
          <Card />
        </li>
        <li className={styles.app__item}>
          <Card />
        </li>
        <li className={styles.app__item}>
          <Card />
        </li>
      </ul>
    </main>
  );
}

export default App;
