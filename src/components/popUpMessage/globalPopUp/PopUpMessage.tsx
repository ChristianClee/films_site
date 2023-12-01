import React from 'react';
import style from './PopUpMessage.module.css'
import { useSelector } from 'react-redux';
import { selectFilm } from '../../../redux/selectors/filmSelector';
import { useActions } from '../../../hooks/redux';

type PopUpMessageT = {
  children: React.ReactNode

}

const PopUpMessage: React.FC<PopUpMessageT> = ({ children }) => {
  const { popUpContacts } = useSelector(selectFilm)
  const { togglePopUpContacts } = useActions()

  const backFon: string = popUpContacts ? style.backFonActive : ""

  return (
    <div
      className={backFon}
      onClick={() => togglePopUpContacts()}
    >
      {children} 
    </div>
  );
}
export default PopUpMessage;