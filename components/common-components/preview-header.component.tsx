import React, {useContext} from 'react';
import { HeaderInterface } from '@Interface/index';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { FormContext } from '@Context/index';

export const PreviewDetailHeader = (props: HeaderInterface) => {
  const router = useRouter();
  const { formData } = useContext(FormContext)

  return (
    <DetailHeader>
      <HeaderText>{props?.text}</HeaderText>
      <PenIcon onClick={() => router.push(`/application/${formData.unitId}`)} />
    </DetailHeader>
  );
};

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderText = styled.h3`
  font-size: 16px;
  margin: 10px 0px;
  font-weight: 600;
  color: #884c52;
`;
const PenIcon = styled(FaPen)`
  font-size: 14px;
  margin-left: 10px;
  color: #73b680;
  cursor: pointer;
`;
