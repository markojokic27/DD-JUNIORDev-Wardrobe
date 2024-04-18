import classes from "./index.module.css";
function SelectInput(props) {
  function inputChange(event) {
    const { name, value } = event.target;
    props.setData({ ...props.data, [name]: value });
  }

  return (
    <label className={classes.selectInput}>
      {props.label}:
      <select
        name={props.name}
        value={props.data[props.name]}
        onChange={inputChange}
        required
      >
        <option value="">
          --Odaberi {props.label.toLowerCase().slice(0, -1) + "u"}--
        </option>
        {props.options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}
export default SelectInput;
