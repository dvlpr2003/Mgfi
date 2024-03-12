import { Link, NavLink } from "react-router-dom"
export default function Header(){
    return(
        <>
        <h1>hi</h1>
        <Link to="/">Home</Link>
        <NavLink to="/About">Abo</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </>
    )
}