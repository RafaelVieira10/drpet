import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import "./style.css";

export default function AdmDashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="dashboardADM">
      <h1>Logado ADM</h1>
      <div className="servicos">
        <Link className="link" to="/adm-dashboard/usuarios">
          Listar Usuários
        </Link>
        <Link className="link" to="/adm-dashboard/pets">
          Listar Pets
        </Link>
        <Link className="link" to="/adm-dashboard/cadastrar-horario">
          Cadastrar horário
        </Link>
        <Link className="link" to="/adm-dashboard/agendamentos">
          Agendamentos
        </Link>
      </div>
      <button className="logout" onClick={() => logout()}>
          Sair
      </button>
    </div>
  );
}
