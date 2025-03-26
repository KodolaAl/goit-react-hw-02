import css from "./Feedback.module.css";
const Feedback = ({ feedback, positiveFeedback, totalFeedback }) => {
  return (
    <div className={css.box}>
      <p className={css.text}>Good: {feedback.good}</p>
      <p className={css.text}>Neutral: {feedback.neutral}</p>
      <p className={css.text}>Bad: {feedback.bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positive: {positiveFeedback}%</p>
    </div>
  );
};
export default Feedback;
