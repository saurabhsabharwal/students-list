import React, {useContext} from "react";
import { AppContext } from "../../context";
import styled from "styled-components";
import StudentItem from "../StudentItem";

const StudentsList = () => {
    const list = useContext(AppContext);
    return (
        <Container>
            <Title>List of students</Title>
            {
                list.map((item, i) => <StudentItem key={i} data={item} />)
            }
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Title = styled.h4`
  
`;

export default StudentsList;
