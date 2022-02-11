import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router"
import { Loader } from "../Loader/Loader"

 
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const   {catId} = useParams()   

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if(catId){
                
                    setProductos( res.filter((el)=> el.categoria === catId));
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

    }, [])

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