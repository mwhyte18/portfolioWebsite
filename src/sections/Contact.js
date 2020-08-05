import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="splitthreeways">
        <div className="descriptioncontact">
          <h3>Marco Whyte</h3>
          <p>
            If you have any question, comments, ideas, critiques or just want to
            reach out, send me an email!
          </p>
        </div>
        <div className="emailandphone">
          <p>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              style={{ marginRight: 10, color: "#6457db", fontSize: 20 }}
            />
            marcowhyte2@gmail.com
          </p>
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ marginRight: 10, color: "#6457db", fontSize: 20 }}
            />
            +1 901 830 8504
          </p>
        </div>
      </div>
      <form action="https://formspree.io/meqrvvdl" method="POST">
        <input
          className="formInput"
          type="text"
          required
          name="name"
          placeholder="Your Name"
        />
        <input
          className="formInput"
          required
          type="email"
          name="_replyto"
          placeholder="Your Email"
        />
        <textarea
          className="formArea"
          required
          name="message"
          placeholder="Message"
        ></textarea>
        <button className="submitForm" type="submit">
          Submit
        </button>{" "}
      </form>
    </div>
  );
};

export default Contact;
