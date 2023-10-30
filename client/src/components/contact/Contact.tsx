import React from "react";
import "./Contact.css";

interface ContactProps {
  data: any;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const sendMessage = async (event) => {};

  return (
    <section className="grid md:grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 xs:grid-rows-1 sm:grid-rows-1 md:h-[70vh] p-8 place-content-center xs:w-full xl:w-3/4 mx-auto">
      <div className="col-span-2 md:col-span-2">
        <h2 className="xs:text-3xl sm:text-3xl lg:text-4xl xl:text-6xl">
          {data.contactTitle}
        </h2>
        {data.contactDescription ? <p>{data.contactDescription}</p> : ""}
      </div>

      <div className="col-span-3 md:col-span-3 xs:mt-10 sm:mt-10">
        <form
          action="POST"
          onSubmit={sendMessage}
          className="flex flex-col items-center gap-6 w-full"
        >
          <div className="grid gap-6 sm:grid-cols-2 w-full">
            <div className="relative z-0">
              <input
                type="text"
                name="firstName"
                className="peer form-input"
                placeholder=" "
              />
              <label className="form-label">First name</label>
            </div>

            <div className="relative z-0">
              <input
                type="text"
                name="lastName"
                className="peer form-input"
                placeholder=" "
              />
              <label className="form-label">Last name</label>
            </div>

            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer form-input"
                placeholder=" "
              />
              <label className="form-label">Email</label>
            </div>

            <div className="relative z-0">
              <input
                type="text"
                name="phone"
                className="peer form-input"
                placeholder=" "
              />
              <label className="form-label">Phone</label>
            </div>

            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                className="peer resize-none h-32 form-input"
                placeholder=" "
              ></textarea>
              <label className="form-label">Your message</label>
            </div>
            <button
              type="submit"
              className="mt-5 bg-black px-10 py-2 text-white col-span-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
