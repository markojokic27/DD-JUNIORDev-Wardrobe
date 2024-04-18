import classes from "./index.module.css";

function EditImage(props) {
  function inputChange(event) {
    const { name, value } = event.target;
    props.setData({ ...props.data, [name]: value });
  }

  function handlePaste(event) {
    const { name } = event.target;
    const pasteData = event.clipboardData.getData("URL");
    props.setData({ ...props.data, [name]: pasteData });
  }

  return (
    <label className={classes.editSelect}>
      <input
        type="text"
        name={props.name}
        value={props.data[props.name]}
        onChange={inputChange}
        onPaste={handlePaste}
        className={classes.selectInput__image}
      />
    </label>
  );
}

export default EditImage;
