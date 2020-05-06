import styled from 'styled-components';

export const ButtonsDiv = styled.div`
margin: 1rem 2rem 0 1rem;
`;

export const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 500px) {
  flex-direction: column;
  text-align: center;
}
`;

export const Button = styled.button`
width: 5rem;
background: black;
color: yellow;
height: 1.8rem;
border-color: black;
`;

export const ClearButton = styled.button`
background: black;
color: yellow;
height: 1.8rem;
border-color: black;
margin: 1rem 0 0 1rem;
@media (max-width: 500px) {
  width: 80%;
}
`;

export const TodoListDiv = styled.div`
@media (max-width: 500px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export const Input = styled.input`
background: black;
border: none;
border-bottom: 2px solid yellow;
height: 1.5rem;
margin: 1rem 0 0 1rem;
color: yellow;
@media (max-width: 500px) {
  width: 80%;
}
`;

export const AppContainer = styled.div`
background: black;
height: 100vh;
width: 100vw;
`;

export const ItemDiv = styled.div`
margin-left: 1rem;
max-width: 33%;
min-height: 2rem;
@media (max-width: 500px) {
  max-width: 80%;
  width: 80%;
  text-align: center;
  margin: auto;
  margin: .5rem 0 .5rem 0;
}
`;

export const Item = styled.p`
font-size: 1.5rem;
margin-left: .5rem;
text-transform: capitalize;
@media (max-width: 500px) {
  align-items: center;
}
`;

export const Headline = styled.h2`
color: yellow;
margin: 1rem 0 0 1rem;
`;

export const AddClearDiv = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 500px) {
  flex-direction: column;
  width: 100%;
  align-items: center;
}
`;
