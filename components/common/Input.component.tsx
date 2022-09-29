import React, { useState,useContext, useEffect } from 'react';
import { FormInputInterface } from '../../interface';
import styled ,{ keyframes } from 'styled-components';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import { FormContext} from '../../context';

import 'react-datepicker/dist/react-datepicker.css';

export const InputComponent = (props: FormInputInterface) => {
  const [showDate, setShowDate] = useState(false);
  const [value, setValue] = useState('');
  const toggleDatePicker = () => {
    setShowDate(!showDate);
  };
  const  { inputError} = useContext(FormContext)

  const [errors, setErrors] = useState(inputError);
  const handleDateChange = (e) => {
    setValue(format(e, 'dd/MM/yyyy'));
    if(props.handleChange){
    props.handleChange({target:{name:props.name,value:format(e, 'dd/MM/yyyy')}})
    }
    setShowDate(false);
  };

  useEffect(()=>{
    setErrors(inputError)
  },[inputError])

  return (
    <Container
      width={props.width}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      bordered={props.bordered}
    >
      {props?.label ? <StyledLabel>{props?.label}</StyledLabel> : ''}
      <InputContainer bordered={props.bordered}>
        <InputGroup>
          <StyledInput
            placeholder={props.placeholder}
            required={props.required}
            type={props.type}
            value={props?.value}
            onChange={props.handleChange}
            name={props?.name}
          />
        </InputGroup>
        {props.showDate ? (
          <DateContainer>
            <CalenderIcon onClick={toggleDatePicker} />
          </DateContainer>
        ) : (
          ''
        )}
      </InputContainer>
      {props.showDate && showDate && (
        <DatePickerContainer>
          <StyledDatePickerContainer showDate={showDate}>
            {showDate && (
              <DatePicker
              name={props.name}
                showTimeSelect={false}
                dateFormat={'yyyy/QQQQ'}
                dateFormatCalendar={'MMM yyyy'}
                inline
                open={showDate}
                onChange={handleDateChange}
                onClickOutside={toggleDatePicker}
              />
            )}
          </StyledDatePickerContainer>
        </DatePickerContainer>
      )}
      <WarningTextContainer>
      {errors?.path === props.name?(<WarningText>{errors?.message} *</WarningText>):(<WarningText></WarningText>)}
      </WarningTextContainer>
    </Container>
  );
};



const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DatePickerContainer = styled.div`
  margin: 0px;
  padding: 15px;
  display: flex;
  width: 80%;
  position: absolute;
  top: 65px;
  background-color: #fff;
  z-index: 500;
  border: 1px solid #aeaeae;
  border-radius: 4px;
  box-sizing: border-box;
  @media (max-width: 1100px) {
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: ${(props: FormInputInterface) =>
    props.bordered ? '1px solid #cdcdcd' : '0px'};
  margin-bottom: 0px;
  height: 40px;
  border-radius: 4px;
  padding: 0px 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: ${(props: FormInputInterface) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: FormInputInterface) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
  width: ${(props: FormInputInterface) =>
    props.width ? `${props.width}%` : '100%'};
  justify-content: end;
  @media (max-width: 970px) {
    width: 100%;
    padding: 0px;
  }
`;

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 15px;
  background-clip: padding-box;
  background-color: #fff;
  border: 0px;
  color: #191919;
  &:focus {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  line-height: 12px;
  font-size: 13px;
  color: #767676;
  font-family: Montserrat, arial, sans-serif;
  font-weight: 400;
  display: block;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  heigh: 80px;
  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalenderIcon = styled(FaCalendarAlt)`
  color: #c6c1c1;
  cursor: pointer;
`;

const StyledDatePickerContainer = styled.div`
  width: 100%;
  display: ${(props: {showDate: boolean}) => props.showDate ? `block` : 'none'};
  transition: all 5s ease-out;
  .react-datepicker {
    width: 100%;
    color: blue;
    border: 0px;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__week {
    width: 100%;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
  }
  .react-datepicker__header {
    border-bottom: 0px
    border-top-left-radius: 0px;
  }

  @media (max-width: 970px) {
    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      display: inline-block;
      width: 1rem;
      line-height: 1rem;
      text-align: center;
      margin: 0.366rem;
    }
    .react-datepicker__day-names,
    .react-datepicker__week {
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const WarningTextContainer = styled.div`
display: flex;
margin-top: 0px;
padding-top:0px;
margin-bottom: 10px;
height: 20%;
`;

const WarningText = styled.h3`
font-size :12px;
color: #8b1e1e;
font-weight: 400;
align-items:center;
`
export default InputComponent;
