import { NavLink } from "react-router"

export const Navigation = () => {
    const active = ({ isActive }: { isActive: boolean }) => (
        isActive ? 'active' : ""
    )

    return (
        <>
            <ul className="navigation">
                <li className='navigation__item'><NavLink to='/' className={active}>Home</NavLink></li>
                <li className='navigation__item'><NavLink to='/about' className={active}>About</NavLink></li>
                <li className='navigation__item'><NavLink to='/contact' className={active}>Contact</NavLink> </li>
            </ul>
        </>
    )
}