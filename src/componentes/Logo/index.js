import './style.css'
import logo from '../../assets/logo.svg'

function Logo() {
    return (<div className='logo'>
        <img src={logo} alt='logo'></img>
        <p> <strong>Nerd</strong>BooKs</p>
    </div>)
}
export default Logo