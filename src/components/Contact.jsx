import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsCheckCircle } from "react-icons/bs";
import SectionTitle from "./common/SectionTitle";
import SectionWrapper from "./common/SectionWrapper";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userMessage = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r30kh3n', 'contact_form', form.current, 'fZMYk2AWHbgQQEHSe').then(
      (result) => {
        //document.getElementById("contact-form").reset();
        setIsSuccess(true);
        //  clear all input values in the form
        userName.current.value = '';
        userEmail.current.value = '';
        userMessage.current.value = '';
      },
      (error) => {
        setIsError(true);
      },
    );
  };
  setTimeout(() => {
    setIsError(false);
    setIsSuccess(false);
  }, 10000);
  return (
    <SectionWrapper sectionName="contact" fullHeight={true}>
      {isSuccess && (
        <div className="toast toast-top toast-end mt-[100px]">
          <div className="alert alert-success">
            <div>
              <BsCheckCircle className="text-white" />
              <span className="text-white">Your message was sent successfully</span>
            </div>
          </div>
        </div>
      )}
      {isError && (
        <div className="toast toast-top toast-end mt-[100px]">
          <div className="alert alert-error">
            <div>
              <BsCheckCircle className="text-white" />
              <span className="text-white">Something went wrong. Please try again.</span>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full pb-8">
        <div className="pb-8 mx-4">
          <SectionTitle title="Get In Touch" />
          <p className="py-6">
            Feel free to drop me a message if you have some interesting offer or you want to hang
            out.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center ">
            <form
              name="contact-form"
              ref={form}
              onSubmit={sendEmail}
              className=" flex flex-col w-full md:w-1/2 shadow-md p-4"
            >
              <input
                type="text"
                name="user_name"
                ref={userName}
                placeholder="Enter your name"
                required
                className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
              />
              <input
                type="text"
                name="user_email"
                ref={userEmail}
                placeholder="Enter your email"
                required
                className="my-4 p-2 bg-transparent border-2 rounded-mdfocus:outline-none"
              />
              <textarea
                name="message"
                ref={userMessage}
                placeholder="Enter your message"
                required
                rows="5"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  value="Send"
                  className="justify-end text-white bg-blue-gray-400 px-6 py-3 my-4 mx-auto rounded-md hover:scale-110 duration-300"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
