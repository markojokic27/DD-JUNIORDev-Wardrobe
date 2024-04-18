import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../../formContext";

function Filter() {
  const { setFilteredClothes, clothes } = useContext(FormContext);
  const [filter, setFilter] = useState("Sve");

  const handleFilterChange = (e) => {
    if (e.target.value === "Sve") {
      setFilter("Sve");
      return setFilteredClothes(clothes);
    }
    setFilter(e.target.value);
    setFilteredClothes(
      clothes.filter((item) => item.type.includes(e.target.value))
    );
  };

  return (
    <div className={classes.filter}>
      <h3>Filter:</h3>
      <p>
        <input
          type="radio"
          value="Sve"
          checked={filter === "Sve"}
          onChange={handleFilterChange}
        />
        Sve
      </p>
      <p>
        <input
          type="radio"
          value="Hlaće"
          checked={filter === "Hlaće"}
          onChange={handleFilterChange}
        />
        Hlaće
      </p>
      <p>
        <input
          type="radio"
          value="Majica"
          checked={filter === "Majica"}
          onChange={handleFilterChange}
        />
        Majica
      </p>
      <p>
        <input
          type="radio"
          value="Jakna"
          checked={filter === "Jakna"}
          onChange={handleFilterChange}
        />
        Jakna
      </p>
    </div>
  );
}
export default Filter;
