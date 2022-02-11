import { Button, Card } from "react-bootstrap"
import {Link} from "react-router-dom"


export const Item = ( {id, nombre, precio, img, desc} ) => {

    return (
      <Card style={{ width: "16rem", margin: "25px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            {nombre}
          </Card.Title>

          <Link to={`detalle/${id}`}>
            <Button variant="primary" className="container my-2 ">
              Ver más
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
} 

//<Button variant="success" className="container " >Comprar</Button>

/*<Card.Text>
{desc}
</Card.Text>*/