import css from "./Options.module.css";

const Options = () => {
  return (
    <div className={css.box}>
      <button className={css.button}>Good</button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
    </div>
  );
};
export default Options;
