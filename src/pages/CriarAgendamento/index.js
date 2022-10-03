import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './style.css'

export default function CriarAgendamento() {
  const { user, adm } = useContext(AuthContext);
  const [horarioValue, setHorarioValue] = useState();
  const [petValue, setPetValue] = useState();
  const [horariosDisponivel, setHorariosDisponivel] = useState();
  const [petsDisponivel, setPetsDisponivel] = useState();
  const [mensagem, setMensagem] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const agendamentoJSON = JSON.stringify({
      id_usuario_ag: user.idusuario,
      id_pet: petValue,
      id_horario: horarioValue,
    });

    const response = await api.post("agendamentos.php", agendamentoJSON);
    setMensagem(response.data.mensagem)
    console.log(response)
  }

  useEffect(() => {
    async function getHorarios() {
      const response = await api.get("horarios.php?disponivel");
      let horarios = await response.data;

      setHorariosDisponivel(
        <select className="select"
          name="id_horario"
          value={horarioValue}
          onChange={(e) => setHorarioValue(e.target.value)}
        >
          <option className="option" value="Selecione">Selecione o horario</option>
          {horarios.map((horario) => {
            return (
              <option key={horario.idhorario} value={horario.idhorario}>
                {horario.hora} {horario.data}
              </option>
            );
          })}
        </select>
      );
    }

    async function getPets() {
      let response;

      if (adm) {
        response = await api.get("pets.php");
      } else {
        response = await api.get(`meus_pets.php/${user.idusuario}`);
      }

      let pets = await response.data;

      setPetsDisponivel(
        <select className="select"
          name="id_pet"
          value={petValue}
          onChange={(e) => setPetValue(e.target.value)}
        >
          <option>Selecione seu Pet</option>
          {pets.map((pet) => {
            return (
              <option className="option" key={pet.idpet} value={pet.idpet}>
                {pet.nome}
              </option>
            );
          })}
        </select>
      );
    }

    getHorarios();
    getPets();
  }, []); // eslint-disable-line

  return (
    <div className="agendamento">
      <h1>Criar Agendamentos</h1>
      <form onSubmit={handleSubmit}>
        {horariosDisponivel}
        {petsDisponivel}
        <input className="button" type="submit" value="Criar agendamento" />
      <p>
        <Link className="linkAgendamento" to="/adm-dashboard/agendamentos/">Voltar</Link>
      </p>
      </form>
      <p>{mensagem}</p>
    </div>
  );
}
