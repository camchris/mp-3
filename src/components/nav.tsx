import {Link} from 'react-router-dom';
import {styled} from "styled-components";

const NavWrapper = styled.header`
    text-transform: uppercase;
    font-weight: bold;
    background-color: #2d0065; 
    width: 30%; 
    margin: 2vh auto;
    padding: 2% 1%;
    border-radius: 25px;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        width: 100%;
        margin: 2vh 0;
    }
    
`

const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: calc(1em + 1vw);
    text-align: left;
    text-decoration: none; 
    color: white;

    @media screen and (max-width: 700px) {
        flex-direction: row;
        list-style-type: none;
        justify-content: left;
        width: 100%;
        left: 0;
    }
`

const NavLi = styled.li`
    display: flex;
    flex-direction: column;
    font-size: calc(5px + 2vw);
    text-align: left;
    text-decoration: none; 
    color: white;

    @media screen and (max-width: 700px) {
        font-size: calc(2px + 2vw);
        list-style-type: none;
        margin-left: -35px;
        margin-right: 35px;
        padding-left: 0;


        
    }
`

const NavLink = ({to, children}: {to:string, children: React.ReactNode}) => {
    return (
        <Link style={{padding: "0m5rem", margin: "0.25rem"}} to={to}>
            {children}
        </Link>
    )
}

export default function Nav() {
    return(
        <NavWrapper>
            <nav>
                <NavUl>
                    <NavLi><NavLink to="/">Home</NavLink></NavLi>
                    <NavLi><NavLink to="/education">Education</NavLink></NavLi>
                    <NavLi><NavLink to="/employment">Employment</NavLink></NavLi>
                    <NavLi><NavLink to="/projects">Projects</NavLink></NavLi>
                    <NavLi><NavLink to="/skills">Skills & Interests</NavLink></NavLi>
                    <NavLi><NavLink to="/contact">Contact Me</NavLink></NavLi>
                </NavUl>
            </nav>
        </NavWrapper>
    )
}