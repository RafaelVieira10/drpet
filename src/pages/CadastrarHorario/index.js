import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function CadastrarHorario() {
  const [horariosDisponivel, setHorariosDisponivel] = useState();
  const [horario, setHorario] = useState({
    data: "",
    hora: "",
  });

  function inputValue(e) {
    setHorario({ ...horario, [e.target.name]: e.target.value });
  }

  async function cadastrarHorario(e) {
    e.preventDefault();
    const horarioJSON = JSON.stringify({
      horario: `${horario.hora} ${horario.data}`,
      method: "post",
    });

    const response = await api.post("horarios_disponivel.php", horarioJSON);
    console.log(response);
  }

  useEffect(() => {
    async function getHorarios() {
      const response = await api.get("horarios_disponivel.php");
      const horarios = await response.data.horarios;
      setHorariosDisponivel(
        horarios.map((horario) => {
          return <p key={horario.id}>{horario.horario}</p>;
        })
      );
    }

    getHorarios();
  });

  return (
    <div className="CadastrarHorario">
      <p><Link to="/adm-dashboard">Voltar</Link></p>
      <h2>Horarios Disponiveis</h2>
      <div className="horarios_disponivel">{horariosDisponivel}</div>
      <h2>Cadastrar Horario</h2>
      <form onSubmit={cadastrarHorario}>
        <input type="date" name="data" onChange={inputValue} required />
        <input type="time" name="hora" onChange={inputValue} required />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
