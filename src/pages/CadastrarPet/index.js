import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import api from "../../services/api";
import PetForm from "../../components/PetForm";

export default function CadastrarPet() {
  const { user } = useContext(AuthContext);

  const [pet, setPet] = useState({
    nome: "",
    raca: "",
    especie: "",
    cor: "",
    sexo: "",
    id_usuario: user.idusuario,
  });

  const [mensagemCadastroPet, setMensagemCadastroPet] = useState();

  async function cadastrar() {
    const petJSON = JSON.stringify({
      pet: pet,
      method: "post",
    });

    try {
      const response = await api.post("meus_pets.php", petJSON);
      console.log(response)
      if (response.data) {
        if (response.data.erro) {
          setMensagemCadastroPet(response.data.mensagem);
        } else {
          setMensagemCadastroPet(response.data.mensagem);
        }
      }
    } catch (err) {
      console.log(err);
    }

    setPet({
      nome: "",
      raca: "",
      especie: "",
      cor: "",
      sexo: "",
      id_usuario: user.idusuario,
    });
  }

  return (
    <div className="Cadastro">
      <PetForm
        values={pet}
        setValues={(e) => {
          setPet(e);
        }}
        submit={cadastrar}
        btnName="Cadastrar"
      />
      <p>
        <Link to="/dashboard/meus-pets">Voltar</Link>
      </p>
      <p>{mensagemCadastroPet}</p>
    </div>
  );
}
