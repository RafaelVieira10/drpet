import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";

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
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome do pet."
          onChange={inputValue}
          value={pet.nome}
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
          value={pet.raca}
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
          value={pet.especie}
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
          value={pet.cor}
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
          value={pet.sexo}
          required
        />
      </label>
      <input type="submit" value={btnName} onClick={() => setValues(pet)}/>
    </form>
  );
}
