import { ScrollContext } from '@Context/index';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProgressListInterface } from '@Interface/index';

export const ProgressList = (data: ProgressListInterface) => {
  const { scrollHeight } = useContext(ScrollContext);

  const router = useRouter();

  return (
    <ListContainer>
      {data?.data?.map((item, index) => {
        return (
          <ListItem
            key={index}
            inFocus={
              scrollHeight >= item.minRange && scrollHeight <= item.maxRange
            }
          >
            {item.name}
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
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

const ListItem = styled.li`
  font-weight: 500;
  margin: 0px;
  cursor: pointer;
  color: #767676;
  font-size: 12px;
  font-weight: ${(props: { inFocus: boolean }) =>
    props.inFocus ? '600' : '400'};

  letter-spacing: 0.43px;
  padding: 0px;
  line-height: 20px;
  font-family: Montserrat, arial, sans-serif;
  transition: font-weight 0.5s ease-out;
`;
