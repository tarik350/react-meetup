import { useState, useEffect } from "react";
import MeetUpItems from "../component/meetups/MeetUpItems";
import MeetupList from "../component/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ]; ///react components can not be async
const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);
  useEffect(
    () => {
      fetch(
        "https://react-getting-started-47577-default-rtdb.firebaseio.com/meetups.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];

          for (let key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };

            meetups.push(meetup);
            console.log(meetups);
          }
          setIsLoading(false);
          setMeetupData(meetups);

          //when the data is ready set it to state variable
          //that holds the data
          //WHATEVER YOU WANT TO DO WITH THE DATA
        });
    },
    [
      //this specify dependencies
      //for now our app don't have any external dependecies
      //
    ]
  );

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div className="container">
      <h1>All meetups</h1>
      <MeetupList meetups={meetupData} />
    </div>
  );
};

export default AllMeetupsPage;
