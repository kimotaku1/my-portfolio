import React, { useState } from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [data, setData]= useState({
    name:"",
    email:"",
    message:"",
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0d0817fe-fb5a-462a-922d-049db623bdd0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // alert(res.message);
      toast(res.message);
      setData({
        name:"",
        email:"",
        message:"",
      })
    }
  };

  return (
    <>
    <ToastContainer theme="dark"/>
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-10 lg:gap-20 mx-40 mt-20 mb-10 pb-5"
    >
      <div className="">
        <h1 className="text-4xl md:text-5xl font-semibold w-80">Get in touch</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-20 w-screen px-7 lg:w-auto">
        <div className="flex flex-col gap-8 mx-5">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] text-transparent bg-clip-text">
            Let's talk
          </h1>
          <p className="max-w-lg text-gray-400 text-lg leading-relaxed">
            I’m always excited to work on new projects, whether it’s building a
            dynamic web app or exploring new tech innovations. If you’re looking
            for a passionate developer to collaborate with, feel free to reach out!
          </p>
          <div className="flex flex-col gap-8 text-gray-300 text-xl">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="Email" className="w-6 h-6" />
              <p>narutobibek000@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call_icon} alt="Call" className="w-6 h-6" />
              <p>9810121270</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="Location" className="w-6 h-6" />
              <p>Sunakothi, Lalitpur</p>
            </div>
            <div className="flex flex-col lg:flex-col justify-center lg:justify-start gap-3 mt-4 text-white mb-4">
            <h2 className="text-gray-300 text-xl"> Social :</h2>
            <div className="flex flex-row lg:flex-row justify-start lg:justify-start gap-3 mt-4">
              <div className="gap-2">
                <a
                  href="https://github.com/kimotaku1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="hover:text-blue-500"
                >
                  <BiLogoGithub size={30} />
                </a>
              </div>
              <div className="gap-2">
                <a
                  href="https://www.instagram.com/yahallo.02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="hover:text-blue-500"
                >
                  <BiLogoInstagram size={30} />
                </a>
              </div>
              <div className="gap-2">
                <a
                  href="https://www.linkedin.com/in/bibek-841246334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="hover:text-blue-500"
                >
                  <BiLogoLinkedin size={30} />
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-6 mx-5 md:mx-10">
          <label className="text-gray-300 text-lg font-medium">Your Name</label>
          <input
            type="text" value={data.name} onChange={onChangeHandler}
            required={true}
            placeholder="Enter your name"
            name="name"
            className="w-full md:w-[350px] lg:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          />
          <label className="text-gray-300 text-lg font-medium">
            Your Email
          </label>
          <input
            type="email" value={data.email} onChange={onChangeHandler}
            required={true}
            placeholder="Enter your email"
            name="email"
            className="w-full md:w-[350px] lg:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          />
          <label className="text-gray-300 text-lg font-medium">
            Write your message here
          </label>
          <textarea
            name="message" value={data.message} onChange={onChangeHandler}
            required={true}
            rows="8"
            placeholder="Enter your message"
            className="w-full md:w-[320px] lg:w-[650px] p-6 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-48 py-3 bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform mx-3"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
