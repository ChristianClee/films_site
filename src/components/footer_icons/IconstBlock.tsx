import React from 'react';
import style from './IconstBlock.module.css';
import {ReactComponent as Telegramm} from "#assets/img/svg/telegram.svg"
import {ReactComponent as Twitter} from "#assets/img/svg/twitter.svg"
import { ReactComponent as YouTube } from "#assets/img/svg/youtube.svg"
import { ReactComponent as Vk } from "#assets/img/svg/vk.svg"


const IconstBlock:React.FC = () => {
  return (
    <div className={style.sosials}>
      <Telegramm className={style.sosial} />
      <Twitter className={style.sosial} />
      <YouTube className={style.sosial} />
      <Vk className={style.sosial} />
    </div>
  );
}
export default IconstBlock;