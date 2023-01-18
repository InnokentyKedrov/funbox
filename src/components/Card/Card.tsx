import React from 'react';
import styles from './Card.module.css';

function Card() {
  return (
    <>
      <section className={styles.card}>
        <div className={styles.card__top}>
          <div className={styles.card__corner}></div>
          <div className={styles.card__slogan_wrapper}>
            <p className={styles.card__slogan}>Сказочное заморское яство</p>
          </div>
        </div>
        <div className={styles.card__bottom}>
          <h2 className={styles.card__title}>Нямушка</h2>
          <p className={styles.card__taste}>с фуа-гра</p>
          <p className={styles.card__description}>10 порций{'\n'}мышь в подарок</p>
          <div className={styles.card__oval}>
            <span className={styles.card__oval_weight}>0,5</span>
            <span className={styles.card__oval_kg}>кг</span>
          </div>
        </div>
      </section>
      <div className={styles.card__sign}>
        <span className={styles.card__sign_text}>Чего сидишь? Порадуй котэ, </span>
        <span className={styles.card__sign_link}>купи</span>
      </div>
    </>
  );
}

export default Card;
