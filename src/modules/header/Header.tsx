import React from 'react';

import style from './Header.module.css'
import grid from './HeaderGrid.module.css'

import Search from '#UI/input_search/Search';
import ContactsElement from '#UI/contactsElement/ContactsElement';
import ItemsElements from '#UI/ItemsElements/ItemsElements';
import BurgerMenuBig from '#UI/link_Big/BurgerMenuBig';
import BurgerMenuLittle from '#UI/burgerMenuLittle/BurgerMenuLittle';
import PullOutMenu from '#UI/pullOutMenu/PullOutMenu';
import { SEARCHFILMPAGE } from '#constants/paths'
import { Link } from 'react-router-dom'


const Header: React.FC = () => {


  return (
    <header>
      <div className={[style.containerGreed, grid.container].join(" ")}>

        <div className={[style.flexAlighnContainer, grid.burger].join(" ")}>
          <BurgerMenuBig />
        </div>


        <div className={[style.flexAlighnContainer, grid.contacts].join(" ")}>
          <ContactsElement />
        </div>


        <div className={[style.flexAlighnContainer, grid.search].join(" ")}>
          <Search />
        </div>

        <div className={[style.flexAlighnContainer, grid.items].join(" ")}>
          <ItemsElements />
        </div>

        {/* <div className={[style.flexAlighnContainer, grid.burger].join(" ")}>
          <BurgerMenuLittle/>
        </div> */}


        {/* <div className={[style.flexAlighnContainer, grid.logo].join(" ")}>
          <LogoElement />
        </div> */}

      </div>
      {/* <PullOutMenu/> */}

    </header>
  );
}
export default Header;








