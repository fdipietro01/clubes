

import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from './../Loader/Loader';

export const ItemDetailContainer =()=>{

    const {id}= useParams()
    const[loading,setLoading] =useState(false)
    const[item,setItem] = useState(null)

    console.log("este es mi id" + id)
    useEffect(()=>{
        setLoading(true)

        pedirDatos()
          .then((res)=>{
              const itemFiltrado = res.find((club)=>club.id === Number(id))
              console.log(itemFiltrado)
              setItem(itemFiltrado)

          })
          .finally((res)=>{
              setLoading(false)
          })

    },[id])

    return(
        <div className="container my-5">
            {
                loading ? <Loader/> : <ItemDetail {...item} />



            }

        </div>
           
    )

}