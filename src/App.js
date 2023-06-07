
import Banner from './componentes/Banner/Banner';
import About from './componentes/About/About';
import CardEspe from './componentes/Card-Especialidades/CardEspecialidades';
import Estrutura from './componentes/Estrutura/Estrutura';
import Unidade from './componentes/Unidade/Unidade';
import Depoimentos from './componentes/Depoimentos/Depoimentos';
import Forms from './componentes/Forms/Forms';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header><Banner/></header>
      <main>
        <About/>
        <CardEspe/>
        <Estrutura/>
        <Unidade/>
        <Depoimentos/>
        <Forms/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
