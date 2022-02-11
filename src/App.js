import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

    return (
     <>
        <NavBar />
        <ItemListContainer/>
        <ItemDetailContainer/>
    </>
    );
}

export default App;

        