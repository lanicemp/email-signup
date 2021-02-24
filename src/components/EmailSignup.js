import React from "react";

const EmailSignup = () => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      //   ...loginFormData,
      [name]: value,
    };
  }

    const handleSubmit = (event) => {
      event.preventDefault();
    };

    return (
      <div className="EmailSignup">
        <h2> Try Work Reactor for Free</h2>
        <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your email"
        //   value={loginFormData.email}
          name="email"
          type="text"
          onChange={handleInputChange}
        />
        
        <input type="submit" value="Signup" />
      </form>
      <body>
      <p> By signing up, I agree to out Privacy Policy and Terms of Service</p>
      </body>
      </div>
    );
  };

export default EmailSignup;
