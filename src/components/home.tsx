import {styled} from 'styled-components';
import headshot from "../assets/headshot.png"

const ContentDiv = styled.div`
    background-color: #46074d;
    width: 70%;
    height: 100vh;
    font-size: calc(6px + 1vw);
    margin: 2vh auto;
    padding: 2%;
    border: 7px solid #5a2f72;
    border-radius: 25px;
    color: white;

    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;

    @media screen and (max-width: 700px) {
        width: 100%
    }
`;

const ImageDiv = styled.div`
    padding: 2%;
    display: flex;
    flex-direction: row;
`;
const StyledImage = styled.img`
    width: 50%;
    height: auto;
`;

const StyledP = styled.p`
    padding: 5%; 
    vertical-align: middle;
`

export default function Home() {
    return (
        <ContentDiv>
            <ImageDiv>
                 <StyledImage src={headshot} alt="Camille Christie" />
                <StyledP>
                    Hi, my name is Cami! I'm a senior studying Computer Science in Boston University's dual-degree BA/MS program. 
                </StyledP>

            </ImageDiv>
                <p>Welcome to my website! Here you will find information about my education and work experience, as well as other information that may be of interest to you.</p>
        </ContentDiv>
    )
}