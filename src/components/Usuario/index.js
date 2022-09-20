export default function Usuarios({data}) {
    return (
        <div className="Usuario">
            <p>Nome: {data.nome}</p>
            <p>E-mail: {data.email}</p>
            <p>Senha: {data.senha}</p>
            <p>CPF / CNPJ: {data.cpf_cnpj}</p>
        </div>
    )
}