import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Profile from "./Profile";

function UserProfiles({ message, filter = "" }) {
  const [profiles, setProfiles] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  /* 
    Fetch all profiles and filter by search query
  */
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(
          `/profiles/?${filter}search=${query}`
        );
        setProfiles(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchProfiles();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  /* 
    Returns list of all users profiles
  */
  return (
    <Row>
      <Col className={` "py-2 p-0 p-lg-2"`} lg={8}>
      <div>
        <h3>Users</h3>
        </div>
        <Form
          onSubmit={(event) => event.preventDefault()}

        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search users"
            aria-label="Search bar"
          />
        </Form>
        <div
          id="scrollableDiv"
          style={{ maxHeight: "500px", overflow: "auto" }}

        >
          {hasLoaded ? (
            <>
              {profiles.results.length ? (
                <InfiniteScroll
                  children={profiles.results.map((profiles) => (
                    <Profile
                      key={profiles.id}
                      {...profiles}
                      setProfiles={setProfiles}

                    />
                  ))}
                  dataLength={profiles.results.length}

                  loader={<Asset spinner />}
                  hasMore={!!profiles.next}
                  next={() => fetchMoreData(profiles, setProfiles)}
                  scrollableTarget="scrollableDiv"
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
        </div>
      </Col>
    </Row>
  );
}

export default UserProfiles;
