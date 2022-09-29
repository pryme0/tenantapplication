import React from 'react';
import styled from 'styled-components';
import { StyledLabel } from './Input.component';
import { SelectInterface, ContainerInterface } from '../../interface';
import { FaCalendarAlt  } from 'react-icons/fa';

export const Select = (props: SelectInterface) => {
  const { options } = props;

  return (
    <InputContainer
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      width={props?.width}
    >
      <StyledLabel>{props.label}</StyledLabel>
      <StyledSelect
        onChange={props?.onChange}
        name={props?.name}
      >
      <option value={props?.default} >{props?.default}</option>
        {options?.map((option, index) => (
          <StyledOption key={index} value={option?.name }>
            {option.name }
          </StyledOption>
        ))}
      </StyledSelect>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: ${(props: ContainerInterface) =>
    props.width ? `${props.width}%` : '100%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${(props: SelectInterface) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: SelectInterface) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
  @media (max-width: 970px) {
    width: 100%;
    padding: 0px;
  }
`;

const StyledSelect = styled.select`
  display: inline-block;
  margin-bottom: 25px;
  padding: 10px 20px;
  vertical-align: baseline;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 15px;
  background-clip: padding-box;
  background-color: #fff !important;
  color: #767676;
  &:focus {
    border: 1px solid #cdcdcd;
    outline: none;
  }
`;

const StyledOption = styled.option`
color: #767676;
background: white;
font-weight: small;
display: flex;
white-space: pre;
min-height: 20px;
padding: 0px 2px 2px;
`;
