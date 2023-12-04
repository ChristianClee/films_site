import React from 'react';
import style from './Footer.module.css';
import IconstBlock from "#components/footer_icons/IconstBlock"
import { ReactComponent as Apple } from "#assets/img/svg/apple.svg"
import { ReactComponent as Googleplay } from "#assets/img/svg/googleplay.svg"
import { ReactComponent as Huawei } from "#assets/img/svg/huawei.svg"
import { ReactComponent as Bitcoin } from "#assets/img/svg/bitcoin.svg"
import BusinessLink from '#components/footer_bisiness/BusinessLink';
import FooterOffers from '#components/footer_offers/FooterOffers';
import AdditionalInfo from '#components/footer_additional-info/AdditionslInfo';




const Footer:React.FC = () => {
  return (
    <footer>
    
      <div className='container'>
       
        <div className={style.wrapper}>
          <IconstBlock />
          <FooterOffers />
          <BusinessLink/>
          <AdditionalInfo/>
        </div>
        

      </div>
    </footer>
  );
}
export default Footer;
