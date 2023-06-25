import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { axiosReq } from "../api/axiosDefaults";
import Task from "../pages/tasks/Task";
import Asset from "../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../utils/utils";
import NoResults from "../assets/no-results.png";

function TaskCompleteFilter({ message, filter = "" }) {
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?completed=NOT-STARTED`);
        setTasks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTasks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter]);

  return (
      <Row className="justify-content-center mb-4">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          {hasLoaded ? (
              <div className="overflow-auto">
                {tasks.results.length ? (
                    <InfiniteScroll
                        children={tasks.results.map((task) => (
                            <Task key={task.id} {...task} setTasks={setTasks} />
                        ))}
                        dataLength={tasks.results.length}
                        loader={<Asset spinner />}
                        hasMore={!!tasks.next}
                        next={() => fetchMoreData(tasks, setTasks)}
                    />
                ) : (
                    <Container className="text-center">
                      <Asset src={NoResults} message={message} />
                      <p>It seems all tasks have been completed!</p>
                    </Container>
                )}
              </div>
          ) : (
              <Container className="text-center">
                <Asset spinner />
              </Container>
          )}
        </Col>
      </Row>
  );
}

export default TaskCompleteFilter;
