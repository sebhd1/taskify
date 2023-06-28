import React, { useState } from "react";
import { Alert, Form, Button, Col, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import contactImage from "../../assets/contact-image.jpg";


const ContactForm = () => {
  const [form, setForm] = useState({
    reason: "GENERAL",
    name: "",
    email: "",
    message: "",
  });

  const { reason, name, email, message } = form;

  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  /*
    Handle changes to input fields
  */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/contact/", form);
      setShowModal(true);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  /*
    Handle closing of modal
  */
  const handleCloseModal = () => {
    setShowModal(false);
    history.push("/");
  };

  const textFields = (
      <div className="text-center">
        <Form.Group>
          <Form.Label>Reason</Form.Label>

          <Form.Control
              as="select"
              name="reason"
              value={reason}
              onChange={handleChange}
              aria-label="reason"
          >
            <option value="GENERAL">General Enquiry</option>
            <option value="LOGIN">Login issue</option>
            <option value="REPORT_POST">Report a task</option>
            <option value="DELETE_ACCOUNT">Delete Account</option>
          </Form.Control>
        </Form.Group>

        {errors?.reason?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
        ))}

        <Form.Group>
          <Form.Label>Name</Form.Label>

          <Form.Control
              as="input"
              name="name"
              value={name}
              onChange={handleChange}
              aria-label="name"
          ></Form.Control>
        </Form.Group>

        {errors?.name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
        ))}

        <Form.Group>
          <Form.Label>Email</Form.Label>

          <Form.Control
              name="email"
              type="email"

              value={email}
              onChange={handleChange}
              aria-label="email"
          ></Form.Control>
        </Form.Group>

        {errors?.email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
        ))}

        <Form.Group>
          <Form.Label>Message</Form.Label>

          <Form.Control
              as="textarea"
              name="message"

              value={message}
              onChange={handleChange}
              aria-label="message"
              rows={7}
          ></Form.Control>
        </Form.Group>

        {errors?.message?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
        ))}
        <div className="d-flex justify-content-around">
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
          <Button onClick={() => history.goBack()}>Cancel</Button>
        </div>
      </div>
  );

  return (
      <Row>
        <Col md={6}>
          <div>
            <Col md={7} lg={8}>
              <div
              >
                <h3>Contact us</h3>
                <div >{textFields}</div>
              </div>
            </Col>
          </div>
        </Col>
        <Col md={6}>
          <div className="d-flex align-items-center justify-content-center">
            <img
                src={contactImage}
                alt="Contact Image"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                className="mt-5"
            />
          </div>
        </Col>
        {showModal && (
            <Modal show={showModal} onHide={handleCloseModal} centered={true}>
              <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Thank you for contacting us, we will get back to you shortly!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        )}
      </Row>
  );
};

export default ContactForm;
