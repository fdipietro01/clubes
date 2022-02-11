import {ShoppingCart} from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
       
        <header className="header">
            <Link to ="/" style={{color:"black" ,textDecoration:"none"}} >
            <h1 className="titulo">Super Liga Argentina de Fubtol</h1>
            </Link>
            <nav className="header-nav">
                <Link to="/equipos/grande" className="header-link" > Clubes grandes</Link>
                <Link to="/equipos/chico" className="header-link" >Clubes regulares</Link>
                <Link to="/campeones/campeonesmundiales" className="header-link" >Campeones Mundiales</Link>
                <Link to="/campeones/campeonescontinentales" className="header-link" >Campeones Continentales</Link>
                <Link to="/elmasgrande" className="header-link">El más Grande</Link>
                <div><ShoppingCart /></div>
            </nav>
        </header>
        
       

     
        
    )
}