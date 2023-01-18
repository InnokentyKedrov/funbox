import React from 'react';
import styles from './App.module.css';
import Card from './components/Card/Card';
import { variantArray } from './const/const';

function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.app__title}>Ты сегодня покормил кота?</h1>
      <ul className={styles.app__list}>
        {variantArray.map((el) => {
          return (
            <li className={styles.app__item} key={el.taste}>
              <Card
                taste={el.taste}
                description={el.description}
                sign={el.sign}
                weight={el.weight}
                outOfStock={el.outOfStock}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
