import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, Modal, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropDown } from "../../components/DropDown";

const Pack = (props) => {
  const {
    id,
    owner,
    title,
    profile_id,
    profile_image,
    created_on,
    pack_description,
    tasks,
    packDetail,
  } = props;

  const [taskTitles, setTaskTitles] = useState([]);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    history.push(`/packs/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/packs/${id}/`);
      history.push(`/profiles/${profile_id}`);
    } catch (err) {
      console.log(err);
      setShowDeleteModal(false);
    }
  };

  useEffect(() => {
    const fetchTaskTitles = async () => {
      const titles = await Promise.all(
          tasks.map(async (taskId) => {
            const response = await axiosRes.get(`/tasks/${taskId}`);
            return response.data.title;
          })
      );
      setTaskTitles(titles);
    };
    fetchTaskTitles();
  }, [tasks]);

  return (
      <Card className='mb-5 mt-5'>
        <Card.Body>
          <div className="d-flex justify-content-end">
            {is_owner && packDetail && (
                <DropDown handleEdit={handleEdit} handleDelete={() => setShowDeleteModal(true)} />
            )}
          </div>
          <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered={true}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this pack?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
          <Link to={`/packs/${id}`}>
            <Container>Pack: {title}</Container>
          </Link>
          <Container className="align-items-center justify-content-between">
            <div>
              <div>
                Posted by:{" "}
                <Link to={`/profiles/${profile_id}`}>
                  <span>{owner}</span> <Avatar src={profile_image} height={55} />
                </Link>
              </div>
              <div>Posted on: {created_on}</div>
            </div>
            <hr/>
            <div>
              <div>
                <div>Detail of pack</div>
                <div>{pack_description}</div>
              </div>
              <hr/>
              <div className="text-dark">
                <div>Associated Tasks:</div>
                <ul>
                  {taskTitles.map((title, index) => (
                      <li key={index}>
                        <Link to={`/tasks/${tasks[index]}`} className="text-dark">
                          {title}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Card.Body>
      </Card>
  );
};

export default Pack;
