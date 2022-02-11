import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Route, Routes} from "react-router-dom"
import { Error404 } from './components/error404/error404';
import { useState } from "react";
import {Login} from "./components/login"

function App() {
    const [auth, setAuth] = useState(false)
    const login = ()=>{
        setAuth(true)
    }
    const logout = ()=>{
        setAuth(false)
    }

console.log(auth)
    return (
      <>
        <NavBar auth={auth} logout={logout} />
        <Routes>
        {auth?  (<>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/clubes/:clubesid" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404/>}/></>)
         : 
            <Route path="/" element={<Login login={login}/>}/>}
        </Routes>
      </>
    );
}

export default App;

        