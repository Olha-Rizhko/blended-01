import { formatDate } from 'helpers/date';
import style from './CryptoHistory.module.css';

const tableHeaders = ['№', 'price', 'amount', 'date'];

export const CryptoHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map(el => (
            <th key={el} className={style.th}>
              {el}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {transactions.map((el, i) => (
          <tr key={el.id} className={style.tr}>
            <td className={style.td}>{i + 1}</td>
            <td className={style.td}>{el.price}</td>
            <td className={style.td}>{el.amount}</td>
            <td className={style.td}>{formatDate(el.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
