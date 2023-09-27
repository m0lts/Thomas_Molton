import '../assets/global.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <ul id="navbar">
            <li className="navitem">
                <Link to='/' className='link'>Home</Link>
            </li>
            <li className="slash">/</li>
            <li className="navitem">
                <Link to='/business' className='link'>Business</Link>
            </li>
            <li className="slash">/</li>
            <li className="navitem">
                <Link to='/travel' className='link'>Travel</Link>
            </li>
        </ul>
    )
}