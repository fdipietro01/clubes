import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { pedirDatos } from "../../helpers/pedirDatos";
import { Loader } from "../Loader/Loader";
import { Champions } from './../Champions/Champions';

export const ChampsContainer = () => {
  const { catId } = useParams();
  const [champs, setChamps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    pedirDatos().then((res) => {
      switch (catId) {
        case "campeonesmundiales":
          setChamps(res.filter((club) => club.campeonMundial));
          setLoading(false);
          break;
        case "campeonescontinentales":
          setChamps(res.filter((club) => club.campeonContinental));
          setLoading(false);
          break;
        default:
          setError(true);
      }
    });
  }, [catId]);

  console.log(catId)
  console.log(champs)
  return loading ? <Loader/>
  : error ? <p>error</p> 
  : <Champions clubs={champs} kind={catId}/>
  
};
