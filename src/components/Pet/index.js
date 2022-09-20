import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Pet({ pet }) {
  const [mensagemDelete, setMensagemDelete] = useState();

  async function deletePet() {
    const petID = JSON.stringify({
      id: `${pet.id}`,
      method: "delete",
    });

    const response = await api.post("meus_pets.php", petID);
    setMensagemDelete(response.data.mensagem);
  }

  return (
    <div className="Pet">
      <p>Nome: {pet.nome}</p>
      <p>Raça: {pet.raca}</p>
      <p>Espécie: {pet.especie}</p>
      <p>Cor: {pet.cor}</p>
      <p>Sexo: {pet.sexo}</p>
      <p>CPF / CNPJ: {pet.cpf_cnpj_dono}</p>
      <div>
        <Link to={`/dashboard/meus-pets/editar/${pet.id}`}>
          Editar
        </Link>
        <button onClick={deletePet}>Excluir</button>
      </div>
      {mensagemDelete}
    </div>
  );
}
