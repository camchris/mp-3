import {styled} from 'styled-components';
import {Link} from 'react-router-dom';

const FooterWrapper = styled.header`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: calc(8px + 1vw);
    text-align: center;
`
const FooterLink = ({to, children}: {to:string, children: React.ReactNode}) => {
    return (
        <Link style={{padding: "0m5rem", margin: "0.25rem"}} to={to}>
            {children}
        </Link>
    )
}


export default function Footer() {
    return(
        <FooterWrapper>
            <p>
            All Rights Reserved by Camille Christie 
            <FooterLink to="/credits">Credits</FooterLink>
            &#169;
            </p>
        </FooterWrapper>
    )
}

