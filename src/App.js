import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {ChampsContainer} from "./components/ChampsContainer/ChampsContainer"
import {Error404} from "./components/error404/error404"
import PrivateRoute from './PrivateRoute';

function App() {

    return (
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="equipos/:catId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/campeones/:catId" element={<ChampsContainer />} />
          <Route
            path="/elmasgrande"
            element={<PrivateRoute />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;

        