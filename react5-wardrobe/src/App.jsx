import "./App.css";
import Wardrobe from "./Wardrobe.jsx";

import { FormProvider } from './formContext.jsx';
function App() {
  return (
    <FormProvider>
      <div className="app">
        <Wardrobe />
      </div>
    </FormProvider>
  );
}
export default App;
