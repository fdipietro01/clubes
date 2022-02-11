import React from "react";
import { ItemList } from "../ItemList/ItemList";


export const Champions = ({ clubs, kind }) => {
  const name = ()=> kind === "campeonesmundiales"? "Campeones Mundiales Argentinos" : "Campeones Continentales Argentinos"
  
  const styles = {
    card:{
      textAlign: "center", 
      backgroundColor:"orange", 
      fontStyle:"italic",
    }
  }
  return (
    <div>
      <h1 style={styles.card}>{name()}</h1>
      <ItemList productos={clubs} />
    </div>
  );
};
