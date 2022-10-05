import React, { useContext } from 'react';
import { FormContext } from '../context';
import { FormContainer, Container } from './Application.component';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';
import { FormDataInterface } from '../interface';

export const ApplicationPreviewComponent = ({formData}) => {
  return (
    <Container>
      <FormContainer>
        <ContentContainer>
          <HeaderContainer></HeaderContainer>
          <SectionContainer>
            <DatailContainer>
              <DetailHeader>
                <HeaderText>Applicant information</HeaderText> <PenIcon />
              </DetailHeader>
              <DetailLabel>Applicant name</DetailLabel>
              <DetailValue>{`${formData?.firstName} ${formData?.lastName}`}</DetailValue>
            </DatailContainer>

            <DatailContainer>
              <DetailLabel>Applicant national id number</DetailLabel>
              <DetailValue>{formData?.nationalId}</DetailValue>
            </DatailContainer>
            <DatailContainer>
              <DetailLabel>Applicant date of birth</DetailLabel>
              <DetailValue>{formData?.dateOfBirth}</DetailValue>
            </DatailContainer>

            <DatailContainer>
              <DetailLabel>Applicant current address</DetailLabel>
              <DetailValue>
                {`${formData?.currentAddress?.line2} ${formData?.currentAddress?.line2} ${formData?.currentAddress?.city} ${formData?.currentAddress?.state} ${formData?.currentAddress?.country}`}
              </DetailValue>
            </DatailContainer>
            <DetailGroup>
              <DatailContainer>
                <DetailLabel>Applicant email</DetailLabel>
                <DetailValue> {formData?.email}</DetailValue>
              </DatailContainer>
              <DatailContainer>
                <DetailLabel>Applicant phone number</DetailLabel>
                <DetailValue> {formData?.phone}</DetailValue>
              </DatailContainer>
            </DetailGroup>
            <DatailContainer>
              <DetailLabel>Emergency contact relationship</DetailLabel>
              <DetailValue>
                {formData?.emergencyContact?.relationship}
              </DetailValue>
            </DatailContainer>

            <DetailGroup>
              <DatailContainer>
                <DetailLabel>Emergency contact email</DetailLabel>
                <DetailValue> {formData?.emergencyContact?.email}</DetailValue>
              </DatailContainer>
              <DatailContainer>
                <DetailLabel>Emergency contact phone</DetailLabel>
                <DetailValue> {formData?.emergencyContact?.phone}</DetailValue>
              </DatailContainer>
            </DetailGroup>
          </SectionContainer>
          <SectionContainer>
            <DatailContainer>
              <DetailHeader>
                <HeaderText>Rental history</HeaderText> <PenIcon />
              </DetailHeader>
            </DatailContainer>

            <DatailContainer>
              <DetailLabel>RentalAddress</DetailLabel>
              <DetailValue>{`${formData?.rentalHistory?.rentalAddress?.line} ${formData?.rentalHistory?.rentalAddress?.line2} ${formData?.rentalHistory?.rentalAddress?.city} ${formData?.rentalHistory?.rentalAddress?.state} ${formData?.rentalHistory?.rentalAddress?.country}`}</DetailValue>
            </DatailContainer>
            <DetailGroup>
              <DatailContainer>
                <DetailLabel>Rental start date</DetailLabel>
                <DetailValue>{formData?.rentalHistory?.startDate}</DetailValue>
              </DatailContainer>
              <DatailContainer>
                <DetailLabel>Rental end date</DetailLabel>
                <DetailValue>{formData?.rentalHistory?.endDate} </DetailValue>
              </DatailContainer>
            </DetailGroup>
            <DatailContainer>
              <DetailLabel>Monthly rent</DetailLabel>
              <DetailValue>{formData?.rentalHistory?.rent}</DetailValue>
            </DatailContainer>
            <DatailContainer>
              <DetailLabel>Reason for leaving</DetailLabel>
              <DetailValue>
                {formData?.rentalHistory?.reasonForLeaving}
              </DetailValue>
            </DatailContainer>
            <DatailContainer>
              <DetailLabel>Rental owner name</DetailLabel>
              <DetailValue>{`${formData?.rentalHistory?.rentalOwner?.firstName} ${formData?.rentalHistory?.rentalOwner?.lastName}`}</DetailValue>
            </DatailContainer>
            <DetailGroup>
              <DatailContainer>
                <DetailLabel>Rental owner phone number</DetailLabel>
                <DetailValue>
                  {formData?.rentalHistory?.rentalOwner?.phone}
                </DetailValue>
              </DatailContainer>
              <DatailContainer>
                <DetailLabel>Rental owner email</DetailLabel>
                <DetailValue>
                  {formData?.rentalHistory?.rentalOwner?.email}
                </DetailValue>
              </DatailContainer>
            </DetailGroup>
          </SectionContainer>
          <SectionContainer>
            <DatailContainer>
              <DetailHeader>
                <HeaderText>Employment</HeaderText> <PenIcon />
              </DetailHeader>
            </DatailContainer>
            <DatailContainer>
              <DetailLabel>Employer name</DetailLabel>
              <DetailValue>
                {formData?.employmentHistory?.employerName}
              </DetailValue>
            </DatailContainer>
            <DetailGroup>
              <DatailContainer>
                <DetailLabel>Position held</DetailLabel>
                <DetailValue>
                  {formData?.employmentHistory?.positionHeld}
                </DetailValue>
              </DatailContainer>
              <DatailContainer>
                <DetailLabel>Employer email</DetailLabel>
                <DetailValue>
                  {formData?.employmentHistory?.employerName}
                </DetailValue>
              </DatailContainer>
            </DetailGroup>
          </SectionContainer>
          <SectionContainer>
            <DatailContainer>
              <DetailHeader>
                <HeaderText>Terms and conditions</HeaderText> <PenIcon />
              </DetailHeader>
            </DatailContainer>
            <DatailContainer>
              <DetailValue>
                I understand that this is a routine application to establish
                credit, character, employment, and rental history. I also
                understand that this is NOT an agreement to rent and that all
                applications must be approved. I authorize verification of
                references given. I declare that the statements above are true
                and correct, and I agree that the landlord may terminate my
                agreement entered into in reliance on any misstatement made
                above.
              </DetailValue>
            </DatailContainer>
            <DatailContainer>
              <DetailLabel>
                {formData?.terms?.agreed ? 'True' : 'False'}
              </DetailLabel>
              <DetailValue>True</DetailValue>
            </DatailContainer>
            <DatailContainer>
              <DetailLabel>Agreed by</DetailLabel>
              <DetailValue>{formData?.terms?.agreedBy}</DetailValue>
            </DatailContainer>
          </SectionContainer>
          <SummaryContainer>
            <DetailValue>
              By submitting this application I am giving
              buildit.managebuilding.com permission to run a background check on
              myself and any cosigners, and agreeing to the site Privacy Policy
              and Terms of Service
            </DetailValue>
          </SummaryContainer>
        </ContentContainer>
      </FormContainer>
    </Container>
  );
};

const HeaderContainer = styled.div`
display: block;
width: 100%;
padding-bottom: 10px;
border-bottom: 1px solid #D8D8D8;
}
`;

const SectionContainer = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #d8d8d8;
`;
const ContentContainer = styled.div`
  display: flex;
  padding: 40px 40px;
  flex-direction: column;
`;

const DatailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailHeader = styled.div`
  display: flex;
  align-items: center;
`;

const DetailLabel = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: #767676;
  margin: 10px 0px;
`;

const HeaderText = styled.h3`
  font-size: 16px;
  margin: 10px 0px;
  font-weight: 600;
  color: #a54d56;
`;

const DetailValue = styled.h3`
  font-size: 12px;
  font-weight: 400;
  margin-top: 2px;
  color: #191919;
`;
const DetailGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  flex-wrap: wrap;
`;

const SummaryContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PenIcon = styled(FaPen)`
  font-size: 12px;
  margin-left: 10px;
  color: #73b680;
  cursor: pointer;
`;
