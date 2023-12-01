import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectFilm } from '../../redux/selectors/filmSelector';
import { action } from "./utilits"
import type {MutateObj} from "./types"



export function useShowMessage(wrappRef:MutateObj) {
  const { popUpContacts } = useSelector(selectFilm)
  
  useEffect(() => {
      
    action(wrappRef, popUpContacts);
   }, [popUpContacts])
}


