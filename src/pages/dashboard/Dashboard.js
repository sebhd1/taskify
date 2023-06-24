import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Line } from "react-chartjs-2";
import TaskStatusTable from "../../components/TaskStatusTable";
import TaskCompleteFilter from "../../components/TaskCompleteFilter";
import HighPriorityTasks from "../../components/HighPriorityTasks";
import styles from "../../styles/Dashboard.module.css";
import appStyles from "../../App.module.css";

const Dashboard = () => {
  const currentUser = useCurrentUser();

  /*
    Returns dashboard page with task count table,
    line chart, high priority tasks &
    not started tasks
  */

  // Example data for the line chart
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Task Progress",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
      <>
        <Container className="mt-5">
          <Row>
            <Col className={`${appStyles.LightText} ${styles.BorderBox}`}>
              <Col
                  md={12}
                  className={`${appStyles.LightText} ${styles.BorderBox} ${appStyles.Header}`}
              >
                Hello {currentUser.username} {currentUser.image}
                <hr className={styles.HorizontalLine} />
              </Col>
              <Col
                  md={12}
                  className={`${appStyles.LightText} ${styles.BorderBox}`}
              >
                <Row>
                  <Col>
                    <TaskStatusTable />
                  </Col>
                  <Col className={`${appStyles.LightText} ${styles.BorderBox}`}>
                    <Line data={lineChartData} />
                  </Col>
                </Row>
                <hr className={styles.HorizontalLine} />
              </Col>
              <Col
                  lg={12}
                  className={`${appStyles.DarkText} ${styles.BorderBox} ${appStyles.TextAlignCenter}`}
              >
                <h3 className={`${appStyles.LightText} ${styles.BorderBox}`}>
                  High Priority tasks
                </h3>
                <HighPriorityTasks />
              </Col>
              <Col
                  lg={12}
                  className={`${appStyles.DarkText} ${styles.BorderBox}  ${appStyles.TextAlignCenter}`}
              >
                <h3 className={`${appStyles.LightText} ${styles.BorderBox}`}>
                  Not Started Tasks
                </h3>
                <TaskCompleteFilter />
              </Col>
              <div className={appStyles.ScrollToTopButton}></div>
            </Col>
          </Row>
        </Container>
      </>
  );
};

export default Dashboard;
