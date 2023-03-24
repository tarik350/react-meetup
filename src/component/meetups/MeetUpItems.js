import classes from "./MeetupItems.module.css";
import Card from "../ui/Card";

const MeetUpItems = ({ title, description, address, image, id }) => {
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
          <button>To Favorites</button>
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
