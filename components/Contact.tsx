import React from "react";

const Contact = () => {
  return (
    <section className="mt-20" id="contact">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-xl font-bold">Contact</h1>
        <div className="flex justify-center mt-4 gap-4">
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28832.016518247452!2d68.31273287643863!3d25.404741480865106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7a08768031d1%3A0xe62017e2bc11574c!2sQasimabad%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727072108442!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
              className="rounded-md w-full"
            ></iframe>
          </div>
          <div className="flex-1 w-full">
            <h1 className="text-lg font-semibold text-center w-full">
              Contact Form
            </h1>
            <div className="flex flex-col items-center">
              <form action="" className=" flex flex-col ">
                <label htmlFor="" className="text-zinc-400 text-lg">
                  Name :
                </label>
                <input
                  type="text"
                  className="max-w-screen-sm w-96 rounded-md bg-zinc-800 shadow-emerald-50 shadow-sm"
                />
                <br />
                <label htmlFor="" className="text-zinc-400 text-lg">
                  Email:
                </label>
                <input
                  type="text"
                  className="max-w-screen-sm w-96 rounded-md bg-zinc-800 shadow-emerald-50 shadow-sm"
                />
                <br />
                <label htmlFor="" className="text-zinc-400 text-lg">
                  Subject:
                </label>
                <input
                  type="text"
                  className="max-w-screen-sm w-96  rounded-md bg-zinc-800 shadow-emerald-50 shadow-sm"
                />
                <br />

                <label htmlFor="" className="text-zinc-400 text-lg">
                  Message:
                </label>
                <textarea
                  name=""
                  id=""
                  rows={5}
                  className="max-w-screen-sm w-96 ml-1 rounded-md bg-zinc-800  shadow-emerald-50 shadow-sm"
                ></textarea>
                <div className="w-full flex justify-center mt-4">
                  <button
                    type="submit"
                    className="px-8 py-2 rounded-3xl bg-zinc-800 shadow-sm shadow-emerald-50"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
