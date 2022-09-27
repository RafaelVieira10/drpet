import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api";

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
        <div>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <h1>Finalizar consulta</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Status da consulta
                    <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="concluido">Concluido</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                </label>
                <p>Indique o procedimento:</p>
                <textarea cols="30" rows="10" value={textValue} onChange={(e) => setTextValue(e.target.value)} /><br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}