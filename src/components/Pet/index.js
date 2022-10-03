import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

export default function Pet({ pet }) {
  const { adm } = useContext(AuthContext);
  const [mensagemDelete, setMensagemDelete] = useState();

  async function deletePet() {
    const response = await api.delete(`pets.php/${pet.idpet}`);
    setMensagemDelete(response.data.mensagem);
    console.log(response)
  }

  return (
    <div className="Pet">
      <div className="texto_card">
        <p>
          <span>Nome:</span> {pet.nome}
        </p>
        <p>
          <span>Raça:</span> {pet.raca}
        </p>
        <p>
          <span>Espécie:</span> {pet.especie}
        </p>
        <p>
          <span>Cor:</span> {pet.cor}
        </p>
        <p>
          <span>Sexo:</span> {pet.sexo}
        </p>
      </div>
      <div className="botao_MeusPets">
        {adm ? (
          <Link
            to={`/adm-dashboard/pets/editar/${pet.idpet}`}
            id="editar_MeusPets"
          >
            Editar
          </Link>
        ) : (
          <Link
            to={`/dashboard/meus-pets/editar/${pet.idpet}`}
            id="editar_MeusPets"
          >
            Editar
          </Link>
        )}

        <button onClick={deletePet} id="apagar_MeusPets">
          Excluir
        </button>
      </div>
      {mensagemDelete}
    </div>
  );
}
