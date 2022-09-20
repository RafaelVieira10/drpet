import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import Pet from "../../components/Pet";
import api from "../../services/api";

export default function MeusPets() {
  const { user } = useContext(AuthContext);
  const [meusPets, setMeusPets] = useState();

  useEffect(() => {
    async function getMeusPets() {
      const cpf_cnpj = JSON.stringify({
        cpf_cnpj: user.cpf_cnpj,
        method: "get",
      });

      const response = await api.post("meus_pets.php", cpf_cnpj);
      const pets = await response.data.pets;

      setMeusPets(
        pets.map((pet) => {
          return <Pet key={pet.id} pet={pet}/>;
        })
      );
    }

    getMeusPets();
  }, []); // eslint-disable-line

  return (
    <div className="MeusPets">
      <p>
        <Link to="/dashboard">Voltar</Link>
      </p>
      <h1>Meus Pets</h1>
      <div className="pets">{meusPets}</div>
      <div>
        <p>
          <Link to="/dashboard/meus-pets/cadastrar-pet">Cadastrar Pet</Link>
        </p>
      </div>
    </div>
  );
}
