import {styled} from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: #600028; 
    display: flex;
    flex-direction: column;
    padding: 2vw;
    text-align: left;
    color: white;
    font-size: calc(2px + 1vw);
    border-radius: 25px;

    @media screen and (max-width: 700px) {
        width: 100%;
        text-align: center;
    }
`

export default function Header() {
    return(
        <HeaderWrapper>
            <h1>Camille Christie</h1>
            <h2>Online Resume</h2>
        </HeaderWrapper>
    )
}

