import { Contenedor } from "../../ejemplos/Contenedor/Contenedor"
import { Item } from "../Item/Item"


export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>     
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}