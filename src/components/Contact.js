import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {};
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        If you have any question, comments, ideas, critiques or just want to
        reach out, send me an email!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nameemail">
          <input
            className="input"
            type="text"
            placeholder="name"
            name="name"
            ref={register}
          />
          <input
            className="input"
            type="text"
            placeholder="email"
            name="email"
            ref={register}
          />
        </div>

        <textarea
          name="Subject"
          placeholder="What's on your mind!"
          ref={register}
        />

        <input className="submmitt" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
