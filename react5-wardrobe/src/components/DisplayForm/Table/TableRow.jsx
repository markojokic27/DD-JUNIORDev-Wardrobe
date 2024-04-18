import axios from "axios";
import classes from "./index.module.css";
import { useContext, useState } from "react";
import EditSelect from "./Edit/EditSelect";
import EditColor from "./Edit/EditColor";
import EditImage from "./Edit/EditImage";
import { FormContext } from "../../../formContext";

function TableRow(props) {
  const [editClicked, setEditClicked] = useState(false);
  const { setClothes, setFilteredClothes, types, sizes } =
    useContext(FormContext);
  const [localData, setLocalData] = useState({
    id: props.item.id,
    type: props.item.type,
    size: props.item.size,
    color: props.item.color,
    image: props.item.image,
  });

  async function saveEdit() {
    await axios.put(
      `http://localhost:3001/clothes/${props.item.id}`,
      localData
    );
    const response = await axios.get("http://localhost:3001/clothes/");
    setClothes(response.data);
    setFilteredClothes(response.data);
    setEditClicked(false);
  }

  function handleEdit() {
    setEditClicked(true);
  }

  async function handleDelete() {
    console.log("delete", props.item.id);
    await axios.delete(`http://localhost:3001/clothes/${props.item.id}`);
    const response = await axios.get("http://localhost:3001/clothes/");
    setClothes(response.data);
    setFilteredClothes(response.data);
  }

  const handleLocalDataChange = (name, value) => {
    setLocalData({ ...localData, [name]: value });
  };

  return (
    <tr className={classes.tableRow}>
      <td>
        {!editClicked && props.item.type}
        {editClicked && (
          <EditSelect
            name="type"
            value={localData.type}
            setData={handleLocalDataChange}
            data={localData}
            options={types}
          />
        )}
      </td>
      <td>
        {!editClicked && props.item.size}
        {editClicked && (
          <EditSelect
            name="size"
            value={localData.size}
            setData={handleLocalDataChange}
            data={localData}
            options={sizes}
          />
        )}
      </td>
      <td>
        {!editClicked && (
          <div
            className={classes.tableRow__color}
            style={{ backgroundColor: props.item.color }}
          ></div>
        )}
        {editClicked && (
          <EditColor
            name="color"
            value={localData.color}
            setData={handleLocalDataChange}
            data={localData}
          />
        )}
      </td>
      <td>
        {!editClicked && (
          <img
            src={props.item.image}
            alt="image"
            className={classes.tableRow__img}
          />
        )}
        {editClicked && (
          <EditImage
            name="image"
            value={localData.image}
            setData={handleLocalDataChange}
            data={localData}
          />
        )}
      </td>
      <td>
        <div className={classes.tableRow__buttons}>
          {editClicked && (
            <button className={classes.tableRow__saveButton} onClick={saveEdit}>
              Spremi
            </button>
          )}
          {!editClicked && (
            <button
              className={classes.tableRow__editButton}
              onClick={handleEdit}
            >
              Uredi
            </button>
          )}
          <button onClick={handleDelete}>Izbriši</button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
