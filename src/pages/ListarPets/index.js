import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Pet from "../../components/Pet";
import "./style.css";

export default function ListarPets() {
  const [pets, setPets] = useState();

  useEffect(() => {
    async function getPets() {
      const response = await api.get("pets.php");
      let pets = await response.data;
      setPets(
        pets.map((pet) => {
          return <Pet key={pet.idpet} pet={pet} />;
        })
      );
    }

    getPets();
  }, []);

  return (
    <div className="container-listar">
      <h1>Lista de pets</h1>
      <div className="ListarPets">{pets}</div>
      <p>
        <Link className="voltar-pets" to="/adm-dashboard">
          Voltar
        </Link>
      </p>
    </div>
  );
}
