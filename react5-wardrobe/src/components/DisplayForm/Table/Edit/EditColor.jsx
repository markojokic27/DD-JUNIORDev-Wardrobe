import classes from "./index.module.css";
function EditColor(props) {
  function inputChange(event) {
    const { name, value } = event.target;
    props.setData({ ...props.data, [name]: value });
    console.log(props.data);
  }

  return (
    <label className={classes.editSelect}>
      <input
        type="color"
        name={props.name}
        value={props.value}
        onChange={inputChange}
        className={classes.selectInput__color}
      ></input>
    </label>
  );
}

export default EditColor;
