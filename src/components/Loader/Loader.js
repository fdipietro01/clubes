import React from 'react';
import loader from "../../imagenes/loading.jpg"

export const Loader = () => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "100px",
        },
        img: {
            width: "500px",
            marginTop: "40px",
        }
    }
    return (
        <div style={styles.container}>
             <h1>Cargando...</h1>
            <img style={styles.img} src={loader} alt="loader"/>
        </div>
    );
};

