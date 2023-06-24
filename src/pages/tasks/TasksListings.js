import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Task from "./Task";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function TasksListings({ message, filter = "" }) {
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  /* 
    Fetch all tasks and by query if a search has been carried out
    Change header based on if the page is Tasks or Watched
  */
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?${filter}search=${query}`);
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
  }, [filter, query, pathname]);

  let headerText = "TASKS";

  if (pathname === "/watched") {
    headerText = "WATCHED";
  }

  /* 
    Returns list of all tasks including create task button
  */
  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <div>
        <h3 className="text-dark">{headerText}</h3>
        </div>
        <Form
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search tasks"
            aria-label="Search bar"
          />
        </Form>
        <div>
          <Button
            as={Link}
            to="/tasks/create"
              className="mt-5"
          >
            Create Task
          </Button>
        </div>
        {hasLoaded ? (
          <>
            {tasks.results.length ? (
              <InfiniteScroll
                children={tasks.results.map((tasks) => (
                  <Task key={tasks.id} {...tasks} setTasks={setTasks} />
                ))}
                dataLength={tasks.results.length}
                loader={<Asset spinner />}
                hasMore={!!tasks.next}
                next={() => fetchMoreData(tasks, setTasks)}
              />
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <div>
      </div>
    </Row>
  );
}

export default TasksListings;
