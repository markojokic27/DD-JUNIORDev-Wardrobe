import classes from "./index.module.css";
function EditSelect(props) {
  function inputChange(event) {
    const { name, value } = event.target;
    props.setData({ ...props.data, [name]: value });
  }

  return (
    <label className={classes.editSelect}>
      <select
        name={props.name}
        value={props.data[props.name]}
        onChange={inputChange}
        required
      >
        {props.options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default EditSelect;
