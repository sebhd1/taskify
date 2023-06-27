import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import TaskStatusTable from "../../components/TaskStatusTable";
import TaskCompleteFilter from "../../components/TaskCompleteFilter";
import HighPriorityTasks from "../../components/HighPriorityTasks";

const Dashboard = () => {
  const currentUser = useCurrentUser();


  return (
      <Container className="mt-5">
        <Row>
          <Col>
            <Col md={12}>
              Hello {currentUser.username} {currentUser.image}
              <hr/>
            </Col>
            <Col md={12}>
              <Row>
                <Col>
                  <TaskStatusTable />
                </Col>
              </Row>
              <hr/>
            </Col>
            <Col lg={12}>
              <h3>High Priority tasks</h3>
              <HighPriorityTasks />
            </Col>
            <Col lg={12}>
              <h3>Not Started Tasks</h3>
              <TaskCompleteFilter />
            </Col>
          </Col>
        </Row>
      </Container>
  );
};

export default Dashboard;
