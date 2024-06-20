import './Header.css'
import { headerSection } from '../store/index'

function Header() {
    return (
        <div className='header'>
            <div className='header__section'>Home</div>
            {headerSection.map((item, index) => (
                <div className='header__section' key={index}>{item}</div>
            ))}
        </div>
    )
}

export default Header