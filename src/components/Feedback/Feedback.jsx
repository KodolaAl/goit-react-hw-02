import css from "./Feedback.module.css";
const Feedback = ({ values }) => {
  return (
    <div className={css.box}>
      <p className={css.text}>Good: {values.good}</p>
      <p className={css.text}>Neutral: {values.neutral}</p>
      <p className={css.text}>Bad: {values.bad}</p>
    </div>
  );
};
export default Feedback;
