import React, { createContext } from "react";
import DadosItens from "../data/database";

const ItensContext = createContext({});

export const ItensProvider = (props) => {
  return (
    <ItensContext.Provider value={{ estado: { DadosItens } }}>
      {props.children}
    </ItensContext.Provider>
  );
};



export default ItensContext;
