import React from "react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  return(
    <div className="tabs">
      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/uah-usd'>UAH to USD</NavLink></li>
        <li><NavLink to='/uah-eur'>UAH to EUR</NavLink></li>
        <li><NavLink to='/uah-pln'>UAH to PLN</NavLink></li>
      </ul>
    </div>
  )
}