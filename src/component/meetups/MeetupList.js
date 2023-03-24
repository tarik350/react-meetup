import classes from "./MeetupList.module.css";
import MeetUpItems from "./MeetUpItems";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((data, index) => {
        return (
          <MeetUpItems
            key={data.id}
            id={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
            address={data.address}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
