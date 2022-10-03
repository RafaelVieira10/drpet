import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/auth";
import { useContext } from "react";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdmDashboard from "./pages/AdmDashboard";
import MeusPets from "./pages/MeusPets";
import CadastrarPet from "./pages/CadastrarPet";
import EditarPet from "./pages/EditarPet";
import ListarUsuarios from "./pages/ListarUsuarios";
import ListarPets from "./pages/ListarPets";
import CadastrarHorario from "./pages/CadastrarHorario";
import AdmAgendamentos from "./pages/AdmAgendamentos";
import CriarAgendamento from "./pages/CriarAgendamento";
import EditarUsuario from "./pages/EditarUsuario";
import Agendamentos from "./pages/Agendamentos";
import FinalizarConsulta from "./pages/FinalizarConsulta";
import Header from "./components/Header";
import Pet from "./pages/Pet";

export default function Rotas() {
  function Private({ children }) {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Carregando</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  function PrivateADM({ children }) {
    const { authenticated, loading, adm } = useContext(AuthContext);

    if (loading) {
      return <div>Carregando</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    if (!adm) {
      return <Navigate to="/dashboard" />;
    }

    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route
            exact
            path="/dashboard"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
          <Route
            exact
            path="/dashboard/pet"
            element={
              <Private>
                <Pet />
              </Private>
            }
          />
          <Route
            exact
            path="/dashboard/meus-pets"
            element={
              <Private>
                <MeusPets />
              </Private>
            }
          />
          <Route
            exact
            path="/dashboard/meus-pets/cadastrar-pet"
            element={
              <Private>
                <CadastrarPet />
              </Private>
            }
          />
          <Route
            exact
            path="/dashboard/meus-pets/editar/:id"
            element={
              <Private>
                <EditarPet />
              </Private>
            }
          />
          <Route
            exact
            path="/dashboard/editar-dados"
            element={
              <Private>
                <EditarUsuario />
              </Private>
            }
          />
          <Route
            exact
            path="/dashboard/agendamentos"
            element={
              <Private>
                <Agendamentos />
              </Private>
            }
          />
          <Route
            exact
            path="/dashboard/agendamentos/criar-agendamento"
            element={
              <Private>
                <CriarAgendamento />
              </Private>
            }
          />
          <Route
            exact
            path="/adm-dashboard"
            element={
              <PrivateADM>
                <AdmDashboard />
              </PrivateADM>
            }
          />
          <Route
            exact
            path="/adm-dashboard/usuarios"
            element={
              <PrivateADM>
                <ListarUsuarios />
              </PrivateADM>
            }
          />
          <Route
            exact
            path="/adm-dashboard/pets"
            element={
              <PrivateADM>
                <ListarPets />
              </PrivateADM>
            }
          />
          <Route
            exact
            path="/adm-dashboard/pets/editar/:id"
            element={
              <PrivateADM>
                <EditarPet />
              </PrivateADM>
            }
          />
          <Route
            exact
            path="/adm-dashboard/cadastrar-horario"
            element={
              <PrivateADM>
                <CadastrarHorario />
              </PrivateADM>
            }
          />
          <Route
            exact
            path="/adm-dashboard/agendamentos"
            element={
              <PrivateADM>
                <AdmAgendamentos />
              </PrivateADM>
            }
          />
          <Route
            exact
            path="/adm-dashboard/agendamentos/criar-agendamento"
            element={
              <PrivateADM>
                <CriarAgendamento />
              </PrivateADM>
            }
          />
          <Route
            exact
            path="/adm-dashboard/agendamentos/finalizar-consulta/:idagendamento"
            element={
              <PrivateADM>
                <FinalizarConsulta />
              </PrivateADM>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
