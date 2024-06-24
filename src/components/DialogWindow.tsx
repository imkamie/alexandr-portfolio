import './DialogWindow.css'
import { Link } from 'react-router-dom'

function DialogWindow() {

    return (
        <div className='dialog-window'>
            <h1>Alexandr Dolgavin</h1>
            <p>Master's degree in Cybersecurity. OSCP certified with a strong background in software engineering and cybersecurity. 4+ years of experience in cybersecurity, blockchain, and network security. Active participant in CTF and contributor to the security community.</p>
            <strong>Contact Information</strong>
            <Link to="/about">More Information</Link>

        </div>
    )
}

export default DialogWindow