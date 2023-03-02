import styled from "@emotion/styled";

export const Box = styled.table`
display:flex;
flex-direction:column;
justify-content: center;
width:440px;
// heigth:700px;
padding: 20px;
border-bottom: 3px solid black;
background-color: #fafaba
`;

export const Headers = styled.th`
width:30%;
// border-right: 2px solid black;
font-size: 20px;
font-weight: 700;
color: black;
`;

export const Data = styled.td`
width:30%;
// border-right: 2px solid #2a2a2a;
border-bottom: 1px solid red;
margin-right: 5px;
font-size: 16px;
font-weight: 500;
color: #2a2a2a;
`;

export const Section = styled.tr`
display: flex;
justify-content: space-around;
`;