import React from "react";
import NewMeetupForm from "../component/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const addNewMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-47577-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(meetupData),
      }
    ).then(() => {
      navigate("/");
      console.log("done");
    });
  };
  return (
    <div>
      <h1> ADD NEW MEETUP</h1>
      <NewMeetupForm addNewMeetup={addNewMeetupHandler} />
    </div>
  );
};

export default NewMeetupPage;
