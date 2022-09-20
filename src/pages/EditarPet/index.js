import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function EditarPet() {
  const { user, adm } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [editPet, setEditPet] = useState({
    nome: "",
    raca: "",
    especie: "",
    cor: "",
    sexo: "",
    cpf_cnpj_dono: "",
  });

  const [mensagemUpdate, setMensagemUpdate] = useState();

  function inputValue(e) {
    setEditPet({ ...editPet, [e.target.name]: e.target.value });
  }

  async function editarPet(e) {
    e.preventDefault();
    const editPetJSON = JSON.stringify({
      pet: editPet,
      method: "update",
    });

    const response = await api.post("meus_pets.php", editPetJSON)
    setMensagemUpdate(response.data.mensagem)
  }

  useEffect(() => {
    async function getPet() {
      const getPetJSON = JSON.stringify({
        idPet: id,
        method: "get",
      });

      const response = await api.post("animais.php", getPetJSON)
      const pet = await response.data.pet[0];

      if (!response.data.erro) {
        if (pet.cpf_cnpj_dono === user.cpf_cnpj || adm) {
          setEditPet(pet);
        } else {
          navigate(-1);
        }
      } else {
        navigate(-1);
      }
    }

    getPet();
  }, []); // eslint-disable-line

  return (
    <div className="Cadastro">
      <form onSubmit={editarPet}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome do pet."
            onChange={inputValue}
            value={editPet.nome}
            required
          />
        </label>
        <label>
          Raça:
          <input
            type="text"
            name="raca"
            placeholder="Digite a raça do pet."
            onChange={inputValue}
            value={editPet.raca}
            required
          />
        </label>
        <label>
          Espécie:
          <input
            type="text"
            name="especie"
            placeholder="Digite a espécie do pet."
            onChange={inputValue}
            value={editPet.especie}
            required
          />
        </label>
        <label>
          Cor:
          <input
            type="text"
            name="cor"
            placeholder="Digite a cor do pet."
            onChange={inputValue}
            value={editPet.cor}
            required
          />
        </label>
        <label>
          Sexo:
          <input
            type="text"
            name="sexo"
            placeholder="Digite o sexo do pet."
            onChange={inputValue}
            value={editPet.sexo}
            required
          />
        </label>
        <input type="submit" value="Editar" />
      </form>
      <button onClick={() => {
        adm ? navigate("/adm-dashboard/pets") : navigate("/dashboard/meus-pets")
      }}>Voltar</button>
      <p>{mensagemUpdate}</p>
    </div>
  );
}
