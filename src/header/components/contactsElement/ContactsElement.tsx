import React from 'react';
import style from './ContactsElement.module.css'
import { ReactComponent as PersonSvg } from '../../../assets/img/svg/person.svg'
import { ReactComponent as PhoneSvg } from '../../../assets/img/svg/phone-2.svg'

const ContactsElement:React.FC = () => {
  return (
    <div className={style.contacts}>
      <div className={style.contactsItem}>
        <PersonSvg className={style.svgImgLittle} />
        <span>Илья Мишков</span>
      </div>

      <div className={style.contactsItem}>
        <PhoneSvg className={style.svgImgLittle} />
        <span>8-977-439-34-18</span>
      </div>
    </div>
  );
}
export default ContactsElement;