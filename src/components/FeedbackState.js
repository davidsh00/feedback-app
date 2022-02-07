import {useContext} from 'react';
import FeedbackContex from '../contex/FeedbackContex';
function FeedbackState() {
  const {Feedbacks}=useContext(FeedbackContex)
    //calculate raiting avg
    let average=Feedbacks.reduce((prev,cur)=>{
        return prev+cur.rating;
    },0)/Feedbacks.length
    average=isNaN(average)?0:average.toFixed(1).replace(/[.,]0+/,"")
  return (
    <div className="feedback-state">
      <h4>{Feedbacks.length} review</h4>
      <h4>average: {average}</h4>
    </div>
  );
}
export default FeedbackState;
