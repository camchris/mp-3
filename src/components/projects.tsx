import {styled} from 'styled-components';
import { Calculator } from './calculator';

const ContentDiv = styled.div`
    background-color: #46074d;
    width: 70%;
    height: 100vh;
    font-size: calc(5px + 1vw);
    margin: 2vh auto;
    padding: 2%;
    border: 7px solid #5a2f72;
    border-radius: 25px;
    color: white;

    display: flex;
    align-items: flex-start;
    text-align: left;

    @media screen and (max-width: 700px) {
        width: 100%
    }

`;


export default function Projects() {
    return (
        <ContentDiv>
            <table>
                <tr>
                    <td>
                        <h4>Customized Measuring Cups | April 2024</h4>
                        <p>
                            <ul>
                                <li>Programmed a library of Features with Onshape’s Featurescript to automate the creation of measuring cups based
                                    on user input, accurately computing and adjusts for volume via methods such as scaling or extruding</li>
                                <li>Designed themed measuring cups using Onshape, fabricated prototypes with FDM and SLA printers</li>
                                <li>Led a group of 3</li>
                            </ul>
                        </p>
                    </td>
                    <td>
                        <h4>Recipe Browsing Website | April 2023</h4>
                        <p>
                            <ul>
                                <li>Developed a website using the Python Flask framework and SQL where users may browse, get recommended
                                    recipes, and save recipes based on their ingredients</li>
                                <li>Incorporated the Spoonacular API, Weee! Grocery API, and Google OAuth for user security</li>
                                
                            </ul>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Photo Sharing Website | February 2023</h4>
                        <p>
                            <ul>
                                <li>Created a photo sharing website with the Python Flask framework, HTML and SQL in which users may sign up, add
                                    friends, and post photos to albums</li>
                                <li>Coordinated with a partner</li>
                                
                            </ul>
                        </p>
                    </td>

                    
                    <td>
                        <Calculator/>
                    </td>
                </tr>
            </table>

            
        </ContentDiv>
    )
}