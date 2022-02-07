import { createContext, useState } from "react";
const FeedbackContex = createContext();
export const FeedbackProvider = ({ children }) => {
  const [Feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      rating: 10,
      text: "this feedback from context1",
    },
    {
      id: 2,
      rating: 7,
      text: "this feedback from context2",
    },
    {
      id: 3,
      rating: 1,
      text: "this feedback from context3",
    },
  ]);
  const [feedbackEdit,setFeedbackEdit]=useState({
    item:{},
    edit:false
  })

  const DeletFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedbacks(Feedbacks.filter((item) => item.id !== id));
    }
  };
  const AddFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...Feedbacks]);
  };
  const editFeedback=(item)=>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }
  const feedbackUpdate=(id,updFeedback)=>{
    setFeedbacks(Feedbacks.map(item=>item.id===id?{...updFeedback}:item))
    
    setFeedbackEdit({item:{},edit:false})
  }
  return (
    <FeedbackContex.Provider value={ {Feedbacks ,DeletFeedback,AddFeedback,editFeedback,feedbackEdit,feedbackUpdate}}>
      {children}
    </FeedbackContex.Provider>
  );
};
export default FeedbackContex;
