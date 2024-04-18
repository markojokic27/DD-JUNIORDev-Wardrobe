import classes from "./index.module.css";
function ColorInput(props) {
  function inputChange(event) {
    const { name, value } = event.target;
    props.setData({ ...props.data, [name]: value });
  }

  return (
    <label className={classes.selectInput}>
      {props.label}:
      <input
        type="color"
        name={props.name}
        value={props.data[props.name]}
        onChange={inputChange}
        className={classes.selectInput__color}
      ></input>
    </label>
  );
}
export default ColorInput;
