import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});


  const handleFormChange = (event) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [event.target.name]: event.target.value
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    e.reset();
    formInitialDetails.firstName = "";
    formInitialDetails.lastName = "";
    formInitialDetails.email = "";
    formInitialDetails.phone = "";
    formInitialDetails.message = "";
  };

  return (
    <Formik
      initialValues={{ ...formInitialDetails }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(15, "must be 20 characters or less")
          .required("required"),
        email: Yup.string().email("invalid email adress").required("Required"),
        phone: Yup.number().integer("Input a valid phone number").min(11).max(12).required("Required"),
        message: Yup.string().required("Required")
          .max(20, "")
          .required("required")
      })}
      onSubmit={async (e) => {
        e.preventDefault();
        setButtonText("sending");
        let response = await fetch("http://localhost:5000/contact", {
          headers: {
            "Content-Type": "Application/json;charset=utf-8"
          },
          body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
          setStatus({ success: true, message: "Message sent successfully" });
        } else {
          setStatus({ success: false, message: "Something went wrong, please try again" });
        }


      }}
    >
      <section className="contact" id="connect">
        <Container>
          <Row>
            <Col md={6}>
              <img src={contactImg} alt="Contact us" />
            </Col>
            <Col>
              <h2>Contact me</h2>
              <Form>
                <Row>
                  <Col sm={12} className="px-1">
                    <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={handleFormChange} />
                    <ErrorMessage name="firstName" className="error-message" />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input type="text" name="lasttName" value={formDetails.lastName} placeholder="Last Name" onChange={handleFormChange} />
                    <ErrorMessage name="lastName" />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input type="email" name="email" value={formDetails.email} placeholder="Email Adress" onChange={handleFormChange} />
                    <ErrorMessage name="email" />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone NUmber" onChange={handleFormChange} />
                    <ErrorMessage name="phone" />
                  </Col>
                  <Col sm={6} className="px-1">
                    <textarea rows={6} name="message" value={formDetails.message} placeholder="Drop us a message" onChange={handleFormChange} />
                    <ErrorMessage name="message" />
                  </Col>
                  <Button type="submit" onClick={handleSubmit}><span>{buttonText}</span></Button>
                </Row>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Formik>
  );
};
