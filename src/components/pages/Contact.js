import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import { validateEmail } from "../../utils/helpers";


import emailjs from "@emailjs/browser";

import "../../styles/Contact.css";

function Contact() {
  const serviceID = "service_7ldncga";
  const templateID = "template_xkx9md9";

  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 100);

  const { paramSubject } = useParams();

  console.log(paramSubject);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (paramSubject) {
      setSubject("I am interested in your " + paramSubject + " Services");
    }
  }, []);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const form = useRef();

  const sendMail = () => {

    emailjs
      .sendForm(serviceID, templateID, form.current, "3bqnSGRkj7eMQCuWI")
      .then(
        (result) => {
          console.log(result.text)
          setSuccessMessage("Message Has Been Sent");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setErrorMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return false;
    } else if (!name) {
      setErrorMessage(`Enter a valid name input `);
      return false;
    } else if (!message) {
      setErrorMessage(`Enter a valid message input`);
      return false;
    } else {
      sendMail();
      console.log(form);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrorMessage("");
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center pb-4 text-white">
      <h1 className="p-3 contact-head">CONTACT PAGE</h1>
      <div className="d-flex flex-column align-items-center">
        <h4 className="d-flex contact-writing">
          {" "}
          Feel free to reach out to me through email:{" "}
        </h4>
        <h4 className="contact-writing">
          <a
            className="email-link"
            target="_blank"
            href="mailto:Honestushomeimprovement@gmail.com"
          >
            {" "}
            Honestushomeimprovement@gmail.com{" "}
          </a>{" "}
        </h4>
        <h4 className="contact-writing"> OR </h4>
        <h4 className="contact-writing">Contact Through the Form Below</h4>
      </div>
      {errorMessage && (
        <div className="alert alert-warning custom-alert" role="alert">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success custom-alert" role="alert">
          <p className="error-text">{successMessage}</p>
        </div>
      )}
      <form
        ref={form}
        className="d-flex flex-column custom-form animate__animated animate__fadeInLeft"
      >
        <input
          className="form-control"
          value={name}
          name="name"
          id="name"
          onChange={handleInputChange}
          onClick={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          className="form-control"
          value={email}
          name="email"
          id="email"
          onChange={handleInputChange}
          onClick={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          className="form-control"
          value={subject}
          name="subject"
          id="subject"
          onChange={handleInputChange}
          onClick={handleInputChange}
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="message form-control"
          value={message}
          id="message"
          name="message"
          onChange={handleInputChange}
          onClick={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
