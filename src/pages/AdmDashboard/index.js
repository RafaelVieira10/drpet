import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import './style.css'

export default function AdmDashboard() {
  const { logout } = useContext(AuthContext);
  
  return (
    <div className="dashboardADM">
      <h1>Logado ADM</h1>
      <p>
        <Link className="link" to="/adm-dashboard/usuarios">Listar Usuários</Link>
      </p>
      <p>
        <Link className="link" to="/adm-dashboard/pets">Listar Pets</Link>
      </p>
      <p>
        <Link className="link" to="/adm-dashboard/cadastrar-horario">Cadastrar horário</Link>
      </p>
      <p>
        <Link className="link" to="/adm-dashboard/agendamentos">Agendamentos</Link>
      </p>
      <p>
        <button className="sair" onClick={() => logout()}>Sair</button>
      </p>
    </div>
  );
}
