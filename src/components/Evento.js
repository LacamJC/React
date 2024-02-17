function Evento()
{
    function meuEvento(){
        console.log("Evento")
    }

    return(
        <>
            <p>Clique para evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento;