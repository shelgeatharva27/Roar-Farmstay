import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "../constants";

const Contact = () => {
  
  return (
    <div className="border-b border border-neutral-900 pb-20">
      <h2 className="my-3 text-center text-4xl">Get in Touch</h2>
      <div>
      
      </div>
      <div className="text-center tracking-tighter">
        {/* Phone Number */}
        <a
          href={`tel:${9226171618}`}
          className="my-6 flex items-center justify-center text-2xl text-green-500 hover:text-green-400 transition duration-300"
          aria-label="Call us"
        >
          <FaPhoneAlt className="mr-3 text-3xl" />
          {9226171618}
        </a>

        {/* Email Icon */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="my-6 flex items-center justify-center text-2xl text-blue-500 hover:text-blue-400 transition duration-300"
          aria-label="Send an email"
        >
          <FaEnvelope className="mr-3 text-3xl" />
          Email Us
        </a>

        {/* WhatsApp Icon */}
        <a
          href={`https://wa.me/${9226171618}`}
          target="_blank"
          rel="noopener noreferrer"
          className="my-6 flex items-center justify-center text-2xl text-green-500 hover:text-green-400 transition duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="mr-3 text-3xl" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;
