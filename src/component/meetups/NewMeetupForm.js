import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

const NewMeetupForm = ({ addNewMeetup }) => {
  ///useRef is a great hook that allows us to read the value of an input feild

  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    if (enteredAddress && enteredTitle && enteredDescription && enteredImage) {
      addNewMeetup(meetupData);
      //   console.log(meetupData);
    } else {
      console.log("fill all form");
    }
  };
  return (
    <div>
      <Card>
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">meetup title</label>
            <input id="title" ref={titleInputRef} required type="text"></input>
          </div>
          <div className={classes.control}>
            <label onChange={submitHandler} htmlFor="image">
              meetup image
            </label>
            <input id="image" required type="url" ref={imageInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="address">meetup address</label>
            <input
              id="address"
              ref={addressInputRef}
              required
              type="text"
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="description">meetup description</label>
            <textarea
              id="description"
              ref={descriptionInputRef}
              required
              type="text"
              rows="5"
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={submitHandler}>Add meetup</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewMeetupForm;
