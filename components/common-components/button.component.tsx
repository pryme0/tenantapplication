import React from 'react';
import styled from 'styled-components';
import { ButtonInterface } from '@Interface/index';
import { FaSpinner } from 'react-icons/fa';

export const Button = (props: ButtonInterface) => {
  return (
    <StyledButton
      color={props.color}
      background={props.background}
      width={props?.width}
      height={props?.height}
      onClick={props.onClick}
      disabled={props.disabled}
    >
    { props.loading?(<FaSpinner />):(props.text)}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${(props: ButtonInterface) => (props.width ? props.width : 100)}px;
  height: ${(props: ButtonInterface) => (props.height ? props.height : 35)}px;
  font-weight: 700px;
  font-size: 14px;
  margin: 10px;
  background-color: #${(props: ButtonInterface) => (props.background ? props.background : 'DA636F')};
  color: #${(props: ButtonInterface) => (props.color ? props.color : '767676')};
  border-radius: 50px;
  border: 0px;
  opacity: 0.8;
  &:hover {
    cursor: ${(props: ButtonInterface) =>
      props.disabled ? 'not-allowed' : 'pointer'};
    opacity: 1;
  }

  @media (max-width: 970px) {
    width: 100%;
    margin:15px 0px;
  }
`;
