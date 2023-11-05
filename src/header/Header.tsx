import React from 'react';

import style from './Header.module.css'
import grid from './HeaderGrid.module.css'

import Search from './components/search/Search';
import LogoElement from './components/logoElement/LogoElement';
import ContactsElement from './components/contactsElement/ContactsElement';
import ItemsElements from './components/ItemsElements/ItemsElements';
import BurgerMenuBig from './components/burgerMenuBig/BurgerMenuBig';
import BurgerMenuLittle from './components/burgerMenuLittle/BurgerMenuLittle';
import PullOutMenu from './components/pullOutMenu/PullOutMenu';
import { SEARCHFILMPAGE } from '../rout_path/paths'
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
  

  return (
    <header className={style.header}>
      <div className={[style.containerGreed, grid.container].join(" ")}>

        <div className={[style.flexAlighnContainer, grid.logo].join(" ")}>
          <LogoElement/>
        </div>

        
        <div className={[style.flexAlighnContainer, grid.contacts].join(" ")}>
          <ContactsElement/>
        </div>
        
        
        <div className={[style.flexAlighnContainer, grid.search].join(" ")}>
          <Search/>
        </div>

        <div className={[style.flexAlighnContainer, grid.items].join(" ")}>
          <ItemsElements/>
        </div>
        
        <div className={[style.flexAlighnContainer, grid.burger].join(" ")}>
          <BurgerMenuLittle/>
        </div>

        <div className={[style.flexAlighnContainer, grid.burger].join(" ")}>
          <BurgerMenuBig/>
        </div>
        
      </div>
      {/* <PullOutMenu/> */}
      
    </header>
  );
}
export default Header;








