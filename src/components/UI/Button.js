import styled from 'styled-components';

const ButtonDefault = styled.button`
  font: inherit;
  font-weight: bold;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 1rem 2.5rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  return (
    <ButtonDefault type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </ButtonDefault>
  );
};

export default Button;
