import { IconContext } from 'react-icons';

import styled from './Statistics.module.css';
export const StatisticsItem = ({ title, total, icon }) => {
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ color: 'blue', size: 26 }}>
        {icon}
      </IconContext.Provider>
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title} </p>
    </li>
  );
};
