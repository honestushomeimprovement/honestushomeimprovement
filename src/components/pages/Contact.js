import React, { useState, useRef } from "react";

import { validateEmail } from "../../utils/helpers";

// import emailjs from "@emailjs/browser";

import "../../styles/Contact.css";

function Contact() {
  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 100);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      if (!name) {
        setErrorMessage(`Enter a valid name input `);
      } else {
        setErrorMessage("");
      }
      setName(inputValue);
    } else if (inputType === "email") {
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
      } else {
        setErrorMessage("");
      }
      setEmail(inputValue);
    } else {
      if (!message) {
        setErrorMessage(`Enter a valid message input `);
      } else {
        setErrorMessage("");
      }
      setMessage(inputValue);
    }
  };

  const form = useRef();

  // const sendMail = () => {
  //   const serviceID = "service_e4hx5id";
  //   const templateID = "template_h2id04w";

  //   emailjs
  //     .sendForm(serviceID, templateID, form.current, "18wXefd_i5Ikhn5wK")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setName("");
  //         setEmail("");
  //         setMessage("");
  //         setErrorMessage("");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateEmail(email)) {
  //     setErrorMessage("Email is invalid");
  //     return false;
  //   } else if (!name) {
  //     setErrorMessage(`Enter a valid name input `);
  //     return false;
  //   } else if (!message) {
  //     setErrorMessage(`Enter a valid message input`);
  //     return false;
  //   } else {
  //     sendMail();

  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //     setErrorMessage("");
  //   }
  // };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center pb-4 text-white">
      <h1 className="p-3 contact-head">CONTACT PAGE</h1>
      <div className="d-flex flex-column align-items-center">
        <h3 className="d-flex">
          {" "}
          Feel free to reach out to me through email:{" "}
        </h3>
        <h3>
          <a
            className="email-link"
            target="_blank"
            href="mailto:google@gmail.com"
          >
            {" "}
            Joey@example.com{" "}
          </a>{" "}
        </h3>
        <h3> OR Contact Through the Form Below</h3>
      </div>
      <form
        ref={form}
        className="d-flex flex-column custom-form animate__animated animate__backInRight"
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
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div className="alert alert-warning custom-alert" role="alert">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
