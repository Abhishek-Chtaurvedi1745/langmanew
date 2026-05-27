"use client";

import { useState } from "react";

export default function ApplyCertificate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
    course: "",
    certificateType: "",
    country: "",
    city: "",
    institute: "",
    completionYear: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "https://langmainternational.com/api/contact-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: "Certificate Application",
            message: `
Language: ${formData.language}
Course: ${formData.course}
Certificate Type: ${formData.certificateType}
Country: ${formData.country}
City: ${formData.city}
Institute: ${formData.institute}
Completion Year: ${formData.completionYear}

Message:
${formData.message}
            `,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccess("Application submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        language: "",
        course: "",
        certificateType: "",
        country: "",
        city: "",
        institute: "",
        completionYear: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] py-14 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12">

        <h1 className="text-4xl font-bold text-center text-[#006064] mb-3">
          Apply for Certificate
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Submit your certificate application form online.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="language"
            placeholder="Language"
            value={formData.language}
            onChange={handleChange}
            required
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="course"
            placeholder="Course Name"
            value={formData.course}
            onChange={handleChange}
            className="border p-4 rounded-xl outline-none"
          />

       <select
  name="certificateType"
  value={formData.certificateType}
  onChange={handleChange}
  className={`w-full border border-black p-4 rounded-xl outline-none bg-white focus:border-black ${
    formData.certificateType
      ? "text-black"
      : "text-[#947f7f]"
  }`}
>
  <option value="">
    Select Certificate Type
  </option>

  <option value="Basic" className="text-black">
    Basic
  </option>

  <option value="Advanced" className="text-black">
    Advanced
  </option>

  <option value="Professional" className="text-black">
    Professional
  </option>
</select>

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="institute"
            placeholder="Institute / Organization"
            value={formData.institute}
            onChange={handleChange}
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="completionYear"
            placeholder="Course Completion Year"
            value={formData.completionYear}
            onChange={handleChange}
            className="border p-4 rounded-xl outline-none"
          />

          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border p-4 rounded-xl outline-none md:col-span-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#006064] hover:bg-[#004d4d] text-white py-4 rounded-xl font-semibold transition duration-300 md:col-span-2"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {success && (
            <p className="text-green-600 md:col-span-2">{success}</p>
          )}

          {error && (
            <p className="text-red-600 md:col-span-2">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}