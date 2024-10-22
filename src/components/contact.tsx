import {styled} from 'styled-components';
import {Link} from 'react-router-dom';

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

export default function Contact() {
    return (
        <ContentDiv>
            <div>
                <p>For any inquiries, please reach me through one of the following methods:</p>

                <p>
                    Email: camchris@bu.edu 

                    <Link style={{padding: "0m5rem", margin: "0.25rem"}} to="https://www.linkedin.com/in/camille-christie-980909214">
                        LinkedIn
                    </Link>
                </p>
            </div>
        </ContentDiv>
    )
}