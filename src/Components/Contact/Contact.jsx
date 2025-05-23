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
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

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
        setData({ name: "", email: "", message: "" });
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
      <section id="contact" className="relative py-20 pb-10 md:pb-20 px-2 md:px-5 max-w-7xl mx-auto">
        {/* Background Glow */}
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-800/30 blur-3xl rounded-full -z-10"></div>

        <h1 className="hidden md:flex md:justify-center text-4xl md:text-5xl font-bold text-white text-center mb-12">Get in touch</h1>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          {/* Info Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              I’m always excited to work on new projects, whether it’s building a dynamic web app or exploring new tech innovations. If you’re looking for a passionate developer to collaborate with, feel free to reach out!
            </p>
            <ul className="space-y-2 text-white text-base">
              <li className="flex items-center gap-4">
                <img src={mail_icon} alt="Email" className="w-5 h-5" />
                <span>narutobibek000@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <img src={call_icon} alt="Phone" className="w-5 h-5" />
                <span>+977 9810121270</span>
              </li>
              <li className="flex items-center gap-4">
                <img src={location_icon} alt="Location" className="w-5 h-5" />
                <span>Sunakothi, Lalitpur</span>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-gray-300 mb-3 text-lg font-medium">Social:</h3>
              <div className="flex gap-3">
                <a href="https://github.com/kimotaku1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition">
                  <BiLogoGithub size={28} />
                </a>
                <a href="https://www.instagram.com/yahallo.02/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition">
                  <BiLogoInstagram size={28} />
                </a>
                <a href="https://www.linkedin.com/in/bibek-841246334/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition">
                  <BiLogoLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={onSubmit} className="flex-1 space-y-6 w-full">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={onChangeHandler}
                required
                placeholder="Enter your name"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={onChangeHandler}
                required
                placeholder="Enter your email"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows="3"
                value={data.message}
                onChange={onChangeHandler}
                required
                placeholder="Enter your message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-fit sm:w-fit px-8 py-3 rounded-lg font-semibold text-white transition-transform ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-primary-900"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
