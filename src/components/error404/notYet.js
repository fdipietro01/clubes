import React from 'react'
import muñe from "../../imagenes/muñe.jpg"
export const NotYet = () => {
 
    const styles = {
      card: {
        margin: "50px auto",
        display: "flex",
        jutifyContent: "space-b",
        alignItems: "center",
        width: "55%",
        height: "400px",
      
        borderRadius: "40px",
        background: "rgb(255,255,255)",
        background: "linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(201,0,0,1) 50%, rgba(255,255,255,1) 90%)",
      },
      img: {
        width: "300px",
        margin: "10px 50px",
        borderRadius: "100%",
        zIndex: "22",
      },
      p: {
          fontSize: "75px",
          fontWeight:"bold",
          color: "white"
      }
    };

    return (
      <div style={styles.card}>
        <img style={styles.img} src={muñe} />
        <p style={styles.p}>Aún no estás listo para esta conversación...</p>
      </div>
    );
}