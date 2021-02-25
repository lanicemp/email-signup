import React from "react";
import styled from "styled-components";
import '../App.css';

const Title = styled.h2`
font: futura;  
color: black;
// word-spacing: 3px;
  span{
  color:  #00ABC4
  ;}
  `;

const Policy = styled.p`
color:black;

font-size: 12px;

a{
  color:  #00ABC4;
  cursor: pointer;
  text-decoration: none;
  &:hover{text-decoration: underline; }
  }
`
const Button = styled.button`
border-radius: 4px ;
border: white;
padding: 10px;
width: 120px ;
font-size: 14px;
background-color: #00ABC4
;
color: white;
`

const Input = styled.input`
padding: 5px;
width: 520px; 
text-align: left;
font-size: 12px;
`
 

const EmailSignup = () => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      //   ...loginFormData,
      [name]: value,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
  
    <div className="emailSignup">
      
      <Title> Try <span >Work Reactor</span> for FREE</Title>
      <form onSubmit={handleSubmit}>
        <Input className ="emailInput"
          placeholder="Enter your email"
          //   value={loginFormData.email}
          name="email"
          type="email"
          onChange={handleInputChange}
        />

        <Policy>
          {" "}
          By signing up, I agree to our <a href=" ">Privacy Policy</a> and{" "}
          <a href=" ">Terms of Service</a>
        </Policy>
        <Button  type="submit" > SIGN UP </Button>
        </form>
    </div>
  );
};

export default EmailSignup;
