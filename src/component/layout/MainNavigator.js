import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigator.module.css";
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";

const MainNavigator = () => {
  const favortieContext = useContext(FavoriteContext);
  const favCount = favortieContext.totalFavorites;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add new meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My favorites</Link>
            <span className={classes.badge}>{favCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigator;
