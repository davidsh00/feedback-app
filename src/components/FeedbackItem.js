import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react';
import FeedbackContex from '../contex/FeedbackContex';
import PropTypes from 'prop-types'
import Card from "./shared/Card";
function FeedbackItem({feedback:{id,rating=1,text="no content"}}) {
  const {DeletFeedback,editFeedback}=useContext(FeedbackContex)
  return (
    <Card >
        <div className="feedback-rating">{rating}</div>
        <button className='btn close' onClick={()=>DeletFeedback(id)}>
          <FaTimes style={{color:'purple'}}></FaTimes>
        </button>
        <button className='btn edit' onClick={()=>editFeedback({id,rating,text})}><FaEdit style={{color:'purple'}}/></button>
        <div className="feedback-text">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes={
  feedback:PropTypes.object
}

export default FeedbackItem;
