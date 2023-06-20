import styled from 'styled-components';

export const ListBtn = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const ButtonFeedback = styled.button`
  width: 130px;
  padding: 5px 0;
  border: 1px solid black;
  border-radius: 7px;
  outline: none;
  background: #483D8B;
  color: #000;
  box-shadow: inset 0px 0px 3px 3px rgb(169 169 169 / 75%);
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 500ms;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: inset 0px 0px 3px 3px rgba(110, 107, 110, 1);
  }
`;