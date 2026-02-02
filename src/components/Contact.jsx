import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import WHATSAPPQR from "../assets/WHATSAPPQR.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSending, setShowSending] = useState(false);

  const [mailCompleted, setMailCompleted] = useState(false);
  const [showQRPopup, setShowQRPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: false });
    setMailCompleted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    let newErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
      message: !form.message.trim(),
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    setLoading(true);
    setShowSending(true);

    emailjs
      .send(
        "service_z26pdem",
        "template_w9wg2rc",
        {
          from_name: form.name,
          to_name: "Maddy",
          from_email: form.email,
          to_email: "madhuch.0110@gmail.com",
          message: `Name: ${form.name} \nMail: ${form.email} \nMessage: ${form.message}`
        },
        "Oqiuh8Eh5R3spzCNL"
      )
      .then(() => {
        setLoading(false);
        setShowSending(false);
        setSuccess(true);

        setForm({ name: "", email: "", message: "" });

        // setTimeout(() => setSuccess(false), 3500); 
        setTimeout(() => {
          setSuccess(false);        // animation ends
          setMailCompleted(true);  // button becomes visible
        }, 3500);
      })
      .catch(() => {
        setLoading(false);
        setShowSending(false);
      });
  };

  const handleWhatsAppClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.open("https://wa.link/m8d7ha", "_blank");
    } else {
      setShowQRPopup(true);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden relative">
      {/* ✅ FORM SECTION */}
      <motion.div
        variants={slideIn("left", "between", 0.2, 1)}
        className="relative flex-[0.75] bg-black-100 p-8 rounded-2xl overflow-hidden"
      >
        {/* ✅ Success Overlay (Covers the Form) */}
        {(success || showSending) && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-transparent opacity-200 z-20 rounded-2xl flex items-center justify-center"
          >
            {showSending && (
              <span className="text-white text-3xl font-bold animate-pulse">Sending...</span>
            )}
          </motion.div>
        )}

        {/* ✅ Success Message (Appears after sending & Fades Out) */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 10 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 1 }} 
              className="absolute top-1/2 -translate-y-1/2 right-0 text-white px-3 rounded-md z-30 text-right leading-tight font-bold"
              style={{ fontFamily: '"Goudy Old Style", serif', fontSize: "30px" }} 
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ✉️ MAIL SEALED
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                🕊️<span style={{ fontSize: "43px", color: "#915eff" }}>DISPATCHED...</span>
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.0 }}
              >
                DELIVERED
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6 relative z-10">
          {["name", "email", "message"].map((field) => (
            <div key={field} className="relative">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">
                  {field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Your Message"}
                </span>
                <motion.div
                  className={`relative flex items-center rounded-lg overflow-hidden border ${
                    errors[field] ? "border-red-500" : "border-none"
                  }`}
                >
                  {/* ✅ Sliding Red Overlay for Errors (UNCHANGED) */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={errors[field] ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-transparent opacity-50"
                  />

                  {field === "message" ? (
                    <textarea
                      rows="6"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What do you want to say?"
                      className="bg-tertiary py-3 px-4 pr-10 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={field === "name" ? "What's your name?" : "What's your email?"}
                      className="bg-tertiary py-3 px-4 pr-10 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                    />
                  )}
                </motion.div>
              </label>

              {errors[field] && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  {field === "name"
                    ? "Please enter your name."
                    : field === "email"
                    ? "Please enter a valid email."
                    : "Message cannot be empty."}
                </motion.div>
              )}
            </div>
          ))}

          <div className="flex items-center justify-center gap-4 mt-4">
            {/* SEND BUTTON */}
            <motion.button
              type="submit"
              className="bg-tertiary py-3 px-6 text-white font-bold rounded-xl"
              whileTap={{ scale: 0.9 }}
            >
              Send
            </motion.button>

            {/* WHATSAPP BUTTON */}
            {mailCompleted && !success && !showSending && (
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="bg-tertiary py-3 px-6 text-white font-bold rounded-xl
                          flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-xl text-green-400"></i>
                <span>WHATSAPP ME</span>
              </button>
            )}

          </div>

            {/* ================= QR POPUP MODAL ================= */}
            {showQRPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div className="bg-black-100 rounded-2xl p-6 relative w-[600px] h-[600px] text-center">

                  {/* CLOSE BUTTON */}
                  <button
                    onClick={() => setShowQRPopup(false)}
                    className="absolute top-3 right-3 text-white text-xl font-bold"
                  >
                    ✕
                  </button>

                  <p className="text-white text-lg font-semibold mb-4">
                    Scan to Connect on WhatsApp
                  </p>

                  <img
                    src={WHATSAPPQR}
                    alt="WhatsApp QR"
                    className="w-[480px] h-[480px] mx-auto rounded-lg"
                  />
                </div>
              </div>
            )}

        </form>
      </motion.div>

      {/* ✅ EarthCanvas is NOT covered by animation */}
      <motion.div variants={slideIn("right", "between", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
