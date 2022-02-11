import React from 'react'
import img from "../../imagenes/imagenes";
import monu from "../../imagenes/monu.jpg"
export const ElMasGrande = () => {
 
    const styles = {
      card: {
        margin: "50px auto",
        display: "flex",
        jutifyContent: "start",
        alignItems: "start",
        width: "65%",
        height: "900px",
        border: "solid 10px",
        backgroundImage: `url(${monu})`,
        backgroundSize: "cover",
        zIndex: "12",
        opacity: ".9",
      },
      img: {
        width: "150px",
        margin: "15px",
        borderRadius: "20px",
        zIndex: "22",
        opacity: ".5",
      },
    };

    return (
      <div style={styles.card}>

        <img style={styles.img} src={img.img21} />
      </div>
    );
}

