import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './style.css'

export default function AdmAgendamentos() {
  const [agendamentos, setAgendamentos] = useState();

  useEffect(() => {
    async function getAgendamentos() {
      const response = await api.get("agendamentos.php");
      let agendamentos = response.data;


      setAgendamentos(
        <div className="agendamentos">
          {agendamentos.map((agendamento) => {
            let dataFormat = String(agendamento.data).split("-")

            return (
              <div className="cardAgendar" key={agendamento.idagendamento}>
                <p>
                  Horario: {agendamento.hora} - {`${dataFormat[2]}/${dataFormat[1]}/${dataFormat[0]}`}
                </p>
                <p>Cliente: {agendamento.nome}</p>
                <p>Pet: {agendamento.nome_pet}</p>
                <p>Status: {agendamento.status}</p>
                <p ><Link className="finalizar" to={`finalizar-consulta/${agendamento.idagendamento}`}>Finalizar consulta</Link></p>
              </div>
            );
          })}
        </div>
      );
    }

    getAgendamentos();
  }, []);

  return (
    <div className="containerAgendar">
      <h1>Agendamentos</h1>
        {agendamentos}
      <Link className="link" to="/adm-dashboard/agendamentos/criar-agendamento">
        Criar agendamento
      </Link>
      <p>
        <Link className="link" to="/adm-dashboard">Voltar</Link>
      </p>
    </div>
  );
}
