import React from 'react';
import style from './BusinessLink.module.css'
import { ReactComponent as Apple } from "#assets/img/svg/apple.svg"
import { ReactComponent as Googleplay } from "#assets/img/svg/googleplay.svg"
import { ReactComponent as Huawei } from "#assets/img/svg/huawei.svg"
import { ReactComponent as Bitcoin } from "#assets/img/svg/bitcoin.svg"
import LinkStore from '#UI/link_store/LinkStore';



const BusinessLink:React.FC = () => {
  return (
    <div className={style.apps}>
      <LinkStore SVG={Apple} text={"App Store"} />
      <LinkStore SVG={Googleplay} text={"App Googleplay"} />
      <LinkStore SVG={Huawei} text={"App Huawei"} />
      <LinkStore SVG={Bitcoin} text={"App Bitcoin"} />
    </div>
  );
}
export default BusinessLink;