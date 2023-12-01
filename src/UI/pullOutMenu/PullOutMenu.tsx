import React from 'react';
import style from './PullOutMenu.module.css'
import FilterElement from '../filterElement/FilterElement';


const PullOutMenu: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.innerContainer}>

          <ul className={style.ul}>
            <li>
              <FilterElement />
            </li>
            <li>
              <FilterElement />
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
export default PullOutMenu;