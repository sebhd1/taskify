import React, { useEffect, useState } from "react";
import { Col, Row, Container, Tabs, Tab, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Asset from "../../components/Asset";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { EditProfileDropdown } from "../../components/DropDown";
import Task from "../tasks/Task";
import Pack from "../packs/Pack";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import Avatar from "../../components/Avatar";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const [profileTasks, setProfileTasks] = useState({ results: [] });
  const [profilePacks, setProfilePacks] = useState({ results: [] });
  const [profileAssigned, setProfileAssigned] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profileTasks },
          { data: profilePacks },
          { data: profileAssigned },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/tasks/?owner__profile=${id}`),
          axiosReq.get(`/packs/?owner__profile=${id}`),
          axiosReq.get(`/tasks/`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileTasks(profileTasks);
        setProfilePacks(profilePacks);
        setProfileAssigned(profileAssigned);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
      <>
        <Row className="px-3 text-center mb-3">
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <div>
              <Avatar src={profile?.image} height={150} />
            </div>
            <div>
              <h3>{profile?.owner}</h3>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <div>
              <div>
                {profile?.owner} currently works as a {profile?.job_role} and has
                a task count of {profile?.tasks_count}.
              </div>
              <div className="d-flex justify-content-around mt-5">
                <Button as={Link} to="/tasks/create">
                  Create Task
                </Button>
                <Button as={Link} to="/packs/create">
                  Create Pack
                </Button>
              </div>

            </div>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <div className="position-relative">
              <div className="position-absolute">
                {profile?.is_owner && <EditProfileDropdown id={profile?.id} />}
              </div>
            </div>
          </Col>
        </Row>
      </>
  );

  const mainProfileTasks = (
      <>
        {profileTasks.results.length ? (
            <InfiniteScroll
                children={profileTasks.results.map((task) => (
                    <Task key={task.id} {...task} setTasks={setProfileTasks} />
                ))}
                dataLength={profileTasks.results.length}
                loader={<Asset spinner />}
                hasMore={!!profileTasks.next}
                next={() => fetchMoreData(profileTasks, setProfileTasks)}
            />
        ) : (
            <Asset
                src={NoResults}
                message={`No results found, ${profile?.owner} hasn't posted yet.`}
            />
        )}
      </>
  );

  const mainProfilePacks = (
      <>
        {profilePacks.results.length ? (
            <InfiniteScroll
                children={profilePacks.results.map((pack) => (
                    <Pack key={pack.id} {...pack} setPacks={setProfilePacks} />
                ))}
                dataLength={profilePacks.results.length}
                loader={<Asset spinner />}
                hasMore={!!profilePacks.next}
                next={() => fetchMoreData(profilePacks, setProfilePacks)}
            />
        ) : (
            <Asset
                src={NoResults}
                message={`No results found, ${profile?.owner} has created no packs.`}
            />
        )}
      </>
  );

  let count = 0;

  const mainProfileAssigned = (
      <>
        {profileAssigned.results.length ? (
            <React.Fragment>
              <InfiniteScroll
                  children={profileAssigned.results.map((task) => {
                    console.log(task);
                    if (task.assigned_to === profile.id) {
                      return (
                          <Task key={task.id} {...task} setTasks={setProfileAssigned} />
                      );
                    } else {
                      count++;
                      return null;
                    }
                  })}
                  dataLength={profileAssigned.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!profileAssigned.next}
                  next={() => fetchMoreData(profileAssigned, setProfileAssigned)}
              />
              {count === profileAssigned.results.length && (
                  <Asset
                      src={NoResults}
                      message={`No results found, ${profile?.owner} has not been assigned any tasks.`}
                  />
              )}
            </React.Fragment>
        ) : (
            <Asset
                src={NoResults}
                message={`No results found, ${profile?.owner} has not been assigned any tasks.`}
            />
        )}
      </>
  );

  return (
      <div>
        <Row>
          <Col className="py-2 p-0 p-lg-2" lg={12}>
            <Container>
              {hasLoaded ? <>{mainProfile}</> : <Asset spinner />}
              <Tabs defaultActiveKey="task" fill>
                <Tab eventKey="task" title="My Tasks" tabClassName="text-dark">
                  {mainProfileTasks}
                </Tab>
                <Tab eventKey="pack" title="My Packs" tabClassName="text-dark">
                  {mainProfilePacks}
                </Tab>
                <Tab
                    eventKey="assigned"
                    title="Assigned to me"
                    tabClassName="text-dark"
                >
                  {mainProfileAssigned}
                </Tab>
              </Tabs>
            </Container>
          </Col>
        </Row>
      </div>
  );
}

export default ProfilePage;
