import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function CriarAgendamento() {
  const [horariosDisponivel, setHorariosDisponivel] = useState();

  useEffect(() => {
    async function getHorarios() {
      const response = await api.get("horarios.php");
      let horarios = await response.data;

      setHorariosDisponivel(
        <select>
          <option value="Selecione">Selecione</option>
          {horarios.map((horario) => {
            return (
              <option key={horario.idhorario} value={`${horario.hora} ${horario.data}`}>
                {horario.hora} {horario.data}
              </option>
            );
          })}
        </select>
      );
    }

    getHorarios();
  }, []);

  return (
    <div className="CriarAgeandamento">
      <p>
        <Link to="/adm-dashboard/agendamentos/">Voltar</Link>
      </p>
      <h1>Criar Agendamentos</h1>
      <h3>Horarios disponiveis</h3>
      <div>{horariosDisponivel}</div>
      <form></form>
    </div>
  );
}
