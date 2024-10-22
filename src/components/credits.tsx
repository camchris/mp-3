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

    display: flex;
    text-align: left;

    @media screen and (max-width: 700px) {
        width: 100%
    }
`;

export default function Credits() {
    return (
        <ContentDiv>
            <p>
                <ul>
                    <li>Website created by Camille Christie for CS391 MP-1</li>
                    <li>CSS and JS documentation from lecture slides and w3schools.com</li>
                </ul>
            </p>
        </ContentDiv>
    )
}