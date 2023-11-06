import React from 'react';
import style from './LikedItem.module.css'
import type { PicturesId } from "../../types"
import StarsRaiting from '../../starsRaiting/StarsRaiting';
import Raiting from '../../previewPage_items/raiting/Raiting';



const LikedItem: React.FC<{ filmItem: PicturesId }> = ({ filmItem }) => {
  return (
    <div className={style.wrapper}>
      {/* {
        filmItem &&
        filmItem.poster &&
        filmItem.poster.previewUrl &&
        <img src={filmItem.poster?.previewUrl} alt="" />
      }
      <h3> {filmItem.name}</h3>
      <Raiting filmData={filmItem} sizeSrars='1.5rem'/> */}
    
    </div>
  );
}
export default LikedItem;