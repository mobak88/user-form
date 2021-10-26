import styled from 'styled-components';

const DivCard = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 4rem auto;
  padding: 2rem;
  width: 90%;
  max-width: 40rem;
`;

const Card = (props) => {
  return <DivCard>{props.children}</DivCard>;
};

export default Card;
