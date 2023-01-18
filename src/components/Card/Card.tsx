import React, { useState } from 'react';
import { VariantArrayType } from '../../types/types';
import styles from './Card.module.css';

function Card(props: VariantArrayType) {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onClick = () => {
    if (!props.outOfStock) {
      setIsSelected(!isSelected);
    }
  };

  const mouseEnter = () => {
    const current = isSelected;
    if (current) {
      setIsHovered(true);
    }
  };

  const mouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <section
        className={props.outOfStock ? styles.card_disabled : styles.card}
        onClick={onClick}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <div className={styles.card__top}>
          <div
            className={
              isSelected && !isHovered
                ? styles.card__corner_selected
                : isSelected && isHovered
                ? styles.card__corner_hovered
                : props.outOfStock
                ? styles.card__corner_disabled
                : styles.card__corner
            }
          ></div>
          <div
            className={
              isSelected && !isHovered
                ? styles.card__slogan_wrapper_selected
                : isSelected && isHovered
                ? styles.card__slogan_wrapper_hovered
                : props.outOfStock
                ? styles.card__slogan_wrapper_disabled
                : styles.card__slogan_wrapper
            }
          >
            <p
              className={
                isSelected && isHovered
                  ? styles.card__slogan_selected
                  : props.outOfStock
                  ? styles.card__slogan_disabled
                  : styles.card__slogan
              }
            >
              {isSelected && isHovered ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
            </p>
          </div>
        </div>
        <div
          className={
            isSelected && !isHovered
              ? styles.card__bottom_selected
              : isSelected && isHovered
              ? styles.card__bottom_hovered
              : props.outOfStock
              ? styles.card__bottom_disabled
              : styles.card__bottom
          }
        >
          <h2 className={props.outOfStock ? styles.card__title_disabled : styles.card__title}>
            Нямушка
          </h2>
          <p className={props.outOfStock ? styles.card__taste_disabled : styles.card__taste}>
            {props.taste}
          </p>
          <p
            className={
              props.outOfStock ? styles.card__description_disabled : styles.card__description
            }
          >
            {props.description}
          </p>
          <div
            className={
              isSelected && !isHovered
                ? styles.card__oval_selected
                : isSelected && isHovered
                ? styles.card__oval_hovered
                : props.outOfStock
                ? styles.card__oval_disabled
                : styles.card__oval
            }
          >
            <span className={styles.card__oval_weight}>{props.weight}</span>
            <span className={styles.card__oval_kg}>кг</span>
          </div>
        </div>
      </section>
      {isSelected ? (
        <div className={styles.card__sign}>{props.sign}</div>
      ) : props.outOfStock ? (
        <div className={styles.card__sign_disabled}>{`Печалька, ${props.taste} закончился.`}</div>
      ) : (
        <div className={styles.card__sign}>
          <span className={styles.card__sign_text}>Чего сидишь? Порадуй котэ, </span>
          <span className={styles.card__sign_link} onClick={onClick}>
            купи.
          </span>
        </div>
      )}
    </>
  );
}

export default Card;
