import React, { useState } from 'react';
import { CgShoppingBag } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';

import Logo from '../../assets/logo.png';
import css from './Header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt='Amazon' /> <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>
        <ul
          className={css.menu}
          style={{ display: showMenu ? 'inherit' : 'none' }}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input type='text' className={css.search} placeholder='Search...' />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
