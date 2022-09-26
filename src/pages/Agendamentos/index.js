import { Link } from "react-router-dom";

export default function Agendamentos() {
  return (
    <div>
      <h1>Agendamentos</h1>
      <p><Link to="/dashboard/agendamentos/criar-agendamento">Criar agendamento</Link></p>
    </div>
  );
}
