import Card from "../component/ui/Card";
import { useContext } from "react";
import classes from "./FavoritePage.module.css";
import FavoriteContext from "../store/favorite-context";
import MeetUpItems from "../component/meetups/MeetUpItems";
import MeetupList from "../component/meetups/MeetupList";

const FavoritesPage = () => {
  const favoriteContext = useContext(FavoriteContext);
  const favorites = favoriteContext.favorites;

  let content;

  if (favoriteContext.totalFavorites === 0) {
    content = (
      <p className={classes.verticalCenter}>
        your fav list is empty try adding some
      </p>
    );
  } else {
    content = <MeetupList meetups={favorites} />;
  }
  return (
    <div>
      <h1>My Favorites</h1>
      {content}
    </div>
  );
};

export default FavoritesPage;
