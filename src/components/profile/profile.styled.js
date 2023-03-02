import styled from "@emotion/styled";

export const Box = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
width:400px;
height:700px;
padding: 20px;
border-bottom: 3px solid black;
background-color: #fafaba
`;
export const Description = styled.div`
width:100%;
`;
export const Image = styled.img`
display: block;
width:100%;
height:auto;
display: block;
border: 5px solid black;
border-radius: 50%;
background-color: aqua;
`;
export const DescriptionInfo = styled.p`
padding: 10px;
text-align: center;
margin: 5px 0;
font-size: 20px;
font-weight: 500;
border: 2px solid red;
border-radius: 15px;
color: white;
background-color: #2a2a2a;
`;
export const List = styled.ul`
list-style: none;
display:flex;
justify-content: space-evenly;
padding:0;
margin: 0;
`;
export const Item = styled.li`
display:flex;
flex-direction: column;
padding: 10px;
width: 25%;
align-items: center;
font-size: 20px;
font-weight: 500;
color: white;
background-color: #2a2a2a;
border: 2px solid red;
border-radius: 15px;
`;