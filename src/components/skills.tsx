import {styled} from 'styled-components';

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

    @media screen and (max-width: 700px) {
        width: 100%
    }
`;

export default function Skills() {
    return (
        <ContentDiv>
            <h3>Techincal Skills:</h3> 
            <p>
                C, C#, Java, Python, Scala, SQL, MATLAB, HTML, Onshape (CAD)
            </p>

            <h3>Clubs & Personal Interests:</h3>
            <p>
                Upsilon Pi Epsilon (Computer Science Honor Society), Women in Computer Science, BU Pep Band Tenor Saxophone Section Leader, BU Jazz Combo Pianist, DJ on WTBU
            </p>
        </ContentDiv>
    )
}