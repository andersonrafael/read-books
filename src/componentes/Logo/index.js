import './estilo.css';
import logo from '../../assets/logo-livro.png'

function Logo() {
    return (<div className='logo'>
        <img src={logo} alt='logo' className='logo-img'></img>
        <p> <strong>NerdBooKs</strong></p>
    </div>)
}
export default Logo