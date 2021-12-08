import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const StyledApp = styled.div`
    text-align: center;
`;

const StyledHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const StyledAppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const StyledAppLink = styled.a`
    color: #61dafb;
`;

const StyledP = styled.p`
    ${(props) => `color: ${props.fontColor}`};
    background-color: black;
`;

const StyledButton = styled.button`
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
`;

function CheckFile() {
    console.log("in CSSbyStyleComponents")
}

function Description() {
    return ( <p>練習Style Components</p> )
}

function CSSbySC() {
    CheckFile()
    const [fontColor, setFontColor] = React.useState("#fff");
    return (
        <StyledApp>
            <StyledHeader>
                <StyledAppLogo src={logo} alt="logo" />
                <Description />
                <StyledP fontColor={fontColor}>測試變化一</StyledP>
                <StyledButton onClick={() => {
                    setFontColor("pink");
                }}>更改字體顏色</StyledButton>
                <StyledP>測試變化二</StyledP>
                <StyledAppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</StyledAppLink>
            </StyledHeader>
        </StyledApp>
    )
}



export default CSSbySC