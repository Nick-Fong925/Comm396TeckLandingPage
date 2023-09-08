import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen pt-28 flex flex-col md:flex-row bg-blue-950">
      {/* Contact Form section */}
      <div className="w-full md:w-1/2 bg-blue-950 p-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-lime-400">
          Contact Us
        </h1>
        <h2 className="text-white text-base md:text-m leading-8 mt-4 ">
          Please feel free to contact us any time if you have any questions
          about upcoming or previous evemts. The CAP Team is always here to
          assist!
        </h2>
        <form className="space-y-4 mt-8">
          {/* Name input */}
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-3 text-base border-2 w-full hover:border-lime-400 focus:border-lime-400 rounded-lg focus:outline-none border-black py-5 pl-4 text-gray-800"
              placeholder="Name"
              required
            />
          </div>

          {/* Email input */}
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3 text-base border-2 w-full hover:border-lime-400 focus:border-lime-400 rounded-lg focus:outline-none border-black py-5 pl-4 text-gray-800"
              placeholder="Email"
              required
            />
          </div>

          {/* Message input */}
          <div className="flex flex-col">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-3 text-base border-2 w-full hover:border-lime-400 focus:border-lime-400 rounded-lg focus:outline-none border-black py-5 pl-4 text-gray-800"
              rows={4}
              placeholder="Message"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="font-bold px-6 py-3 bg-lime-400 text-white rounded-lg hover:bg-lime-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
