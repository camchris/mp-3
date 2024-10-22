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

const StyledTable = styled.table`
    border-collapse: collapse;
`
const StyledRow = styled.tr`
    padding: 2px;
`

export default function Education() {
    return (
        <ContentDiv>
            <p>
                <h2>Boston University</h2>
                <StyledTable>
                    <StyledRow>
                        <td><h4>Master of Science, Computer Science </h4></td>
                        <td>September 2023 - Expected May 2025</td>
                    </StyledRow>
                    <StyledRow>
                        <td><h4>Bachelor of Arts, Computer Science</h4></td>
                        <td>September 2021 - Expected May 2025</td>
                    </StyledRow>
                </StyledTable>
        
                <h4>Relevant Coursework:</h4> Combinatoric Structures, Computer Systems, Geometric Algorithms, Software Engineering, Probability in Computing, Analysis of Algorithms, Databases, Programming Language Concepts and Features, Operating Systems, Data Science Tools and Applications, Information Security, Computational Fabrication, Artificial Intelligence
                <h4>Dean's List:</h4> Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023, Spring 2024
            </p>
        </ContentDiv>
    )
}