import styled from "@emotion/styled";

export const Container = styled.section`
width:400px;
padding: 20px;
border-bottom: 3px solid black;
background-color: #fafaba
`;
export const List = styled.ul`
list-style: none;
display:flex;
justify-content: space-evenly;
padding:0;
margin: 20px 0;
`;
export const Title = styled.h2`
margin:0;
text-align: center;
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