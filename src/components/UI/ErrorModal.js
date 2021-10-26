import styled from 'styled-components';
import ReactDom from 'react-dom';

import Button from './Button';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalCard = styled.div`
  position: fixed;
  top: 30vh;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  max-width: 35rem;
  margin: 5% auto;
  left: 0;
  right: 0;
`;

const Header = styled.header`
  background: #4f005f;
  padding: 1rem;
`;

const ModalHeader = styled.h2`
  margin: 0;
  color: white;
`;

const ModalDiv = styled.div`
  padding: 1rem;
`;

const ModalFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = (props) => {
  return <ModalBackdrop onClick={props.onConfirm} />;
};

const ModalOverlay = ({ ...props }) => {
  return (
    <ModalCard>
      <Header>
        <ModalHeader>{props.title}</ModalHeader>
      </Header>
      <ModalDiv>
        <p>{props.message}</p>
      </ModalDiv>
      <ModalFooter>
        <Button onClick={props.onConfirm}>Okay</Button>
      </ModalFooter>
    </ModalCard>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
