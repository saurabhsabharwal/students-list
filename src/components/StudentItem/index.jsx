import React from 'react';
import styled from "styled-components";
import StudentProfile from "../../icons/student 1.png";
import {useHistory} from "react-router-dom";

const StudentItem = ({ data }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/student-profile/${data.RollNumber}`)
    };

    return (
        <Wrapper>
            <Container onClick={handleClick}>
                <ProfilePicture src={StudentProfile} alt="Profile pic" />
                <OtherInfo>
                    <Name><RollNumber>{ data.RollNumber }</RollNumber> - { data.Name }</Name>
                    <Class>Class - { data.Class }</Class>
                    <Age>Age - { data.Age }</Age>
                </OtherInfo>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  transition: 0.1s;
  cursor: pointer;
  padding: 8px;
  width: 100%;

  &:hover {
    box-shadow: 0 0 50px rgb(17 17 17 / 50%);
    transform: rotate(
            -1deg) translateY(-5px) scale(1.0025);
  }
`;

const ProfilePicture = styled.img`
  max-height: 50px;
`;

const OtherInfo = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 14px;
  display: flex;
`;

const RollNumber = styled(Name)`
  margin-right: 2px;
`;

const Class = styled.div`
  color: #676565B2;
  font-size: 12px;
  margin-top: 4px;
`;

const Age = styled(Class)``;


export default StudentItem;
