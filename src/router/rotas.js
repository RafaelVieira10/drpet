import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
// import Footer from '../components/Footer'
// import Header from './components/Header';

import Home from '../pages/Home';
import  EditarPet from '../pages/EditarPet';
import  CadastrarPet from '../pages/CadastrarPet';
import CadastrarCliente from '../pages/CadastrarCliente';
import Perfil from '../pages/Perfil';
import AlterarUsuario from '../pages/AlterarUsuario';
import RegistrarProcedimentos from '../pages/RegistrarProcedimentos';
import ProcedimentosEfetuados from '../pages/ProcedimentosEfetuados';
import ListaUsuarios from '../pages/ListaUsuarios';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/"          element={ <Home /> } />
                <Route exact path="/EditarPet"          element={ <EditarPet /> } />
                <Route exact path="/CadastrarPet"          element={ <CadastrarPet /> } />
                <Route exact path="/Perfil"          element={ <Perfil /> } />
                <Route exact path="/CadastrarCliente"          element={ <CadastrarCliente /> } />
                <Route exact path="/AlterarUsuario"          element={ <AlterarUsuario /> } />
                <Route exact path="/RegistrarProcedimentos"   element={<RegistrarProcedimentos />} />
                <Route exact path="/ProcedimentosEfetuados"   element={<ProcedimentosEfetuados />} />
                <Route exact path="/ListaUsuarios"   element={<ListaUsuarios />} />
            </Routes>
            
    </BrowserRouter>
    );
}

export default Rotas;

