import '../scss/main.css';

function Pessoa({nome, idade, profissao, foto}){
    return(
        <div className="card">
            <img src={foto} alt={nome}/>
            <div className="dados">
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>Profissão: {profissao}</p>
            </div>
        </div>
    )
}


export default Pessoa