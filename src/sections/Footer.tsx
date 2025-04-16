import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoCalendarClear } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useSectionTracker } from "../hooks/use-section-tracker";

const Footer = () => {
  const ref = useSectionTracker({ title: "Contact Us", number: "00" });

  return (
    <div
      id="contact"
      ref={ref}
      className="flex h-fit w-full flex-col items-start justify-center bg-[#191919] text-white sm:items-center"
    >
      <div className="bg-striped h-10 w-full" />
      <div className="footer-grid grid max-w-7xl grid-cols-1 justify-start gap-15 p-10 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <img src="/images/logo/logo-with-text.svg" className="w-30" />
        </div>
        <div>
          <h1>Follow us</h1>
          <ul>
            <li>
              <span>
                <FaTiktok />
              </span>
              <a
                className="group relative"
                href="https://www.tiktok.com/@mnkc.architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-animation"></span>
                mnkc.architecture
              </a>
            </li>
            <li>
              <span>
                <FaFacebook />
              </span>
              <a
                href="https://www.facebook.com/MNKCArchitecture/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <span className="link-animation"></span>
                MNKC Architecture
              </a>
            </li>
            <li>
              <span>
                <RiInstagramFill />
              </span>
              <a
                href="https://www.instagram.com/mnkc_architecture/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <span className="link-animation"></span>
                mnkc_architecture
              </a>
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
              <a
                href="mailto:mnkcarchitecture@gmail.com"
                className="group relative"
              >
                <span className="link-animation"></span>
                mnkcarchitecture@gmail.com
              </a>
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

      <a
        href="https://www.facebook.com/rainier.sison.23/"
        target="_blank"
        className="mb-10 flex w-full items-center justify-center space-x-1 text-[clamp(.8rem,3vw,.9rem)] font-thin text-white/60"
      >
        <p>Created with </p>
        <CiHeart />
        <p>by Rainier</p>
      </a>
    </div>
  );
};

export default Footer;
