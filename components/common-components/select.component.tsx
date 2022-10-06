import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SelectInterface, ContainerInterface } from '@Interface/index';
import { FormContext } from '@Context/index';
import { WarningTextContainer, WarningText,StyledLabel } from '@Component/index';

export const Select = (props: SelectInterface) => {
  const { options } = props;
  const { inputError } = useContext(FormContext);
  const [errors, setErrors] = useState(inputError);

  useEffect(() => {
    setErrors(inputError);
  }, [errors, inputError]);


  return (
    <SelectContainer
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      width={props?.width}
    >
      <StyledLabel>{props.label}</StyledLabel>
      <SelectInput
        onChange={props?.handleChange}
        name={props?.name}
      >
        <option value={props?.default}>{props?.default}</option>
        {options?.map((option, index) => (
          <StyledOption key={index} value={option?.name}>
            {option.name}
          </StyledOption>
        ))}
      </SelectInput>
      <WarningTextContainer>
        {errors &&
          errors?.map((error) =>
            error?.path === props?.validationLabel ? (
              <WarningText key={`${Math.random()}`}>
                {error?.message}
              </WarningText>
            ) : (
              <WarningText key={`${Math.random()}`}> </WarningText>
            ),
          )}
      </WarningTextContainer>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
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

const SelectInput = styled.select`
  display: inline-block;
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
  @media (max-width: 970px) {
    height: 30px;
  }
`;
