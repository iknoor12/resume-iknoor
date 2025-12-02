import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Optional: clear form fields
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    // <div>
    //   <h2 className="text-3xl font-bold mb-3">Contact</h2>
    //   <p className="text-gray-700">Email: iknoor@example.com</p>
    // </div>
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="text-lg text-gray-700 leading-7">
        If you'd like to collaborate, discuss a project, or just say hi — feel
        free to reach out!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring focus:ring-blue-300 resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 space-y-3 text-lg">
        <p><strong>Email:</strong> iknoor24@navgurukul.org</p>
        <p><strong>LinkedIn:</strong> www.linkedin.com/in/iknoor-vran</p>
        <p><strong>Instagram:</strong> instagram.com/iknoor24</p>
        <p><strong>GitHub:</strong> github.com/iknoor24</p>
      </div>
    </div>
  );
}

export default Contact;
