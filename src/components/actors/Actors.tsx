import React from 'react';
import style from './Actors.module.css'
import { PicturesId, TipeT } from '../types'
import ScrollLine from '../scrollLine/ScrollLine';


const Actors: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {




  
  const actors: TipeT[] = filmData
    .persons
    .map(elem => elem )
    .filter((elem, index) => elem !== null )

  
  return (
    <div className={style.wrapper}>
      <ScrollLine pictures={null} actors={actors} title='Актёры' />
    </div>
  )
}
export default Actors;



