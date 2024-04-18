import { useContext, useEffect, useState } from "react";
import classes from "./index.module.css";
import axios from "axios";
import SelectInput from "./Inputs/SelectInput";
import ColorInput from "./Inputs/ColorInput";
import ImageInput from "./Inputs/ImageInput";
import { FormContext } from "../../formContext";

export function InputForm() {
  const { setClothes, setFilteredClothes, types, setTypes, sizes, setSizes } =
    useContext(FormContext);
  const [data, setData] = useState({
    type: "",
    size: "",
    color: "#000000",
    image: "",
  });
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/types"),
      axios.get("http://localhost:3001/sizes"),
    ])
      .then(([resTypes, resSizes]) => {
        setTypes(resTypes.data);
        setSizes(resSizes.data);
      })
      .catch((err) => console.log(err.message));
  }, [setSizes, setTypes]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3001/clothes", data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(() => {
        axios.get("http://localhost:3001/clothes/").then((response) => {
          setClothes(response.data);
          setFilteredClothes(response.data);
        });
      });
    setData({ ...data, type: "", size: "", color: "#000000", image: "" });
  }

  return (
    <div className={classes.inputForm}>
      <h2>Dodaj novu</h2>
      <form className={classes.inputForm__container} onSubmit={handleSubmit}>
        <SelectInput
          name="type"
          value={data.type}
          setData={setData}
          data={data}
          options={types}
          label="Vrsta"
        />
        <SelectInput
          name="size"
          value={data.size}
          setData={setData}
          data={data}
          options={sizes}
          label="Veličina"
        />
        <ColorInput
          name="color"
          value={data.color}
          setData={setData}
          data={data}
          label="Boja"
        />
        <ImageInput
          name="image"
          value={data.image}
          setData={setData}
          data={data}
          label="Slika"
        />
        <button type="submit" className={classes.inputForm__button}>
          Dodaj
        </button>
      </form>
    </div>
  );
}
export default InputForm;
