import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import CardAgendamento from "../../components/CardAgendamento";
import "./style.css";

export default function AdmAgendamentos() {
  const [agendamentos, setAgendamentos] = useState();

  useEffect(() => {
    async function getAgendamentos() {
      const response = await api.get("agendamentos.php");
      let agendamentos = response.data;

      setAgendamentos(
        <div className="agendamentos">
          {agendamentos.map((agendamento) => {
            return (
              <CardAgendamento key={agendamento.id} agendamento={agendamento} />
            );
          })}
        </div>
      );
    }

    getAgendamentos();
  }, []);

  return (
    <div className="container-agendar-adm">
      <h1>Agendamentos</h1>
      {agendamentos}
      <div className="buttons">
        <Link
          className="link criar"
          to="/adm-dashboard/agendamentos/criar-agendamento"
        >
          Criar agendamento
        </Link>
        <Link className="link-voltar" to="/adm-dashboard">
          Voltar
        </Link>
      </div>
    </div>
  );
}
