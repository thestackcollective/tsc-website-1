import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import './ContactPage.css'

export default function ContactPage() {

  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "26f3a9bb-011c-474c-a04b-b1d3dcbf82f6";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "The Stack Collective Webstie",
      subject: "New Message from TSC Webstie",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div id="formWrapper">

      <h2>WANT TO JOIN OUR COMMUNITY OF HAVE ADDITIONAL QUESTIONS?</h2>
      <p>Fill out the form below</p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label for="firstName">First Name:</label>
        <input type="text" name="firstName" {...register("firstName", { required: true })}></input>

        <br></br>

        <label for="lastName">Last Name:</label>
        <input id="lastName" type="text" name="lastName" {...register("lastName", { required: true })}></input>

        <br></br>

        <label for="email">Email:</label>
        <input type="email" name="email" {...register("email", { required: true })}></input>

        <br></br>

        <label for="referralQuestion">How did you hear about us?</label>
        <input type="text" name="referralQuestion" {...register("referralQuestion", { required: true })}></input>
        
        <br></br>

        <label for="message">Write your message/inquiry here:</label>
        <textarea type="text" name="message" {...register("message", { required: true })}></textarea>

        <br></br>

        <button type="submit">SEND IT OFF!</button>

        <br></br>

        <div>{result}</div>

      </form>

    </div>
  )
}