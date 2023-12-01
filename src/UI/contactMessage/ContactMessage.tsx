import React, { useRef } from 'react';
import style from './ContactMessage.module.css'
import {useShowMessage} from './customHook'


const ContactMessage: React.FC = () => {
  const wrappRef = useRef<HTMLDivElement>(null)
  useShowMessage(wrappRef)

  return (
    <div
      ref={wrappRef}
      className={style.wrapper}
    >
      <div className={style.inscript}>Илья Мишков</div>
      <div className={style.inscript}>8 977 439 34 18</div>
    </div>
  );
}
export default ContactMessage;