import { Link } from "react-router-dom";
import "./style.css";

export default function CardAgendamento({ agendamento }) {
  let dataFormat = String(agendamento.data).split("-");

  return (
    <div className="CardAgendamento">
      <div className="dados">
        <p>
          <span>Horario:</span> {agendamento.hora} -{" "}
          {`${dataFormat[2]}/${dataFormat[1]}/${dataFormat[0]}`}
        </p>
        <p>
          <span>Cliente:</span> {agendamento.nome}
        </p>
        <p>
          <span>Pet:</span> {agendamento.nome_pet}
        </p>
        <p className="status">
          <span>Status:</span> {agendamento.status}
        </p>
      </div>
      <div className="container-finalizar">
        <Link
          className="finalizar"
          to={`finalizar-consulta/${agendamento.idagendamento}`}
        >
          Finalizar consulta
        </Link>
      </div>
    </div>
  );
}
