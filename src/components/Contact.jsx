import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_voivpgx",
        "template_8n1xhf2",
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "contact@jsmastery.pro",
          message: form.message,
        },
        "YaAZT7ejjk7MNnBcx"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Thank you!",
            text: "I will get back to you as soon as possible.",
            confirmButtonText: "OK",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ahh, something went wrong. Please try again.",
            confirmButtonText: "Retry",
          });
        }
      );
  };

  return (
    <div className={`xl:py-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Hit me up!</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>

      <div className="absolute bottom-[5px] left-0 right-0 flex justify-center items-center gap-5">
        <div className="cursor-pointer icon-container">
          <a href="https://www.instagram.com/chrstianvann/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#74C0FC" }} className="size-[25px]" />
          </a>
        </div>
        <div className="cursor-pointer icon-container">
          <a href="https://www.linkedin.com/in/ivan-christian-7683882a3" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#74C0FC" }} className="size-[25px]" />
          </a>
        </div>
        <div className="cursor-pointer icon-container">
          <a href="https://open.spotify.com/user/31kk7ay4vzf2sazgt4ur5cvwqujy?si=0IL5Oq8kRBu6ywtM2C0sMA" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} style={{ color: "#74C0FC" }} className="size-[25px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
