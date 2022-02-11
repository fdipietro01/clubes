

import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from './../Loader/Loader';

export const ItemDetailContainer =()=>{

    const[loading,setLoading] =useState(false)
    const[item,setItem] = useState(null)

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
          .then((res)=>{
              setItem(res[0] )

          })
          .finally((res)=>{
              setLoading(false)
          })

    },[])



    return(
        <div className="container my-5">
            {
                loading ? <Loader/> : <ItemDetail {...item} />



            }

        </div>
           
    )

}