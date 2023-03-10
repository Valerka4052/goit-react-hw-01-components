import styled from "@emotion/styled";

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
export const Status = styled.span`
width: 20px;
height: 20px;
margin-bottom: 10px;
border-radius: 50%;
background-color: ${props => {
        if (props.status){return 'green'} else {return 'red'}
    }};
`;