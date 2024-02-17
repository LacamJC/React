
import './App.css';
import Header from './components/Header.js';
import Pessoa from './components/Pessoa.js';
import List from './components/List.js';
import Evento from './components/Evento.js';
import Form from './components/Form.js';
function App(){
  
  const usuario =[
    {
      nome : "João",
      idade : "19",
      profissao : "Estudante",
      foto : "https://placehold.co/100"
    },
    {
      nome : "Maria",
      idade : "45",
      profissao : "Desempregada",
      foto : "https://placehold.co/100"

    }
  ]

  return(
    <div className="body">
      <Header/>
      <main className="main">
        <div className="lista">
          <Pessoa nome={usuario[0].nome} idade={usuario[0].idade} profissao={usuario[0].profissao} foto={usuario[0].foto}/>

          <Pessoa nome={usuario[1].nome} idade={usuario[1].idade} profissao={usuario[1].profissao} foto={usuario[1].foto}/>
        </div>

        <List />
      </main>

      <section>
        <h1>Testando Eventos</h1>

        <Evento />
        <Form />
      </section>
    </div>

  )
}

export default App;
