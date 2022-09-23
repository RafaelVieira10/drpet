import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export default function AdmDashboard() {
  const { logout } = useContext(AuthContext);
  
  return (
    <div>
      <h1>Logado ADM</h1>
      <p>
        <button onClick={() => logout()}>Sair</button>
      </p>
      <p>
        <Link to="/adm-dashboard/usuarios">Listar Usuários</Link>
      </p>
      <p>
        <Link to="/adm-dashboard/pets">Listar Pets</Link>
      </p>
      <p>
        <Link to="/adm-dashboard/cadastrar-horario">Cadastrar horário</Link>
      </p>
      <p>
        <Link to="/adm-dashboard/agendamentos">Agendamentos</Link>
      </p>
    </div>
  );
}
