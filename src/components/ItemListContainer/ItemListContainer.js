import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router"
import { Loader } from "../Loader/Loader"

 
export const ItemListContainer = () => {

    const {clubesid} = useParams()
    console.log("categoría es " + clubesid)
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if(clubesid){
                const filtrados = res.filter((club) => club.categoria === clubesid);
                setProductos(filtrados)
            }else{
                    setProductos(res)
                }

                
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [clubesid])

    console.log(productos)

    return (
        <>
            {
                loading 
                    ? <Loader/>
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}