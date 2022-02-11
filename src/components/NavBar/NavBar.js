import {ShoppingCart} from '../ShoppingCart/ShoppingCart'
export const NavBar = () => {

    return (
       
        <header className="header">
        
            <h1 className="titulo">Super Liga Argentina de Fubtol</h1>
            <nav className="header-nav">
                <ul  className="header-link" > Clubes grandes</ul>
                <ul className="header-link" >Clubes regulares</ul>
                <ul  className="header-link" >Campeones Mundiales</ul>
                <ul  className="header-link" >Campeones Continentales</ul>
                <ul  className="header-link">El más Grande</ul>
                <div><ShoppingCart /></div>
            </nav>
        </header>
        
       

     
        
    )
}