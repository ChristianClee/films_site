import React from 'react';
import style from './ContactMessage.module.css'
import { useSelector } from 'react-redux';
import { selectFilm } from '../../redux/selectors/filmSelector';


const ContactMessage: React.FC = () => {
  const { popUpContacts } = useSelector(selectFilm)
  const wrapper = popUpContacts ? [style.wrapper, style.wrapperActive].join(" ") : style.wrapper
  return (
    <div className={wrapper}>
      <div className={style.inscript}>Илья Мишков</div>
      <div className={style.inscript}>8 977 439 34 18</div>
    </div>
  );
}
export default ContactMessage;