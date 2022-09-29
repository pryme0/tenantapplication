import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProgressInterface, CounterInterface } from '../interface';
import { FaChevronLeft } from 'react-icons/fa';
import { ScrollContext } from '../context';

export const ProgressComponent = () => {
  const { scrollHeight } = useContext(ScrollContext);
  const [firstProgressStage, setFirstProgressStage] = useState(true);
  const [secoundProgressStage, setSecoundProgressStage] = useState(false);
  const [thirdProgressStage, setThirdProgressStage] = useState(false);
  const [fourthProgressStage, setFourthProgressStage] = useState(false);

  useEffect(() => {
    if (scrollHeight > 0 && scrollHeight <= 450) {
      setFirstProgressStage(true);
      setSecoundProgressStage(false);
      setThirdProgressStage(false);
      setFourthProgressStage(false);
    }
    if (scrollHeight > 450 && scrollHeight <= 1300) {
      setFirstProgressStage(false);
      setSecoundProgressStage(true);
      setThirdProgressStage(false);
      setFourthProgressStage(false);
    }

    if (scrollHeight > 1300 && scrollHeight <= 1700) {
      setFirstProgressStage(false);
      setSecoundProgressStage(false);
      setThirdProgressStage(true);
      setFourthProgressStage(false);
    }

    if (scrollHeight >= 1700) {
      setFirstProgressStage(false);
      setSecoundProgressStage(false);
      setThirdProgressStage(false);
      setFourthProgressStage(true);
    }
  }, [scrollHeight]);

  return (
    <ProgressBarContainer>
      <HeadingContainer>
        <StyledChevronLeft /> <HeadingTitle>Rental Application</HeadingTitle>
      </HeadingContainer>
      <ListContainer>
        <StyledSpan></StyledSpan>
        <StepHeadingContainer>
          <CounterContainer>
            <StepCounter active>1</StepCounter>
          </CounterContainer>
          <TitleContainer>
            <Title active>Your information</Title>
          </TitleContainer>
        </StepHeadingContainer>
        <StyledList>
          <StyledListItem scrollHeight={firstProgressStage}>
            Applicant information
          </StyledListItem>
          <StyledListItem scrollHeight={secoundProgressStage}>
            Rental history
          </StyledListItem>
          <StyledListItem scrollHeight={thirdProgressStage}>
            Employment history
          </StyledListItem>
          <StyledListItem scrollHeight={fourthProgressStage}>
            Terms and condition
          </StyledListItem>
        </StyledList>
        <StepHeadingContainer>
          <CounterContainer>
            <StepCounter active={true}>2</StepCounter>
          </CounterContainer>
          <TitleContainer>
            <Title active={true}>Review apllication</Title>
          </TitleContainer>
        </StepHeadingContainer>
        <StepHeadingContainer>
          <CounterContainer>
            <StepCounter active={false}>3</StepCounter>
          </CounterContainer>
          <TitleContainer>
            <Title active={false}>Complete</Title>
          </TitleContainer>
        </StepHeadingContainer>
      </ListContainer>
    </ProgressBarContainer>
  );
};

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const HeadingTitle = styled.h3`
  color: #DA636F;
  padding-left: 15px;
  font-weight: 550;
`;

const TitleContainer = styled.div`
display: flex;
align-items: center;
margin: 0px;
@media (max-width: 970px) {
  height: 100%
  align-items: end;
}
`;

const Title = styled.h3`
  font-size: ${(props: ProgressInterface) => (props.active ? '16' : '14')}px;
  font-weight: ${(props: ProgressInterface) => (props.active ? '700' : '500')};
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  margin: 5px;
  color: ${(props: ProgressInterface) =>
    props.active ? '#DA636F' : '#767676'};
  width: 100%;
  text-align: center;
  @media (max-width: 970px) {
    padding-top: 10px;
  }
`;

const StepHeadingContainer = styled.div`
  display: flex;
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    width: 30%;
  }
`;

const ProgressBarContainer = styled.div`
  color: #000000;
  position: sticky;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 50px;
  flex: 0 0 22%;
  min-width: 20%;
  margin-left: 50px;
  @media (max-width: 970px) {
    display: flex;
    position: relative;
    padding: 0px 25px;
    flex-direction: column;
    min-width: 0%;
    margin: 0px auto;
  }
`;

const CounterContainer = styled.div`
  z-index: 20;
  display: flex;
  font-weight: 600;
  font-size: 12px;
  justify-content: center;
  @media (max-width: 970px) {
    width: 100%;
    height: 100%;
  }
`;

const StepCounter = styled.h3`
  background-color: ${(props: ProgressInterface) =>
    props.active ? '#DA636F' : '#ffff'};
  color: ${(props: ProgressInterface) => (props.active ? '#ffff' : '#DA636F')};
  font-weight: 600;
  font-size: 10px;
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0.1px solid #d5969c;
  margin-top: 0px;
  @media (max-width: 970px) {
    width: 50px;
    height: 50px;
    font-size: 14px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  padding-left: 5px;
  @media (max-width: 970px) {
    width: 100%;
    flex-direction: row;
    padding-left: 0px;
    justify-content: center;
    margin: 0px auto;
    flex-wrap: nowrap;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin-left: 10px;
  padding-left: 40px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media (max-width: 970px) {
    display: none;
    padding-left: 20px;
    margin-left: 0px;
  }
`;

const StyledListItem = styled.li`
  font-weight: 500;
  margin: 0px;
  cursor: pointer;
  color: #767676;
  font-size: 12px;
  font-weight: ${(props: { scrollHeight: boolean }) =>
    props.scrollHeight ? '600' : '400'};
  letter-spacing: 0.43px;
  padding: 0px;
  line-height: 20px;
  font-family: Montserrat, arial, sans-serif;
  transition: font-weight 0.5s ease-out;
`;

const StyledChevronLeft = styled(FaChevronLeft)`
  color: #DA636F;
  font-weight: 200;
  font-size: 25px;
`;

const StyledSpan = styled.span`
  width: 100%;
  height: 80%;
  border-left: 1px solid #DA636F;
  position: absolute;
  margin-left: 15px;
  @media (max-width: 970px) {
    border-top: 1px solid #DA636F;
    border-left: 0px;
    margin-left: 0px;
    margin-right: 0px;
    width: 60%;
    margin-top: 25px;
    margin-left: 20px;
  }
`;
