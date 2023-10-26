import React, {useEffect, useRef} from 'react';
import style from './TouchLine.module.css'


const TouchLine: React.FC<{ pictures: string[] }> = ({ pictures }) => {
  const lineRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (lineRef.current) {
      console.log(lineRef.current.getBoundingClientRect().width)
    }
    
  },[])
  
  return (
    <div className={style.wrapper}>
      <div className={style.line} ref={lineRef}>
        {
          pictures.map((item, index) => {
            return <img className={style.elem} src={item} alt="" key={`${item} ${index}` } />
          })
        }
      </div>
    </div>
  );
}
export default TouchLine;