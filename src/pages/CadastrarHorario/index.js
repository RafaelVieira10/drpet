import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

export default function CadastrarHorario() {
  const [horariosDisponivel, setHorariosDisponivel] = useState();
  const [mensagem, setMensagem] = useState();
  const [horario, setHorario] = useState({
    data: "",
    hora: "",
  });

  function inputValue(e) {
    setHorario({ ...horario, [e.target.name]: e.target.value });
  }

  async function cadastrarHorario(e) {
    e.preventDefault();
    const horarioJSON = JSON.stringify(horario);

    const response = await api.post("horarios.php", horarioJSON);
    setMensagem(response.data.mensagem);
    setHorario({
      data: "",
      hora: "",
    });
  }

  useEffect(() => {
    async function getHorarios() {
      const response = await api.get("horarios.php");
      const horarios = await response.data;

      setHorariosDisponivel(
        horarios.map((horario) => {
          return (
            <p className="horarios" key={horario.idhorario}>
              {horario.hora} {horario.data}
            </p>
          );
        })
      );
    }

    getHorarios();
  }, [horario]);

  return (
    <div className="CadastrarHorario">
      <h2>Horarios Disponiveis</h2>
      <div className="horarios_disponivel">{horariosDisponivel}</div>
      <div className="container-cadastrar">
        <h2>Cadastrar Horario</h2>
        <form className="form-cadastrar" onSubmit={cadastrarHorario}>
          <input
            type="date"
            name="data"
            className="inputVisualizarAgendar"
            value={horario.data}
            onChange={inputValue}
            required
          />
          <input
            type="time"
            name="hora"
            className="inputVisualizarAgendar"
            value={horario.hora}
            onChange={inputValue}
            required
          />
          <input className="botaoAgendar" type="submit" value="Cadastrar" />
          {mensagem}
        </form>
      </div>
      <div>
        <Link className="voltar-horario" to="/adm-dashboard">
          Voltar
        </Link>
      </div>
    </div>
  );
}
