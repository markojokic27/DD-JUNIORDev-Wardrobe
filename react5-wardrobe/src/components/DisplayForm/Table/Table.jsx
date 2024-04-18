import { useContext } from "react";
import { FormContext } from "../../../formContext";
import classes from "./index.module.css";
import TableRow from "./TableRow";

function Table() {
  const { filteredClothes } = useContext(FormContext);
  return (
    <div className={classes.table}>
      <h2>Popis</h2>
      <table>
        <thead>
          <tr>
            <th>Vrsta</th>
            <th>Veličina</th>
            <th>Boja</th>
            <th>Slika</th>
            <th>Opcije</th>
          </tr>
        </thead>
        <tbody>
          {filteredClothes.map((c, index) => (
            <TableRow key={index} item={c} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
