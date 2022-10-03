import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import "./style.css"

export default function PetForm({ values, setValues, submit, btnName}) {
  const [pet, setPet] = useState(values);
  const {user} = useContext(AuthContext)

  function inputValue(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    submit()

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
    <form className="PetForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome do pet."
          onChange={inputValue}
          value={pet.nome}
          className="input-cadastro"
          required
        />
        <input
          type="text"
          name="raca"
          placeholder="Digite a raça do pet."
          onChange={inputValue}
          value={pet.raca}
          className="input-cadastro"
          required
        />
        <input
          type="text"
          name="especie"
          placeholder="Digite a espécie do pet."
          onChange={inputValue}
          value={pet.especie}
          className="input-cadastro"
          required
        />
        <input
          type="text"
          name="cor"
          placeholder="Digite a cor do pet."
          onChange={inputValue}
          value={pet.cor}
          className="input-cadastro"
          required
        />
        <input
          type="text"
          name="sexo"
          placeholder="Digite o sexo do pet."
          onChange={inputValue}
          className="input-cadastro"
          value={pet.sexo}
          required
        />
      <input type="submit" value={btnName} onClick={() => setValues(pet)} className="button-cadastro"/>
    </form>
  );
}
