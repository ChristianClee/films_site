import React from 'react';
import style from './Indicator.module.css'


const Indicator: React.FC<{ length: number, count: number }> = ({length, count}) => {
  return (
    <div className={style.indicator}>
      {Array(5).fill("").map((item, index) => {

        const part = 100 / length
        const left = part * index + part / length
        const remain = count % length
        const backgr = (index === remain) ? "white" : ""
        const border = (index === remain) ? "rgb(250,250,250)" : "rgb(250,250,250)"

        return (
          <span
            className={style.ball}
            style={{ left: `${left}%`, background: backgr, border: `1px solid ${border}` }}
            key={`${count} + ${index}`}
          >
          </span>
        )
      })}
    </div>
  );
}
export default Indicator;