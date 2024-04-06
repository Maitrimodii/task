import React from "react";

const Form = () => {
  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Additional logic for form submission can be added here
  };

  return (
    // Form component
    <form
      className="rounded-lg p-6 space-y-4"
      onSubmit={submitHandler} 
    >
      {/* Input field for name */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg border-2 text-slate-500 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple"
        />
      </div>
      {/* Input field for email */}
      <div className="w-full">
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 rounded-lg border-2 text-slate-500 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple"
        />
      </div>
      {/* Textarea field for message */}
      <div className="w-full">
        <textarea
          rows={5}
          placeholder="Message"
          required
          className="w-full px-4 py-3 rounded-lg border-2 text-slate-500 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple"
        />
      </div>
      {/* Submit button */}
      <button
        className="w-full px-4 py-3 rounded-lg bg-purple text-white font-semibold transition duration-300  border-2 border-purple hover:bg-inherit hover:text-inherit focus:outline-none focus:ring-2 focus:ring-purple"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
