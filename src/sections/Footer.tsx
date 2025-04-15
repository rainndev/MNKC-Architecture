import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoCalendarClear } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useSectionTracker } from "../hooks/use-section-tracker";

const Footer = () => {
  const ref = useSectionTracker({ title: "Contact Us", number: "00" });

  return (
    <div
      id="contact"
      ref={ref}
      className="flex h-fit w-full flex-col items-center justify-center bg-[#191919] text-white"
    >
      <div className="bg-striped h-10 w-full" />
      <div className="footer-grid grid max-w-7xl grid-cols-4 justify-between gap-15 p-10 py-20">
        <div>
          <img src="/images/logo-with-text.svg" className="w-30" />
        </div>
        <div>
          <h1>Follow us</h1>
          <ul>
            <li>
              <span>
                <FaTiktok />
              </span>
              @tiktokuser
            </li>
            <li>
              <span>
                <FaFacebook />
              </span>
              @company
            </li>
            <li>
              <span>
                <RiInstagramFill />
              </span>
              sampleig
            </li>
          </ul>
        </div>
        <div>
          <h1>Schedule</h1>
          <ul>
            <li>
              <span>
                <IoCalendarClear />
              </span>
              Monday - Saturday
            </li>
            <li>
              <span>
                <IoLocationSharp />
              </span>
              6MXH+622, Magalang, Pampanga
            </li>
          </ul>
        </div>
        <div>
          <h1>Contact Us</h1>
          <ul>
            <li>
              <span>
                <MdEmail />
              </span>
              mnkcarchitecture@gmail.com
            </li>
            <li>
              <span>
                <FaPhoneAlt />
              </span>
              0977 826 8532
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
