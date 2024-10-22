import {styled} from 'styled-components';
import { useState } from 'react';

interface ButtonProps {
    value: string;
    onClick: (value: string) => void;
}

const StyledButton = styled.button`
    background-color: #600028;
    color: white;
    font-size: calc(6px + 1vw);
    padding: 1%;
    border-radius: 25%;
    border: solid;
    border-width: 4px;
    border-color: #390018;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 90%;

`

const StyledTd = styled.td`
    width: 5%;
`;

const Button = ({value, onClick}: ButtonProps) => {

    return (
      <StyledButton onClick={() => onClick(value)}>
        {value}
      </StyledButton>
    );
};

const Output = styled.div<{ result: number }>`
    text-align: center;
    background-color: ${props => ((props.result < 0) ? 'red' : 'black')};
`;

export function Calculator() {

    const [firstNumber, setFirstNum] = useState(0);
    const [secondNumber, setSecondNum] = useState(0);
    const [result, setResult] = useState(0);

    function calcHandler(operator: string) {

        switch(operator) {
            case "+":
                setResult(firstNumber+secondNumber);
                break;
            case "-":
                setResult(firstNumber-secondNumber);
                break;
            case "*":
                setResult(firstNumber*secondNumber);
                break;
            case "/":
                setResult(firstNumber/secondNumber);
                break;
            case "**":
                let r = firstNumber;
                for (let i = 1; i < secondNumber; i++) { 
                    r = r * firstNumber; 
                }
                setResult(r);
                break;
            case "CLEAR":
                setFirstNum(0);
                setSecondNum(0);
                setResult(0);
                break;

        }
    }

    return (
        <>
            <table>
                <tr>
                    <StyledTd><Button value="+" onClick={calcHandler} /></StyledTd>
                    <StyledTd><Button value="-" onClick={calcHandler} /></StyledTd>
                </tr>
                <tr>
                    <StyledTd><Button value="*" onClick={calcHandler} /></StyledTd>
                    <StyledTd><Button value="/" onClick={calcHandler} /></StyledTd>
                </tr>
                <tr>
                    <StyledTd><Button value="**" onClick={calcHandler} /></StyledTd>
                    <StyledTd><Button value="CLEAR" onClick={calcHandler} /></StyledTd>
                </tr>
            </table>
            <input type="number" placeholder="first number" value={firstNumber}
                    onChange={(e) => setFirstNum(Number(e.target.value))} />
            <input type="number" placeholder="second number" value={secondNumber}
                    onChange={(e) => setSecondNum(Number(e.target.value))} />
            <Output result={result}><p>{result}</p></Output>
        </>
    );

}