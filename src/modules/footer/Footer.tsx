import React from 'react';
import style from './Footer.module.css';
import {ReactComponent as Telegramm} from "#assets/img/svg/telegram.svg"
import {ReactComponent as Twitter} from "#assets/img/svg/twitter.svg"
import { ReactComponent as YouTube } from "#assets/img/svg/youtube.svg"
import { ReactComponent as Vk } from "#assets/img/svg/vk.svg"

import { ReactComponent as Apple } from "#assets/img/svg/apple.svg"
import { ReactComponent as Googleplay } from "#assets/img/svg/googleplay.svg"
import { ReactComponent as Huawei } from "#assets/img/svg/huawei.svg"
import { ReactComponent as Bitcoin } from "#assets/img/svg/bitcoin.svg"




const Footer:React.FC = () => {
  return (
    <footer>
      <div className='container'>
        <div className={style.wrapper}>
          <div className={style.sosials}>
            <Telegramm className={style.sosial} />
            <Twitter className={style.sosial} />
            <YouTube className={style.sosial} />
            <Vk className={style.sosial} />
          </div>

          <ul className={style.content}>
            <li>
              <button className={style.item}><p>Вакансии</p> </button>
            </li>
            <li>
              <button className={style.item}><p>Реклама</p></button>
            </li>
            <li>
              <button className={style.item}><p>Соглашение</p></button>
            </li>
            <li>
              <button className={style.item}><p>Правила рекомендаций</p></button>
            </li>
            <li>
              <button className={style.item}><p>Справка</p></button>
            </li>
            <li>
              <button className={style.item}><p>Блог</p></button>
            </li>
            <li>
              <button className={style.item}><p>Кинопоиск PRO</p></button>
            </li>
            <li>
              <button className={style.item}><p>Предложения</p></button>
            </li>
            <li>
              <button className={style.item}><p>Все фильмы</p></button>
            </li>
            <li>
              <button className={style.item}><p>Все сериалы</p></button>
            </li>
            <li>
              <button className={style.item}><p>Что посмотреть</p></button>
            </li>
            <li>
              <button className={style.item}><p>Служба поддержки</p></button>
            </li>
          </ul>

          <div className={style.apps}>
            <div className={style.app}>
              <Apple className={style.iconLogo} />
              <div className={style.text}>
                <span className={style.subtitle}>загрузка в</span>
                <span className={style.title}>App Store</span>
              </div>
            </div>
            <div className={style.app}>
              <Googleplay className={style.iconLogo} />
              <div className={style.text}>
                <span className={style.subtitle}>загрузка в</span>
                <span className={style.title}>App Store</span>
              </div>

            </div>
            <div className={style.app}>
              <Bitcoin className={style.iconLogo} />
              <div className={style.text}>
                <span className={style.subtitle}>загрузка в</span>
                <span className={style.title}>App Store</span>
              </div>

            </div>
            <div className={style.app}>
              <Huawei className={style.iconLogo} />
              <div className={style.text}>
                <span className={style.subtitle}>загрузка в</span>
                <span className={style.title}>App Store</span>
              </div>

            </div>
          </div>

          <div className={style.basement}>
            <div className={style.years}>2003-2023, кино <span>18+</span></div>
            <ul className={style.ulBasMent}>
              <li>
                <button className={style.item}>
                  <p>Телепрограмма</p>
                </button>
              </li>
              <li>
                <button className={style.item}>
                  <p>музыка</p>
                </button>
              </li>
              <li>
                <button className={style.item}>
                  <p>Афиша</p>
                </button>
              </li>
              <li>
                <button className={style.item}>
                  <p>Букмейт</p>
                </button>
              </li>
            </ul>
            <div className={style.progectName}>Проект <span>Mishkov</span> production</div>
          </div>

        </div>
        

      </div>
    </footer>
  );
}
export default Footer;
