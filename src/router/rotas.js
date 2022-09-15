import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
// import Footer from '../components/Footer'
// import Header from './components/Header';

import Home from '../pages/Home';
// import Login from '../pages/Login';
import  EditarPet from '../pages/EditarPet';
import  CadastrarPet from '../pages/CadastrarPet';
import AlterarInformacoes from '../pages/AlterarInformacoes';
// import Agendamentos '../pages/Agendamentos';
// import MeusPets '../pages/MeusPets';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/"          element={ <Home /> } />
                <Route exact path="/EditarPet"          element={ <EditarPet /> } />
                <Route exact path="/CadastrarPet"          element={ <CadastrarPet /> } />
                <Route exact path="/AlterarInformacoes"          element={ <AlterarInformacoes /> } />
                {/* <Route exact path="/Agendamentos" component={ Agendamentos } />
                <Route exact path="/MeusPets" component={ MeuPets } />
                {/* A rota para a página de erro deverá ser sempre a última */}
                {/* <Route exact path="*"          element={ Erro } /> */} 
            </Routes>
            {/* <Footer /> */}
    </BrowserRouter>
    );
}

export default Rotas;

