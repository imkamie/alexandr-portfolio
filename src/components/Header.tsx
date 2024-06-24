import './Header.css'
import { headerSection } from '../store/index'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to="/" className='header__section'>Home</Link>
            {headerSection.map((item, index) => (
                <Link to="/about" className='header__section' key={index}>{item}</Link>
            ))}
        </div>
    )
}

export default Header