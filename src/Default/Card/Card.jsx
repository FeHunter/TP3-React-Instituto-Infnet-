import style from './Card.module.css';

export function Card({ children }) {
  return <div className={style.Card}>{children}</div>;
}
