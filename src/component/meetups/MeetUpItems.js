import classes from "./MeetupItems.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";

const MeetUpItems = ({ title, description, address, image, id }) => {
  const favoriteContext = useContext(FavoriteContext);
  const isItemFavorite = favoriteContext.itemIsFavorite(id);
  const toggleFavoriteButtonStatus = () => {
    ///first add the to favorites list
    //call addFavorites
    //then change the to favorite to remove favorite
    if (isItemFavorite) {
      favoriteContext.removeFavorite(id);
    } else {
      favoriteContext.addFavorite({
        id,
        title,
        address,
        image,
        description,
      });
      // console.log(favoriteContext.favorites);
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img alt="image" src={image} />
        </div>
        <div className={classes.content}>
          <p>{title}</p>
          <p>{description}</p>
          <p>{address}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteButtonStatus}>
            {isItemFavorite ? "Remove From Favorite" : "To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

MeetUpItems.defaultProps = {
  title: "TITLE",
  description: "DESCRIPTION",
  address: "ADDRESS",
};

export default MeetUpItems;
