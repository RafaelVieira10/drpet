import { Link } from "react-router-dom"

export default function AdmAgendamentos() {
  return (
    <div>
      <p><Link to="/adm-dashboard">Voltar</Link></p>
      <h1>Agendamentos</h1>
      <p><Link to="/adm-dashboard/agendamentos/criar-agendamento">Criar agendamento</Link></p>
    </div>
  )
}