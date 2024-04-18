import { useContext, useEffect } from "react";
import Filter from "./Filter/Filter";
import Table from "./Table/Table";
import classes from "./index.module.css";
import axios from "axios";
import { FormContext } from "../../formContext";

function DisplayForm() {
  const { setClothes, setFilteredClothes } = useContext(FormContext);

  useEffect(() => {
    axios.get("http://localhost:3001/clothes/").then((res) => {
      setClothes(res.data);
      setFilteredClothes(res.data);
      console.log(res.data);
    });
  }, [setClothes, setFilteredClothes]);
  return (
    <div className={classes.displayForm}>
      <Filter />
      <Table />
    </div>
  );
}
export default DisplayForm;
