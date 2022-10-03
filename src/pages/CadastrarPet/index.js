import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import api from "../../services/api";
import PetForm from "../../components/PetForm";
import "./style.css"

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
    const petJSON = JSON.stringify(pet);

    try {
      const response = await api.post("pets.php", petJSON);
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
    <div className="container-cadastro-pet">
      <div className="content-cadastro">
        <h2>Cadastre seu Pet</h2>
        <PetForm
          values={pet}
          setValues={(e) => {
            setPet(e);
          }}
          submit={cadastrar}
          btnName="Cadastrar"
        />
        <p className="mensagem">{mensagemCadastroPet}</p>
      </div>

      <img
        src="/assets/cat-dog-amico.png"
        alt=""
        className="img-dog-cadastro"
      ></img>

    </div>
  );
}
