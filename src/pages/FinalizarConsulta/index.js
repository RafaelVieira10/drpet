import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api";
import './style.css'

export default function FinalizarConsulta() {
    const { idagendamento } = useParams();
    const [agendamento, setAgendamento] = useState();
    const navigate = useNavigate();
    const [selectValue, setSelectValue] = useState();
    const [textValue, setTextValue] = useState();

    async function handleSubmit(e) {
        e.preventDefault();

        if (selectValue !== undefined && selectValue !== "" && textValue !== undefined) {
            const agendamentoJSON = JSON.stringify({
                id_agendamento: agendamento.idagendamento,
                id_usuario_co: agendamento.idusuario,
                id_pet_co: agendamento.idpet,
                procedimento: textValue,
            })

            const response = await api.post("consultas.php", agendamentoJSON);

            console.log(response)

            const statusJSON = JSON.stringify({
                status: selectValue,
                idagendamento: agendamento.idagendamento,
            })
            const responseAgendamento = await api.put("agendamentos.php", statusJSON)

            console.log(responseAgendamento)
        }

    }


    useEffect(() => {
        async function getAgendamento() {
            const response = await api.get(`agendamentos.php/${idagendamento}`) 
            setAgendamento(response.data)
        
        }

        getAgendamento()
    }, []) // eslint-disable-line

    return (
        <div className="finalizarConsulta">
            <h1>Finalizar consulta</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Status da consulta
                </label>
                    <select className="select" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="concluido">Concluido</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                <p>Indique o procedimento:</p>
                <textarea cols="30" rows="10" value={textValue} onChange={(e) => setTextValue(e.target.value)} /><br />
                <input className="enviar" type="submit" value="Enviar" />
            </form>
            <button className="voltar" onClick={() => navigate(-1)}>Voltar</button>
        </div>
    )
}