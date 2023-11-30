import React, { useEffect, useRef } from 'react';
import style from './Greeting.module.css';
import { ReactComponent as LogoReact } from "../../assets/img/svg/react-svgrepo.svg"
import {ReactComponent as LogoRedux} from "../../assets/img/svg/redux-svgrepo.svg"
import {ReactComponent as LogoTypeScript} from "../../assets/img/svg/typescript-svgrepo.svg"
import { useGreeting } from "./customHooks"



const Greeting: React.FC<{ title: string }> = ({ title }) => {
  const greetingRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGreeting(greetingRef, titleRef, containerRef )

  return (
    <div
      ref={greetingRef}  
      className={style.wrapper}
    >
      <div
        ref={containerRef}
        className={style.logoBlock}
      >
        <LogoRedux className={style.logoRedux} />
        <LogoReact className={style.logoReact} />
        <LogoTypeScript className={style.logoTypeScript} />
      </div>
      
      <div
        ref={titleRef}
        className={style.title}
      >
        {title}
      </div>
      
    </div>
  );
}
export default Greeting;