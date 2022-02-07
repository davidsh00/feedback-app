import { v4 as uuidV4 } from "uuid";
import { useEffect } from "react";
import { useContext } from "react";
import FeedbackContex from "../contex/FeedbackContex";
import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import NewFeedbackRating from "./NewFeedbackRating";
function FeedbackForm() {
  const { AddFeedback, feedbackEdit ,feedbackUpdate  } = useContext(FeedbackContex);
  const [input, setinput] = useState("");
  const [isDisable, setisDisable] = useState(true);
  const [message, setmessage] = useState("");
  const [rating, setRating] = useState(10);
  useEffect(
    function () {
      if (feedbackEdit.edit) {
          setisDisable(false)
          setinput(feedbackEdit.item.text);
          setRating(feedbackEdit.item.rating);
    }
    },
    [feedbackEdit]
  );

  const handleChange = (e) => {
    let elem = e.target.value;
    if (elem === "") {
      setisDisable(true);
      setmessage("");
      setinput("");
    } else if (elem.trim().length < 10) {
      setisDisable(true);
      setinput(elem);
      setmessage("you must Enter above 10 characters");
    } else {
      setisDisable(false);
      setinput(e.target.value);
      setmessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length < 10) return null;
    const newFeedback={text:input,rating}
    if(feedbackEdit.edit===true){
        feedbackUpdate(feedbackEdit.item.id,newFeedback)

    }else{
    AddFeedback({ id:uuidV4(),...newFeedback });
    }
    setinput("");
    setRating(10);
  };

  return (
    <Card>
      <form
        className="feedback-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <NewFeedbackRating setRating={setRating} rate={rating} />
        <div className="input">
          <input
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="input your opinion"
            value={input}
          ></input>
          <Button isDisable={isDisable}>send</Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
