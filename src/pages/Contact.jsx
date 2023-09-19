import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (name === "") {
      setNameError("Name is required.");
      valid = false;
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Email is required.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (message === "") {
      setMessageError("Message is required.");
      valid = false;
    } else {
      setMessageError("");
    }

    if (valid) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          "service_k4uk2c4",
          "template_jb3sbq6",
          templateParams,
          "BeR1A5o70hui-9_qq"
        )
        .then((response) => {
          console.log("Email sent successfully!", response.text);

          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <div className="min-h-screen pt-28 flex flex-col md:flex-row bg-blue-950">
      {/* Contact Form section */}
      <div className="w-full md:w-1/2 bg-blue-950 p-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-lime-400">
          Contact Us
        </h1>
        <h2 className="text-white text-base md:text-m leading-8 mt-4 ">
          Please feel free to contact us any time if you have any questions
          about upcoming or previous events. The CAP Team is always here to
          assist!
        </h2>
        <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
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
            <span className="text-red-500">{nameError}</span>
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
            <span className="text-red-500">{emailError}</span>
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
            <span className="text-red-500">{messageError}</span>
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


