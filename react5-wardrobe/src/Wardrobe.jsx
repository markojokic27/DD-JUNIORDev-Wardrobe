import "./App.css";
import DisplayForm from "./components/DisplayForm/DisplayForm";
import InputForm from "./components/InputForm/InputForm";

function Wardrobe() {
  return (
      <div className="wardrobe">
        <h1>Moja garderoba</h1>
        <div className="wardrobe__wrapper">
          <InputForm />
          <DisplayForm/>
        </div>
      </div>
  );
}
export default Wardrobe;