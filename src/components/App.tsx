import React from 'react';
import classes from './app.module.scss'
import {Link, Outlet} from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Link to={'/about'}>About</Link>
      <Link to={'/shop'}>Shop</Link>
      <button className={classes.button}>+</button>
      <Outlet/>
    </div>
  );
};

