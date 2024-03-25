import { MailFilled, PhoneFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MESSAGE, REGREX } from "../../contant/validate";
import { message } from "antd";
import { alert } from "../../contant/antMessage";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const _onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = { phone: "0374267700", name: "Phat", ...data };
      console.log("payload", payload);
      // axios.post("http://localhost:5555/users", payload);
      setLoading(false);
      message.success(alert.success);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div id="contact" className="text-center pb-40 max-sm:pt-0">
      <div className="textbox mb-20">
        <h2 className="text-8xl text-transparent bg-clip-text  bg-gradient-to-r from-[#03ff85] to-[#00e6da] mt-7 mb-7 font-bold tracking-wider max-sm:text-6xl">
          Contact
        </h2>
        <p>
          If you want to talk to me, don't hesitate to call me or send me a
          message.
        </p>
        <div className="flex justify-center gap-20 text-xl mt-10 max-lg:flex-col max-lg:items-center max-lg:gap-5 max-lg:justify-center">
          <a
            href="tel:+84374267700"
            className="flex items-center gap-3 px-10 bg-[#00ff85] rounded-lg h-16 text-black"
          >
            <PhoneFilled /> <span>(+84) 037 426 7700</span>
          </a>
          <a
            href="mailto:buithienphat.btp@gmail.com"
            className="flex items-center gap-3 px-10 bg-[#00ff85] rounded-lg h-16 text-black"
          >
            <MailFilled /> <span>buithienphat.btp@gmail.com</span>
          </a>
        </div>
      </div>
      <form
        action="POST"
        className="flex flex-col items-center justify-center text-left"
      >
        <p className="mb-10 text-2xl">Get in touch</p>
        <div className="mb-3 max-w-[600px] w-[100%]">
          <input
            type="text"
            placeholder="Email *"
            {...register("email", {
              required: MESSAGE.required,
              pattern: {
                message: MESSAGE.email,
                value: REGREX.email,
              },
            })}
            className="bg-transparent w-[100%] p-4 border border-[#4c4b4b] rounded-lg focus:outline-none focus:border-[#00ff85]"
          />
          <p className="min-h-4 text-red-400 mt-1 text-sm">
            {errors?.email?.message}
          </p>
        </div>
        <div className="mb-3 max-w-[600px] w-[100%]">
          <input
            type="text"
            placeholder="Your phone *"
            {...register("phone", {
              required: MESSAGE.required,
              pattern: {
                message: MESSAGE.phone,
                value: REGREX.phone,
              },
            })}
            className="bg-transparent w-[100%] p-4 border border-[#4c4b4b] rounded-lg focus:outline-none focus:border-[#00ff85]"
          />
          <p className="min-h-4 text-red-400 mt-1 text-sm">
            {errors?.phone?.message}
          </p>
        </div>
        <textarea
          {...register("note")}
          placeholder="Your message"
          className=" resize-none bg-transparent w-[100%] max-w-[600px] min-h-60 p-4 border border-[#4c4b4b] rounded-lg focus:outline-none focus:border-[#00ff85]"
        ></textarea>
        <div
          onClick={handleSubmit(_onSubmit)}
          className="cursor-pointer flex items-center h-12 mt-5 px-5 bg-[#00ff85] hover:bg-[#00ff70] transition rounded-lg text-black uppercase font-medium tracking-wider fit"
        >
          Submit
        </div>
      </form>
    </div>
  );
};

export default Contact;
