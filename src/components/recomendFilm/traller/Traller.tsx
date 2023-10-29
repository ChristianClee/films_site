import React from 'react';
import style from './Traller.module.css'

type TrallerT = { trailer: string }

const Traller: React.FC<TrallerT> = ({ trailer }) => {
  return (
    <div>
      <iframe
        className={style.video}
        src={trailer}
        title="YouTube video player"

        allow="accelerometer;
          autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
    </div>
  );
}
export default Traller;