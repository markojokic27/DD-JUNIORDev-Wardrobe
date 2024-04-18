import classes from "./index.module.css";
function ImageInput(props) {
  function inputChange(event) {
    const { name, value } = event.target;
    props.setData({ ...props.data, [name]: value });
  }
  function handlePaste(event) {
    const { name } = event.target;
    const pasteData = event.clipboardData.getData("URL");
    props.setData({ ...props.data, [name]: pasteData });
    console.log(props.data);
  }
  return (
    <label className={classes.selectInput}>
      {props.label}:
      <input
        type="text"
        name={props.name}
        value={props.data[props.name]}
        onChange={inputChange}
        onPaste={handlePaste}
        placeholder="URL slike"
        required
        className={classes.selectInput__image}
      />
    </label>
  );
}
export default ImageInput;
