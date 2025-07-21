import React, { useState } from "react";
import personImage from "../assets/bg.png";
import emailjs from "@emailjs/browser";
import { FaFileDownload } from "react-icons/fa";
import google from "../assets/googleLogo.png";
import canva from "../assets/canvaLogo.png";
import amazon from "../assets/amazonLogo.png";
import sketch from "../assets/sketchLogo.png";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import PopupBanner from "../components/popUp.jsx";

const HeroSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(form.current);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");

    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_5whxf7c",
        "template_zj57qr5",
        form.current,
        "EzRvhVIDlYg7kkfK7"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("Email error", error.text);
          setLoading(false);
          alert("somethig went wrong . please try again");
        }
      );
  };

  return (
    <>
      <PopupBanner />
      <section className="  bg-blue-600 relative ">
        <div className="flex flex-col md:flex-row  justify-between px-6 md:px-16 py-12  text-white relative z-20">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-[42px] font-bold leading-tight">
              Build the Future. Learn <br /> AI Today.
            </h1>
            <p className="text-base">
              A beginner-friendly program designed to teach you the{" "}
              <br className="hidden md:inline" /> fundamentals of artificial
              intelligence and software <br className="hidden md:inline" />{" "}
              development through practical, project-based learning.
            </p>
            <div className="text-2xl font-semibold">
              Live Interactive Classes
            </div>
            {/* <button className=" inline-flex  bg-white text-black rounded px-6 py-2  hover:bg-gray-200 transition items-center">
              <FaFileDownload />
              Download Brochure
            </button> */}
            {/* <div className="flex flex-col gap-2 mt-4 ">
              <span className="text-base">Trusted by:</span>
              <div className="flex flex-wrap items-center gap-4">
                <img src={google} alt="Google" className="h-9" />
                <img src={canva} alt="Canva" className="h-9" />
                <img src={amazon} alt="Amazon" className="h-9" />
                <img src={sketch} alt="Sketch" className="h-9" />
              </div>
            </div> */}
          </div>

          {/* Right  */}
          <div className="md:w-1/2 bg-white mt-10 text-black p-6 rounded-lg  md:mt-0 w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">Enrol Your Child Today</h2>
            <p className="mb-6 text-sm">
              Give them a head start in AI and coding,
              <br /> designed for curious young minds.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Your phone number"
                className="w-full border border-gray-300 px-4 py-2 rounded mb-28"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-40 bg-blue-600  rounded hover:bg-gray-800 text-white py-2 inline-flex justify-center items-center transition gap-2"
              >
                <FaArrowRight /> {loading ? "Sending....." : "Get in Touch"}
              </button>
              {sent && (
                <p className="text-green-600 text-base mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
        {/* Floating Man Image */}
        <img
          src={personImage}
          alt="Man with laptop"
          className="hidden md:block absolute  md:left-[8%] md:bottom-[0%] lg:left-[22%] lg:bottom-[0%] ] md:w-[500px]  lg:w-[550px] z-10"
        />
      </section>
    </>
  );
};

export default HeroSection;
