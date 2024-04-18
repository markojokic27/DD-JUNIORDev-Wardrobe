import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [clothes, setClothes] = useState([]);
  const [filteredClothes, setFilteredClothes] = useState([clothes]);
  const [types, setTypes] = useState([]);
  const [sizes, setSizes] = useState([]);

  const contextValue = {
    clothes,
    setClothes,
    filteredClothes,
    setFilteredClothes,
    types,
    setTypes,
    sizes,
    setSizes,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};