import "./style.css";

export default function Usuarios({ data }) {
  return (
    <div className="Usuario">
      <div className="texto-dados">
        <p>
          <span>Nome:</span> {data.nome}
        </p>
        <p>
          <span>E-mail:</span> {data.email}
        </p>
        <p>
          <span>Senha:</span> {data.senha}
        </p>
        <p>
          <span>CPF / CNPJ:</span> {data.cpf_cnpj}
        </p>
      </div>
    </div>
  );
}
