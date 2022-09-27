import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Agendamentos() {
  const { user } = useContext(AuthContext);
  const [agendamentos, setAgendamentos] = useState();
  const [mensagem, setMensagem] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    async function getAgendamentos() {
      const response = await api.get(`agendamentos.php?id_usuario=${user.idusuario}`)
      
      if (!response.erro) {
        let agendamentos = await response.data;
        console.log(agendamentos)
        setAgendamentos(<div>
          {agendamentos.map((agendamento) => {
            let dataFormat = String(agendamento.data).split("-")

            return (
              <div key={agendamento.idagendamento}>
                <p>
                  Horario: {agendamento.hora} - {`${dataFormat[2]}/${dataFormat[1]}/${dataFormat[0]}`}
                </p>
                <p>Cliente: {agendamento.nome}</p>
                <p>Pet: {agendamento.nome_pet}</p>
                <p>Status: {agendamento.status}</p>
                <p>=====================================================</p>
              </div>
            );
          })}
        </div>)
      } else {
        setMensagem(response.mensagem)
      }



    }

    getAgendamentos()
  }, []) // eslint-disable-line

  return (
    <div>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <h1>Agendamentos</h1>
      {mensagem}
      {agendamentos}
      <p><Link to="/dashboard/agendamentos/criar-agendamento">Criar agendamento</Link></p>
    </div>
  );
}
