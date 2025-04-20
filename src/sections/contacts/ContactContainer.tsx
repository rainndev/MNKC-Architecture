import Map from "@/components/Map";
import { SelectMap } from "@/components/SelectMap";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";

type ContactFormTypes = {
  fullname: string;
  email: string;
  phone: string;
  adress: string;
  message: string;
};

const ContactContainer = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { register, handleSubmit } = useForm<ContactFormTypes>();

  const onSubmit = () => {
    formRef.current?.submit();
  };

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
            className="text-logo-white font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty"
          >
            Let's <span className="text-logo-yellow">Connect</span>
          </motion.h1>
          <p className="text-logo-white relative mt-2 font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal">
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
              className="bg-logo-yellow absolute top-0 right-0 z-0 h-full"
            />
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          action="https://usebasin.com/f/18f95a87449e"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
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
              {...register("fullname", { required: "Name is required" })}
              className="focus:border-logo-yellow border-logo-white/20 text-logo-white placeholder-logo-white/20 mt-1 border p-3 pl-5 transition-colors duration-300 ease-in-out focus:outline-none"
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="focus:border-logo-yellow border-logo-white/20 text-logo-white placeholder-logo-white/20 mt-1 border p-3 pl-5 transition-colors duration-300 ease-in-out focus:outline-none"
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
              {...register("phone", {
                required: "Phone number is required",
              })}
              className="focus:border-logo-yellow border-logo-white/20 text-logo-white placeholder-logo-white/20 mt-1 border p-3 pl-5 transition-colors duration-300 ease-in-out focus:outline-none"
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
              {...register("adress", {
                required: "Address is required",
              })}
              className="focus:border-logo-yellow border-logo-white/20 text-logo-white placeholder-logo-white/20 mt-1 border p-3 pl-5 transition-colors duration-300 ease-in-out focus:outline-none"
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
              {...register("message", { required: "Message is required" })}
              className="focus:border-logo-yellow border-logo-white/20 text-logo-white placeholder-logo-white/20 mt-1 border p-3 pl-5 transition-colors duration-300 ease-in-out focus:outline-none"
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
            className="bg-striped hover:bg-logo-yellow/80 active:bg-logo-yellow/80 border-logo-white/20 mt-5 w-full border py-3 font-[ClashDisplay] text-base font-medium text-white transition-colors duration-300 ease-in-out hover:text-[#212121] active:text-[#212121]"
          >
            Send message
          </button>
        </form>
      </div>

      {/* item 2 */}

      <div className="bg-striped border-logo-white/20 relative z-10 h-96 w-full border border-dashed bg-[#212121] p-2 opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100 md:h-full">
        <div className="text-logo-white absolute top-2 left-2 z-401 h-fit w-fit overflow-hidden bg-[#212121]/70 text-center font-[SansationLight]">
          <SelectMap />
        </div>
        <Map />
      </div>
    </div>
  );
};

export default ContactContainer;
