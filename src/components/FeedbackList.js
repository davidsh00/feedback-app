import { motion,AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContex from "../contex/FeedbackContex";
function FeedbackList() {
  const {Feedbacks}=useContext(FeedbackContex)
  if (!Feedbacks || Feedbacks.length === 0) {
    return <p className="text-white">there is no feedback</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {Feedbacks.map((feedback, i) => (
          <motion.div key={i}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
          <FeedbackItem key={i} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default FeedbackList;
