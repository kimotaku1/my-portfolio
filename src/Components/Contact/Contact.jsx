import React, { useState } from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      toast.error("All fields are required!");
      return;
    }
    if (!data.email.includes("@") || !data.email.includes(".")) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "0d0817fe-fb5a-462a-922d-049db623bdd0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();
      if (res.success) {
        toast.success(res.message);
        setData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Submission failed. Please try again!");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <div
        id="contact"
        className="flex flex-col items-center justify-center gap-10 lg:gap-20 mx-6 md:mx-20 mt-20 mb-10 pb-5"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold w-80">Get in touch</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-20 w-full px-5 lg:w-auto">
          {/* Contact Information */}
          <div className="flex flex-col gap-8 mx-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] text-transparent bg-clip-text">
              Let's talk
            </h1>
            <p className="max-w-lg text-gray-400 text-lg leading-relaxed">
              I’m always excited to work on new projects, whether it’s building
              a dynamic web app or exploring new tech innovations. If you’re
              looking for a passionate developer to collaborate with, feel free
              to reach out!
            </p>
            <div className="flex flex-col gap-8 text-gray-300 text-xl">
              <div className="flex items-center gap-4">
                <img src={mail_icon} alt="Email" className="w-6 h-6" />
                <p>narutobibek000@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={call_icon} alt="Call" className="w-6 h-6" />
                <p>+977 9810121270</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={location_icon} alt="Location" className="w-6 h-6" />
                <p>Sunakothi, Lalitpur</p>
              </div>
              <div className="flex flex-col justify-start gap-3 mt-4 text-white">
                <h2 className="text-gray-300 text-xl">Social:</h2>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/kimotaku1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hover:text-blue-500"
                  >
                    <BiLogoGithub size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/yahallo.02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="hover:text-blue-500"
                  >
                    <BiLogoInstagram size={30} />
                  </a>
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
          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-6 mx-3 md:mx-10"
          >
            <label className="text-gray-300 text-lg font-medium" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              value={data.name}
              onChange={onChangeHandler}
              required
              placeholder="Enter your name"
              name="name"
              id="name"
              className="w-full md:w-[350px] lg:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
            />
            <label
              className="text-gray-300 text-lg font-medium"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              value={data.email}
              onChange={onChangeHandler}
              required
              placeholder="Enter your email"
              name="email"
              id="email"
              className="w-full md:w-[350px] lg:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
            />
            <label
              className="text-gray-300 text-lg font-medium"
              htmlFor="message"
            >
              Write your message here
            </label>
            <textarea
              name="message"
              value={data.message}
              onChange={onChangeHandler}
              required
              rows="8"
              placeholder="Enter your message"
              id="message"
              className="w-full md:w-[320px] lg:w-[650px] p-6 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`w-48 py-3 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] transform hover:scale-105 transition-transform"
              } text-white text-lg font-medium rounded-full mx-3`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
