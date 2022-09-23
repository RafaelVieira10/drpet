import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Pet({ pet }) {
  const { adm } = useContext(AuthContext);
  const [mensagemDelete, setMensagemDelete] = useState();

  async function deletePet() {
    const response = await api.delete(`pets.php/${pet.idpet}`);
    setMensagemDelete(response.data.mensagem);
  }

  return (
    <div className="Pet">
      <p>Nome: {pet.nome}</p>
      <p>Raça: {pet.raca}</p>
      <p>Espécie: {pet.especie}</p>
      <p>Cor: {pet.cor}</p>
      <p>Sexo: {pet.sexo}</p>
      <div>
        {adm ? (
          <Link to={`/adm-dashboard/pets/editar/${pet.idpet}`}>Editar</Link>
        ) : (
          <Link to={`/dashboard/meus-pets/editar/${pet.idpet}`}>Editar</Link>
        )}

        <button onClick={deletePet}>Excluir</button>
      </div>
      {mensagemDelete}
    </div>
  );
}
