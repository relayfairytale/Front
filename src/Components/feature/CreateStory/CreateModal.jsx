import { styled, keyframes } from "styled-components";

function CreateModal(props) {
  const { open, close, header } = props;

  return (
    <StModalContainer className={open ? "openModal modal" : "modal"}>
      {open ? (
        <StModalSection>
          <StModalHeader>
            {header}
            <StModalCloseButton className="close" onClick={close}>
              &times;
            </StModalCloseButton>
          </StModalHeader>
          <StModalMain>{props.children}</StModalMain>
          <StModalFooter>
            <StModalButton className="close" onClick={close}>
              close
            </StModalButton>
          </StModalFooter>
        </StModalSection>
      ) : null}
    </StModalContainer>
  );
}

export default CreateModal;

const modalShowAnimation = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const modalBgShowAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StModalContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);

  &.openModal {
    display: flex;
    align-items: center;
    animation: ${modalBgShowAnimation} 0.3s;
  }
`;

const StModalSection = styled.section`
  width: 90%;
  max-width: 750px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: ${modalShowAnimation} 0.3s;
  overflow: hidden;
`;

const StModalHeader = styled.header`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
`;

const StModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
`;

const StModalMain = styled.main`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const StModalFooter = styled.footer`
  padding: 12px 16px;
  text-align: right;
`;

const StModalButton = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
`;

