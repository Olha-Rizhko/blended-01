import style from './ForbesList.module.css';
import { ForbesListItem } from '../ForbesListItem/ForbesListItem';

export const ForbesList = ({ forbes }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbes.map(forbeEl => {
          return (
            <li key={forbeEl.id} className={style.item}>
              <ForbesListItem
                name={forbeEl.name}
                capital={forbeEl.capital}
                avatar={forbeEl.avatar}
                isIncrease={forbeEl.isIncrease}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
