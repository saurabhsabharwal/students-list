import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {AppContext} from "../../context";
import {useHistory, useParams, withRouter} from "react-router-dom";
import StudentProfilePic from "../../icons/student 1.png";

const StudentProfile = () => {
    const { roll } = useParams();
    const history = useHistory();
    const list = useContext(AppContext);
    const [Student, setStudent] = useState({});

    useEffect(() => {
        const filtered = list.filter((item) => item.RollNumber === Number(roll));

        if (filtered.length === 1) {
            setStudent(filtered[0]);
        } else {
            history.push('/');
        }
    }, [history, list, roll]);

    return (
        typeof Student !== "undefined" && (
            <Wrapper>
                <Container>
                    <ProfilePicture src={StudentProfilePic} alt="Profile pic" />
                    <OtherInfo>
                        <Name>{ Student.Name }</Name>
                        <RollNumber>Roll number - { Student.RollNumber }</RollNumber>
                        <Class>Class - { Student.Class }</Class>
                        <Age>Age - { Student.Age } years old</Age>
                        <Address>Address - { Student.Address }</Address>
                    </OtherInfo>
                </Container>
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  transition: 0.1s;
  padding: 8px;
  width: 100%;
`;

const ProfilePicture = styled.img`
  max-height: 150px;
`;

const OtherInfo = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  display: flex;
`;

const Class = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const RollNumber = styled(Class)``;

const Age = styled(Class)``;

const Address = styled(Class)``;

export default withRouter(StudentProfile);
