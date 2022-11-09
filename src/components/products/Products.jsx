import React, { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { ProductsData } from '../../data/products';
import Plane from '../../assets/plane.png';
import css from './Products.module.css';

const Products = () => {
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const [parent] = useAutoAnimate();

  const handleFilter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt='plane' />
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => handleFilter('skin care')}>Skin Care</li>
          <li onClick={() => handleFilter('conditioner')}>Conditioners</li>
          <li onClick={() => handleFilter('foundation')}>Foundations</li>
        </ul>
        <div className={css.list} ref={parent}>
          {menuProducts.map((product, i) => (
            <div className={css.product} key={i}>
              <div className='left-s'>
                <div className='name'>
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>${product.price}</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt={product.name} className='img-p' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
