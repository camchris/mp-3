import {styled} from 'styled-components';

const ContentDiv = styled.div`
    background-color: #46074d;
    width: 70%;
    height: 100vh;
    font-size: calc(3px + 1vw);
    margin: 2vh auto;
    padding: 2%;
    border: 7px solid #5a2f72;
    border-radius: 25px;
    color: white;

    display: flex;
    text-align: left;
    align-items: flex-start;

    @media screen and (max-width: 700px) {
        width: 100%
    }
`;

export default function Employment() {
    return (
        <ContentDiv>
            <table>
                <tr>
                    <h2>AI & ML Intern</h2>
                    <h3>ManTech International</h3>
                    <h4>Herndon, VA (Hybrid, Remote) | June 2023 - January 2024, June 2024 - August 2024</h4>
                    <p>
                        <ul>
                            <li>Researched and deployed large language models for testing and comparison purposes, applied LangChain to add
                                guardrails for internal use</li>
                            <li>Designed an API for Falcon-7B using FastAPI and Swagger UI, deployed via Docker</li>
                            <li>Modified PentestGPT to reroute calls to Falcon-7B and Azure OpenAI for on-premises operation</li>
                            <li>Refined an on-premises AI utilizing external knowledge retrieval, implemented functions for Azure OpenAI to
                                utilize real-time data through APIs</li>
                            <li>Built a Python class to employ Azure OpenAI in converting unstructured documents into Neo4J Knowledge Graphs
                                for improved retrieval augmented generation</li>
                            <li>Collaborated in a team of 7 interns</li>
                        </ul>
                    </p>
                </tr>
                <tr>
                    <h2>Computer and Data Science Intern</h2>
                    <h3>ManTech International</h3>
                    <h4>Silverdale, WA | May 2022 - August 2022</h4>
                    <p>
                        <ul>
                            <li>Engineered front and back-end solutions with the C# Blazor Framework</li>
                            <li>Identified errors through unit testing, coded unit tests, configured an automated testing schedule for data
                                management software features as a precursor to endurance testing</li>
                            <li>Programmed a data validation tool using Microsoft WPF and XAML, integrated an SQL database</li>
                            <li>Conducted data analysis from a calibrated noise source using Python libraries, including Pandas and Matplotlib</li>
                        </ul>
                    </p>
                </tr>
            </table>
        </ContentDiv>
    )
}