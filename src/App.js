
import './App.css';
import Logo from './componentes/Logo'


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          <li className='opcao1'> Categorias</li>
          <li className='opcao2'> Minha Estante</li>
          <li className='opcao3'> Favoritos</li>
        </ul>
      </header>
    </div>
  );
}

export default App
