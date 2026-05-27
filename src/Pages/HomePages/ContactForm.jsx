import React, { useState } from "react";
import {
  FiChevronDown,
  FiCheckCircle,
  FiAlertCircle,
  FiX,
} from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    language: "",
    studyAbroad: "",
    workAbroad: "",
    investment: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // VALIDATIONS
  const validateName = (name) =>
    /^[A-Za-z\s]{2,}$/.test(name.trim());

  const validateEmail = (email) =>
    /^\S+@\S+\.\S+$/.test(email.trim());

  const validatePhone = (phone) =>
    /^[0-9]{10,15}$/.test(phone);

  const validateMessage = (message) =>
    message.trim().length >= 5;

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // INPUT ERROR CLASS
  const inputError = (field) =>
    errors[field]
      ? "border-red-500"
      : "border-gray-200";

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    // NAME
    if (!formData.name)
      validationErrors.name =
        "Name is required";
    else if (!validateName(formData.name))
      validationErrors.name =
        "Only alphabets allowed";

    // PHONE
    if (!formData.phone)
      validationErrors.phone =
        "Phone is required";
    else if (!validatePhone(formData.phone))
      validationErrors.phone =
        "Enter valid number";

    // EMAIL
    if (!formData.email)
      validationErrors.email =
        "Email is required";
    else if (!validateEmail(formData.email))
      validationErrors.email =
        "Invalid email";

    // SERVICE
    if (!formData.service)
      validationErrors.service =
        "Please select service";

    // LANGUAGE
    if (
      formData.service ===
        "Language Training" &&
      !formData.language
    ) {
      validationErrors.language =
        "Please select language";
    }

    // STUDY ABROAD
    if (
      formData.service ===
        "Study Abroad" &&
      !formData.studyAbroad
    ) {
      validationErrors.studyAbroad =
        "Please select option";
    }

    // WORK ABROAD
    if (
      formData.service ===
        "Work Abroad" &&
      !formData.workAbroad
    ) {
      validationErrors.workAbroad =
        "Please select option";
    }

    // PR BY INVESTMENT
    if (
      formData.service ===
        "PR By Investment" &&
      !formData.investment
    ) {
      validationErrors.investment =
        "Please select option";
    }

    // MESSAGE
    if (!formData.message)
      validationErrors.message =
        "Message is required";
    else if (
      !validateMessage(formData.message)
    )
      validationErrors.message =
        "Minimum 5 characters";

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length > 0
    )
      return;

    try {
      setLoading(true);
      setResponseMsg("");
      setIsSuccess(false);

      let serviceValue =
        formData.service;

      if (
        formData.service ===
        "Language Training"
      ) {
        serviceValue = `Language Training - ${formData.language}`;
      }

      if (
        formData.service ===
        "Study Abroad"
      ) {
        serviceValue = `Study Abroad - ${formData.studyAbroad}`;
      }

      if (
        formData.service ===
        "Work Abroad"
      ) {
        serviceValue = `Work Abroad - ${formData.workAbroad}`;
      }

      if (
        formData.service ===
        "PR By Investment"
      ) {
        serviceValue = `PR By Investment - ${formData.investment}`;
      }

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.phone.trim(),
        message: formData.message.trim(),
        type: "General Inquiry",
        service: serviceValue,
      };

      console.log("Payload:", payload);

      const response = await fetch(
        "https://langmainternational.com/api/contact-lead",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      console.log("Response:", data);

      if (response.ok) {
        setIsSuccess(true);

        setResponseMsg(
          data.message ||
            "Form submitted successfully!"
        );

        // RESET FORM
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          language: "",
          studyAbroad: "",
          workAbroad: "",
          investment: "",
          message: "",
        });

        setErrors({});

        setTimeout(() => {
          setResponseMsg("");
        }, 3000);
      } else {
        setIsSuccess(false);

        setResponseMsg(
          data.message ||
            "Submission failed"
        );
      }
    } catch (error) {
      console.error("Fetch Error:", error);

      setIsSuccess(false);

      setResponseMsg(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-14 bg-[#F4FFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* MAIN WRAPPER */}
        <div
          className="
            relative
            grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]
            rounded-[36px]
            overflow-hidden
            shadow-[0_20px_80px_rgba(0,0,0,0.12)]
            bg-white
          "
        >

          {/* LEFT IMAGE SECTION */}
          <div className="relative h-full min-h-[540px]">

            <img
              src="/langma/images/young-happy-businesswoman-working-desktop-pc-communicating-mobile-phone-office 1.png"
              alt="Contact Visual"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0B6B6B]/70 via-[#0B6B6B]/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 lg:p-10 z-10 text-white">

              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm inline-block mb-4">
                LANGMA INTERNATIONAL
              </span>

              <h2 className="text-2xl lg:text-4xl font-bold leading-tight max-w-xl">
                Your Future Starts With The Right Guidance
              </h2>

              <p className="mt-4 text-white/90 max-w-lg leading-relaxed text-sm lg:text-base">
                Connect with our expert counselors for language training,
                international careers, visa assistance and global opportunities.
              </p>

            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="relative flex items-center">

            {/* BACKGROUND */}
            <div className="absolute inset-0">
              <img
                src="/langma/images/Group 4568.png"
                alt="background"
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            {/* GLOW */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#27C4A8]/20 blur-3xl rounded-full"></div>

            {/* FORM WRAPPER */}
            <div className="relative z-10 w-full p-5 lg:p-7">

              <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-[28px] shadow-2xl p-5 lg:p-6">

                {/* HEADING */}
                <div className="text-center mb-5">

                  <h2 className="text-[24px] lg:text-[30px] font-bold text-[#174B52]">
                    Let’s Get Connected
                  </h2>

                  <p className="text-[#4B5563] mt-2 text-sm">
                    We’re here to help you build your international future.
                  </p>

                </div>

                
                {responseMsg && (
                  <div
                    className={`flex items-center justify-between p-3 mb-4 rounded-xl ${
                      isSuccess
                        ? "bg-green-100 border border-green-200 text-green-800"
                        : "bg-red-100 border border-red-200 text-red-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isSuccess ? (
                        <FiCheckCircle size={18} />
                      ) : (
                        <FiAlertCircle size={18} />
                      )}

                      <span className="text-sm">
                        {responseMsg}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setResponseMsg("")
                      }
                    >
                      <FiX size={18} />
                    </button>
                  </div>
                )}

                {/* FORM */}
                <form
                  className="space-y-3"
                  onSubmit={handleSubmit}
                >

                  {/* NAME */}
                  <div>
                    <div className="relative">
                      <img
                        src="/langma/images/user.png"
                        alt="user"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                      />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className={`w-full border rounded-2xl px-4 py-3 pl-12 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition ${inputError(
                          "name"
                        )}`}
                      />
                    </div>

                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* PHONE */}
                  <div>
                    <div className="relative">
                      <img
                        src="/langma/images/call.png"
                        alt="phone"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Your Contact Number"
                        className={`w-full border rounded-2xl px-4 py-3 pl-12 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition ${inputError(
                          "phone"
                        )}`}
                      />
                    </div>

                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <div className="relative">
                      <img
                        src="/langma/images/mail.png"
                        alt="email"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        className={`w-full border rounded-2xl px-4 py-3 pl-12 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition ${inputError(
                          "email"
                        )}`}
                      />
                    </div>

                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* SERVICE */}
                  <div>
                    <div className="relative">

                      <img
                        src="/langma/images/service.png"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                        alt="service"
                      />

                      <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B6B6B] text-base pointer-events-none z-10" />

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full border rounded-2xl px-4 py-3 pl-12 pr-12 appearance-none bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition ${inputError(
                          "service"
                        )} ${
                          formData.service === ""
                            ? "text-[#837f7f]"
                            : "text-black"
                        }`}
                      >
                        <option value="">
                          Services
                        </option>

                        <option value="Work Abroad">
                          Work Abroad
                        </option>

                        <option value="Study Abroad">
                          Study Abroad
                        </option>

                        <option value="Language Training">
                          Language Training
                        </option>

                        <option value="PR By Investment">
                          PR By Investment
                        </option>
                      </select>
                    </div>

                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* LANGUAGE */}
                  {formData.service ===
                    "Language Training" && (
                    <div>
                      <div className="relative">

                        <img
                          src="https://api.iconify.design/mdi/translate.svg?color=%230B6B6B"
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                          alt="language"
                        />

                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B6B6B] text-base pointer-events-none z-10" />

                        <select
                          name="language"
                          value={formData.language}
                          onChange={handleChange}
                          className={`w-full border rounded-2xl px-4 py-3 pl-12 pr-12 appearance-none bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition ${inputError(
                            "language"
                          )}`}
                        >
                          <option value="" className="text-[14px]">Select Language</option>

<option value="ARABIC" className="text-[14px]">ARABIC</option>
<option value="ARMENIAN" className="text-[14px]">ARMENIAN</option>
<option value="BALKAN" className="text-[14px]">BALKAN</option>
<option value="BALTIC" className="text-[14px]">BALTIC</option>
<option value="BURMESE" className="text-[14px]">BURMESE</option>
<option value="DARI/PASHTO" className="text-[14px]">DARI/PASHTO</option>
<option value="DUTCH" className="text-[14px]">DUTCH</option>
<option value="ENGLISH" className="text-[14px]">ENGLISH</option>
<option value="FRENCH" className="text-[14px]">FRENCH</option>
<option value="GERMAN" className="text-[14px]">GERMAN</option>
<option value="HEBREW" className="text-[14px]">HEBREW</option>
<option value="HINDI" className="text-[14px]">HINDI</option>
<option value="INDIAN REGIONAL" className="text-[14px]">INDIAN REGIONAL</option>
<option value="INDONESIAN" className="text-[14px]">INDONESIAN</option>
<option value="ITALIAN" className="text-[14px]">ITALIAN</option>
<option value="JAPANESE" className="text-[14px]">JAPANESE</option>
<option value="KOREAN" className="text-[14px]">KOREAN</option>
<option value="MANDARIN" className="text-[14px]">MANDARIN</option>
<option value="MONGOLIAN" className="text-[14px]">MONGOLIAN</option>
<option value="NORDIC" className="text-[14px]">NORDIC</option>
<option value="PERSIAN" className="text-[14px]">PERSIAN</option>
<option value="POLISH" className="text-[14px]">POLISH</option>
<option value="PORTUGUESE" className="text-[14px]">PORTUGUESE</option>
<option value="RUSSIAN" className="text-[14px]">RUSSIAN</option>
<option value="SANSKRIT" className="text-[14px]">SANSKRIT</option>
<option value="SINHALA" className="text-[14px]">SINHALA</option>
<option value="SPANISH" className="text-[14px]">SPANISH</option>
<option value="SWAHILI" className="text-[14px]">SWAHILI</option>
<option value="THAI" className="text-[14px]">THAI</option>
<option value="URDU" className="text-[14px]">URDU</option>
<option value="VIETNAMESE" className="text-[14px]">VIETNAMESE</option>
                        </select>
                      </div>

                      {errors.language && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.language}
                        </p>
                      )}
                    </div>
                  )}

                  {/* WORK ABROAD */}
                  {formData.service ===
                    "Work Abroad" && (
                    <div>
                      <div className="relative">

                        <img
                          src="https://api.iconify.design/mdi/passport.svg?color=%230B6B6B"
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                          alt="passport"
                        />

                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B6B6B] text-base pointer-events-none z-10" />

                        <select
                          name="workAbroad"
                          value={formData.workAbroad}
                          onChange={handleChange}
                          className={`w-full border rounded-2xl px-4 py-3 pl-12 pr-12 appearance-none bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition ${inputError(
                            "workAbroad"
                          )}`}
                        >
                            <option value="">
    Select 
  </option>

  {/* EUROPE */}
  <optgroup label="EUROPE" className="text-[14px]">
    <option value="Austria" className="text-[14px]">
      Austria
    </option>

    <option value="Cyprus" className="text-[14px]">
      Cyprus
    </option>

    <option value="Greece" className="text-[14px]">
      Greece
    </option>

    <option value="Hungary" className="text-[14px]">
      Hungary
    </option>

    <option value="Italy" className="text-[14px]">
      Italy 
    </option>

    <option value="Latvia" className="text-[14px]">
      Latvia
    </option>

    <option value="Malta" className="text-[14px]">
      Malta
    </option>

    <option value="Portugal" className="text-[14px]">
      Portugal
    </option>

    <option value="Spain" className="text-[14px]">
      Spain
    </option>
  </optgroup>

  {/* MIDDLE EAST */}
  <optgroup label="MIDDLE EAST" className="text-[14px]">
    <option value="UAE" className="text-[14px]">
      UAE 
    </option>
  </optgroup>

  {/* AMERICAS */}
  <optgroup label="AMERICAS" className="text-[14px]">
    <option value="Panama" className="text-[14px]">
      Panama 
    </option>
  </optgroup>
                        </select>
                      </div>

                      {errors.workAbroad && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.workAbroad}
                        </p>
                      )}
                    </div>
                  )}

                  {/* STUDY ABROAD */}
                  {formData.service ===
                    "Study Abroad" && (
                    <div>
                      <div className="relative">

                        <img
                          src="https://api.iconify.design/mdi/passport.svg?color=%230B6B6B"
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                          alt="passport"
                        />

                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B6B6B] text-base pointer-events-none z-10" />

                        <select
                          name="studyAbroad"
                          value={formData.studyAbroad}
                          onChange={handleChange}
                          className={`w-full border rounded-2xl px-4 py-3 pl-12 pr-12 appearance-none bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition ${inputError(
                            "studyAbroad"
                          )}`}
                        >
                             <option value="">
    Select 
  </option>

  {/* EUROPE */}
  <optgroup label="EUROPE" className="text-[14px]">
    <option value="Austria" className="text-[14px]">
      Austria
    </option>

    <option value="Cyprus" className="text-[14px]">
      Cyprus
    </option>

    <option value="Greece" className="text-[14px]">
      Greece
    </option>

    <option value="Hungary" className="text-[14px]">
      Hungary
    </option>

    <option value="Italy" className="text-[14px]">
      Italy 
    </option>

    <option value="Latvia" className="text-[14px]">
      Latvia
    </option>

    <option value="Malta" className="text-[14px]">
      Malta
    </option>

    <option value="Portugal" className="text-[14px]">
      Portugal
    </option>

    <option value="Spain" className="text-[14px]">
      Spain
    </option>
  </optgroup>

  {/* MIDDLE EAST */}
  <optgroup label="MIDDLE EAST" className="text-[14px]">
    <option value="UAE" className="text-[14px]">
      UAE 
    </option>
  </optgroup>

  {/* AMERICAS */}
  <optgroup label="AMERICAS" className="text-[14px]">
    <option value="Panama" className="text-[14px]">
      Panama 
    </option>
  </optgroup>
                        </select>
                      </div>

                      {errors.studyAbroad && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.studyAbroad}
                        </p>
                      )}
                    </div>
                  )}

                  {/* PR BY INVESTMENT */}
                  {formData.service ===
                    "PR By Investment" && (
                    <div>
                      <div className="relative">

                        <img
                          src="https://api.iconify.design/mdi/passport.svg?color=%230B6B6B"
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                          alt="passport"
                        />

                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B6B6B] text-base pointer-events-none z-10" />

                        <select
                          name="investment"
                          value={formData.investment}
                          onChange={handleChange}
                          className={`w-full border rounded-2xl px-4 py-3 pl-12 pr-12 appearance-none bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition ${inputError(
                            "investment"
                          )}`}
                        >
                           <option value="">
    Select 
  </option>

  {/* EUROPE */}
  <optgroup label="EUROPE" className="text-[14px]">
    <option value="Austria" className="text-[14px]">
      Austria
    </option>

    <option value="Cyprus" className="text-[14px]">
      Cyprus
    </option>

    <option value="Greece" className="text-[14px]">
      Greece
    </option>

    <option value="Hungary" className="text-[14px]">
      Hungary
    </option>

    <option value="Italy" className="text-[14px]">
      Italy 
    </option>

    <option value="Latvia" className="text-[14px]">
      Latvia
    </option>

    <option value="Malta" className="text-[14px]">
      Malta
    </option>

    <option value="Portugal" className="text-[14px]">
      Portugal
    </option>

    <option value="Spain" className="text-[14px]">
      Spain
    </option>
  </optgroup>

  {/* MIDDLE EAST */}
  <optgroup label="MIDDLE EAST" className="text-[14px]">
    <option value="UAE" className="text-[14px]">
      UAE 
    </option>
  </optgroup>

  {/* AMERICAS */}
  <optgroup label="AMERICAS" className="text-[14px]">
    <option value="Panama" className="text-[14px]">
      Panama 
    </option>
  </optgroup>
                        </select>
                      </div>

                      {errors.investment && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.investment}
                        </p>
                      )}
                    </div>
                  )}

                  {/* MESSAGE */}
                  <div>
                    <div className="relative">
                      <img
                        src="/langma/images/describ.png"
                        alt="pen"
                        className="absolute left-4 top-4 w-4 h-4 z-10"
                      />

                      <textarea
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe Your Requirement"
                        className={`w-full border rounded-2xl px-4 py-3 pl-12 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#27C4A8] transition resize-none ${inputError(
                          "message"
                        )}`}
                      ></textarea>
                    </div>

                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      mt-2
                      bg-gradient-to-r from-[#27C4A8] to-[#0B6B6B]
                      text-white
                      py-3
                      rounded-2xl
                      font-semibold
                      shadow-lg
                      hover:scale-[1.02]
                      transition-all duration-300
                      disabled:opacity-50
                    "
                  >
                    {loading
                      ? "Sending..."
                      : "Submit"}
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;