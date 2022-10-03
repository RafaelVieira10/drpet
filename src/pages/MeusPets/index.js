import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import Pet from "../../components/Pet";
import api from "../../services/api";
import "./style.css";

export default function MeusPets() {
  const { user } = useContext(AuthContext);
  const [meusPets, setMeusPets] = useState();
  const [mensagem, setMensagem] = useState();

  useEffect(() => {
    async function getMeusPets() {
      const response = await api.get(`meus_pets.php/${user.idusuario}`);
      const pets = await response.data;

      if (response.data.erro) {
        setMensagem(response.data.mensagem);
      } else {
        setMeusPets(
          pets.map((pet) => {
            return <Pet key={pet.idpet} pet={pet} />;
          })
        );
      }
    }

    getMeusPets();
  }, []); // eslint-disable-line

  return (
    <div className="containerMeusPets">
      {mensagem}
      {meusPets}
    </div>
  );
}
