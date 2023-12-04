import React from 'react';
import style from './FooterOffers.module.css'
import LinkText from '#UI/link_text/LinkText';


const FooterOffers:React.FC = () => {
  return (
    <ul className={style.content}>
      <LinkText text={"Вакансии"} />
      <LinkText text={"Реклама"} />
      <LinkText text={"Соглашение"} />
      <LinkText text={"Правила рекомендаций"} />
      <LinkText text={"Справка"} />
      <LinkText text={"Блог"} />
      <LinkText text={"Кинопоиск PRO"} />
      <LinkText text={"Все фильмы"} />
      <LinkText text={"Все сериалы"} />
      <LinkText text={"Что посмотреть"} />
      <LinkText text={"Служба поддержки"} />
    </ul>
  );
}
export default FooterOffers;