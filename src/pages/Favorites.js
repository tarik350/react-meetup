import Card from "../component/ui/Card";
import { useContext } from "react";
import FavoriteContext from "../store/favorite-context";
import MeetUpItems from "../component/meetups/MeetUpItems";
import MeetupList from "../component/meetups/MeetupList";

const FavoritesPage = () => {
  const favoriteContext = useContext(FavoriteContext);
  const favorites = favoriteContext.favorites;
  return (
    <div>
      <MeetupList meetups={favorites} />
    </div>
  );
};

export default FavoritesPage;
