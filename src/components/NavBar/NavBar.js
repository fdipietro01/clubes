import {ShoppingCart} from '../ShoppingCart/ShoppingCart'
import {Link} from "react-router-dom"
export const NavBar = ({auth, logout}) => {

    return (
       
        <header className="header">
        
            <Link to="/"><h1 className="titulo">Super Liga Argentina de Fubtol</h1></Link>
            <nav className="header-nav">
            <Link to="/clubes/grande"><ul  className="header-link" > Clubes grandes</ul></Link>
            <Link to="/clubes/chico"> <ul className="header-link" >Clubes regulares</ul>
            </Link>
                <ul  className="header-link" >Campeones Mundiales</ul>
                <ul  className="header-link" >Campeones Continentales</ul>
                <ul  className="header-link">El más Grande</ul>
                <div><ShoppingCart /></div>
                {auth && <button onClick={logout}>Log out</button>}
            </nav>
        </header>
        
       

     
        
    )
}