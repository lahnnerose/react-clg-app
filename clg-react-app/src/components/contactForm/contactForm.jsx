import { useState } from "react";
import FormMessaging from "./formMessaging";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setisValid] = useState(false);

  function validateForm() {
    if (
      email.length < 1 || name.length < 1
    )
    setisValid (false)
    else setisValid(true)
  }

  console.log(name, email);
  return (
    <div>
      <h2>Contact Us</h2>
      <label>
        Name
        <input type="text" onChange={(event) => setName(event.target.value)}/>
      </label>
      <label>
        Email
        <input type="email" onChange={(event) => setEmail(event.target.value)}/>
      </label>
      <button onClick={() => {
        validateForm() 
        setIsSubmitted(true)
        }}>
          Submit
      </button>
      {
      isSubmitted && isSuccess && isValid && (<FormMessaging isError={false} content="Thanks for your details, we'll be in touch!" />)
      }
      {
      isSubmitted && !isSuccess && (<FormMessaging isError content="Something went wrong, please check the form fields and try again" />)
      }
      {
      isSubmitted && !isValid && (<FormMessaging isError content="Something went wrong, please check the form fields and try again" />)
      }
    </div>
  );
}

export default ContactForm;
