import React from 'react';
import classes from './app.module.scss'
import {Link, Outlet} from "react-router-dom";
import cubsPhoto from '../assets/cubs.png'
import unnamedPhoto from '../assets/unnamed.jpg'
import IconSvg from '../assets/free-icon-font-chart-histogram-5528038.svg'


export const App = () => {

  function func() {
    func2()
  }
  function func2() {
    throw new Error()
  }

  const click = () => {
    func()
  }

  return (
    <div>
      <div>
        <img width={100} height={100} src={cubsPhoto} />
        <img width={100} height={100} src={unnamedPhoto}/>
        <IconSvg style={{color: 'green'}} />
      </div>
      <Link to={'/about'}>About</Link>
      <Link to={'/shop'}>Shop</Link>
      <button className={classes.button} onClick={click}>+</button>
      <Outlet/>
    </div>
  );
};

