import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <main className="main-container">
      <div className="contact">
        <h4>REACH US AT</h4>
        <div className="contact-section">
          <p className="text-md text-left font-bold">support@kicksup.com</p>
          <p className="text-sm text-left">for any technical support</p>
        </div>
        <div className="contact-section">
          <p className="text-md text-left font-bold">info@kicksup.com</p>
          <p className="text-sm text-left">for more information</p>
        </div>
        <div className="contact-section">
          <p className="text-md text-left font-bold">feedback@kicksup.com</p>
          <p className="text-sm text-left">to send feedback to us</p>
        </div>
        <div className="contact-section">
          <p className="text-md text-left font-bold">jobs@kicksup.com</p>
          <p className="text-sm text-left">to work with us</p>
        </div>
      </div>
      <div className="socials">
        <p className="text-sm">stay in touch</p>
        <div className="social-links">
          <BsFacebook />
          <AiFillTwitterCircle />
          <AiFillInstagram />
        </div>
      </div>
    </main>
  );
};

export { Contact };
