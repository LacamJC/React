function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Usuario cadastrado");
        
    }
    
    return(
        <>
            <form onSubmit={cadastrarUsuario}>
                <h1>Cadastro</h1>
                <input type="text"/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}

export default Form;``