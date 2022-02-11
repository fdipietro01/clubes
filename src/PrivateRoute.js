import React, {useEffect} from 'react'
import Authentication from './helpers/Authentication';
import { NotYet } from './components/error404/notYet';
import { ElMasGrande } from "./components/ElMasGrande/ElMasGrande";
import { useState } from 'react';

const PrivateRoute = () =>  {
    const {isAuth} = Authentication()
    
  return (
      isAuth? <ElMasGrande/> : <NotYet/> 
  )
}

export default PrivateRoute