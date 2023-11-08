import { useEffect, useState } from "react";
import { useSanity } from "../../hooks/useSanity";
import { FetchError, Loading } from "../../components";
import { ContactSection } from "../../constants/types";

const ContactContainer = () => {
  const { getContactPage, contactSection, fetchError, isLoading } = useSanity();
  const [background, setBackground] = useState<ContactSection | null>(null);
  const [location, setLocation] = useState<ContactSection | null>(null);
  const [contactMethods, setContactMethods] = useState<ContactSection | null>(
    null
  );

  window.scrollTo({ top: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!contactSection.length) {
          await getContactPage();
        }
        contactSection.forEach((item) => {
          if (item.type === "hero") {
            setBackground(item);
          } else if (item.type === "location") {
            setLocation(item);
          } else if (item.type === "contact methods") {
            setContactMethods(item);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [contactSection]);

  const sendMessage = () => {};

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {fetchError ? (
            <FetchError />
          ) : (
            <section
              className="bg-cover bg-center w-full xs:h-min sm:h-min md:h-screen relative flex items-center justify-center"
              style={{ backgroundImage: `url(${background?.background})` }}
            >
              <div className="bg-black/80 h-full w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]" />
              <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-4 xs:w-full sm:w-full md:w-3/4 z-[2] xs:mt-16 sm:mt-20 mt-28 xs:p-6 sm:p-6 md:p-0">
                <div className="xs:col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1">
                  <h2 className="text-white font-semibold text-3xl">CONTACT</h2>
                  <div className="mt-8 xs:mt-4 sm:mt-4">
                    {location && location?.location
                      ? location.location.map((text, index) => (
                          <p
                            className="text-gray-200 text-lg block"
                            key={index}
                          >
                            {text}
                          </p>
                        ))
                      : ""}
                  </div>

                  <div className="mt-8 xs:mt-4 sm:mt-4 xs:mb-8 sm:mb-8 md:mb-0">
                    {contactMethods && contactMethods.contactMethods
                      ? contactMethods.contactMethods.map((contact, index) => (
                          <p
                            className="text-gray-200 text-lg block"
                            key={index}
                          >
                            {contact}
                          </p>
                        ))
                      : ""}
                  </div>
                </div>

                <div className="md:col-span-2 lg:col-span-3">
                  <form action="POST" onSubmit={sendMessage} className="w-full">
                    <div className="flex flex-col gap-6 w-full">
                      <div className="relative z-0">
                        <input
                          type="text"
                          name="firstName"
                          className="peer form-input caret-white text-white"
                          placeholder=" "
                        />
                        <label className="form-label text-white">
                          First name
                        </label>
                      </div>

                      <div className="relative z-0">
                        <input
                          type="text"
                          name="lastName"
                          className="peer form-input caret-white text-white"
                          placeholder=" "
                        />
                        <label className="form-label text-white">
                          Last name
                        </label>
                      </div>

                      <div className="relative z-0">
                        <input
                          type="text"
                          name="email"
                          className="peer form-input caret-white text-white"
                          placeholder=" "
                        />
                        <label className="form-label text-white">Email</label>
                      </div>

                      <div className="relative z-0">
                        <input
                          type="text"
                          name="phone"
                          className="peer form-input caret-white text-white"
                          placeholder=" "
                        />
                        <label className="form-label text-white">Phone</label>
                      </div>

                      <div className="relative z-0 col-span-2">
                        <textarea
                          name="message"
                          className="peer resize-none h-32 form-input caret-white text-white"
                          placeholder=" "
                        ></textarea>
                        <label className="form-label text-white">
                          Your message
                        </label>
                      </div>
                      <div className="w-full flex xs:justify-center md:justify-end sm:justify-center">
                        <button
                          type="submit"
                          className="mt-5 xs:w-full sm:w-full md:w-auto bg-slate-100 hover:bg-white px-10 py-3 text-black font-medium"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default ContactContainer;
