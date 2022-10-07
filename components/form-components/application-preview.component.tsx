import React from 'react';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';
import { FormDataInterface } from '@Interface/index';
import {
  PreviewDetailHeader,
  ApplicationFormsContainer,
  Container,
} from '@Component/index';

export const ApplicationPreviewComponent = ({
  formData,
}: {
  formData: FormDataInterface;
}) => {
  return (
    <Container>
      <ApplicationFormsContainer>
        <ContentContainer>
          <HeaderContainer></HeaderContainer>
          <SectionContainer>
            <DatailContainer>
              <PreviewDetailHeader text="Applicant information" />
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
              <PreviewDetailHeader text="Rental history" />
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
              <PreviewDetailHeader text="Employment" />
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
              <PreviewDetailHeader text="Terms and conditions" />
            </DatailContainer>
            <DatailContainer width="100">
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
      </ApplicationFormsContainer>
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
  @media (max-width: 970px) {
    padding: 40px 0px;
  }
`;

const DatailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: { width?: string }) => (props.width ? props.width : 50)}%;
`;

const DetailLabel = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #767676;
  margin: 10px 0px;
`;

const DetailValue = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-top: 2px;
  color: #603c3c;
`;
const DetailGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
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
