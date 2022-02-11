import { Card } from "react-bootstrap";
export const ItemDetail = ({
  id,
  nombre,
  img,
  procedencia,
  titulos,
  estadio,
  clasicoRival,
  categoria,
}) => {
    const styles = { 
        card: { display:"flex", flexDirection:"row", width: "75rem", padding: "35px 20px 35px 0px"},
        field:{ fontSize: "25px", fontWeight: "500"},
        title:{ fontSize: "40px", fontWeight: "bold", display:"flex", justifyContent: "space-around", marginBottom: "40px"},
        img: {width:"30%", marginRight: "50px"},
    }
  return (
    <div>
      <Card style={styles.card}>
      <Card.Img style={styles.img} src={img} />
      <Card.Body style={styles.body}>
          <Card.Title style={styles.title}>{nombre}</Card.Title>
          <p style={styles.field}>Estadio: {estadio}</p>
          <p style={styles.field}>Titulos profesionales: {titulos}</p>
          <p style={styles.field}>Procedencia: {procedencia}</p>
          <p style={styles.field}>Clásico rival: {clasicoRival}</p>
    </Card.Body>
      </Card>
    </div>
  );
};
