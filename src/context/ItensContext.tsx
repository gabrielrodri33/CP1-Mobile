import React, { createContext } from "react";
import DadosItens from "../data/dataItens";
import DadosDevs from "../data/dataDevs";

const ItensContext = createContext({});

export const ItensProvider = (props) => {
  return (
    <ItensContext.Provider
      value={{
        estado: { DadosItens },
        group: { DadosDevs },
      }}
    >
      {props.children}
    </ItensContext.Provider>
  );
};

export default ItensContext;
