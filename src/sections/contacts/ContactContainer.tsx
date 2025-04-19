import Map from "@/components/Map";
import { motion } from "framer-motion";

const ContactContainer = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-10 md:grid-cols-2">
      {/* item1 */}
      <div>
        {/* Header */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty text-[#D9D9D9]"
          >
            Let's <span className="text-[#FCAC04]">Connect</span>
          </motion.h1>
          <p className="relative mt-2 font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal text-[#D9D9D9]">
            Have a project in mind or just exploring ideas? We're here to help.
            Whether it’s a home, an office, or something unique, we’d love to
            hear about it.
            <motion.span
              initial={{ height: "0%", opacity: 0, width: "0%" }}
              whileInView={{
                height: "100%",
                opacity: 0.7,
                width: ["100%", "0%"],
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-0 right-0 z-0 h-full bg-[#FCAC04]"
            />
          </p>
        </div>

        {/* Form */}
        <form
          action="https://usebasin.com/f/18f95a87449e"
          method="POST"
          className="mt-10 flex w-full flex-col gap-5"
        >
          {/* Full name */}
          <div className="flex w-full flex-col gap-2">
            <label
              className="font-[SansationLight] text-base text-white"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              className="mt-1 border border-[#d9d9d9]/20 p-3 pl-5 text-[#d9d9d9] placeholder-[#d9d9d9]/20 transition-colors duration-300 ease-in-out focus:border-[#FCAC04] focus:outline-none"
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              id="fullname"
            />
          </div>

          {/* Email */}
          <div className="flex w-full flex-col gap-2">
            <label
              className="font font-[SansationLight] text-base text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 border border-[#d9d9d9]/20 p-3 pl-5 text-[#d9d9d9] placeholder-[#d9d9d9]/20 transition-colors duration-300 ease-in-out focus:border-[#FCAC04] focus:outline-none"
              type="email"
              name="email"
              placeholder="your@gmail.com"
              id="email"
            />
          </div>

          {/* Phone number */}
          <div className="flex w-full flex-col gap-2">
            <label
              className="font-[SansationLight] text-base text-white"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="mt-1 border border-[#d9d9d9]/20 p-3 pl-5 text-[#d9d9d9] placeholder-[#d9d9d9]/20 transition-colors duration-300 ease-in-out focus:border-[#FCAC04] focus:outline-none"
              type="number"
              name="phone"
              placeholder="+63 912 345 6789"
              id="phone"
            />
          </div>

          {/* Adresss */}
          <div className="flex w-full flex-col gap-2">
            <label
              className="font-[SansationLight] text-base text-white"
              htmlFor="adress"
            >
              Address
            </label>
            <input
              className="mt-1 border border-[#d9d9d9]/20 p-3 pl-5 text-[#d9d9d9] placeholder-[#d9d9d9]/20 transition-colors duration-300 ease-in-out focus:border-[#FCAC04] focus:outline-none"
              type="text"
              name="adress"
              placeholder="Enter your address"
              id="adress"
            />
          </div>

          {/* Message */}
          <div className="flex w-full flex-col gap-2">
            <label
              className="font-[SansationLight] text-base text-white"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="mt-1 border border-[#d9d9d9]/20 p-3 pl-5 text-[#d9d9d9] placeholder-[#d9d9d9]/20 transition-colors duration-300 ease-in-out focus:border-[#FCAC04] focus:outline-none"
              name="message"
              rows={5}
              cols={30}
              placeholder="Enter your message"
              id="message"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-striped mt-5 w-full border border-[#d9d9d9]/20 py-3 font-[ClashDisplay] text-base font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#FCAC04]/80 hover:text-[#212121] active:bg-[#FCAC04]/80 active:text-[#212121]"
          >
            Send message
          </button>
        </form>
      </div>

      {/* item 2 */}

      <div className="bg-striped z-10 h-96 w-full border border-dashed border-[#d9d9d9]/20 bg-[#212121] p-2 opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100 md:h-full">
        <Map />
      </div>
    </div>
  );
};

export default ContactContainer;
