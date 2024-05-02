
import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          <li> Categorias</li>
          <li> Minha Estante</li>
          <li> Favoritos</li>
        </ul>
      </header>
    </div>
  );
}

export default App
