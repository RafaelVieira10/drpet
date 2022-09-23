import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function EditarPet() {
  const { user, adm } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  const [editPet, setEditPet] = useState({
    nome: "",
    raca: "",
    especie: "",
    cor: "",
    sexo: "",
    id_usuario: user.idusuario,
  });

  function inputValue(e) {
    setEditPet({ ...editPet, [e.target.name]: e.target.value });
  }

  async function editarPet(e) {
    e.preventDefault();

    const editPetJSON = JSON.stringify({
      pet: editPet,
    });

    const response = await api.put("pets.php", editPetJSON);
    setMensagem(response.data.mensagem)
  }

  useEffect(() => {
    async function getPet() {

      const response = await api.get(`pets.php/${id}`);
      const pet = await response.data;

      if (!response.data.erro) {
        if (pet.id_usuario === user.idusuario || adm) {
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
    <div>
      <h1>Editar pet</h1>
      <div>
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
      </div>
      <p>{mensagem}</p>
      <p><button onClick={() => navigate(-1)}>Voltar</button></p>
    </div>
  );
}
