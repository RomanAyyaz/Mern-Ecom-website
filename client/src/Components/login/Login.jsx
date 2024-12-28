import React, { useContext, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import {useMutation} from '@tanstack/react-query'
import * as yup from "yup";
import { signupData,OtpApi,SigninApi } from "./Loginapi"; 
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { toast ,Bounce} from 'react-toastify';
function Login({SetUserAuth}) {
  //State to Manupilate signin and signup page to user
  const [Account, SetAccount] = useState("signin");
  //Email of user
  const [Email,setEmail] = useState('')
  //Setting the otp
  const [otp,Setotp] = useState()
  //Navigation hook
  const navigate = useNavigate()
  //Data for otp Api
  const otpdata = {
    email:Email,
    otp:otp
  }
  //State to Manupilate Otp page to User
  const [isOtpSent, setIsOtpSent] = useState(false);
  //Importing User state from Context Api to set User
  const{User,SetUser} = useContext(UserContext)
  console.log(User)
  //Formik Structure for Signin
  const signinInitalvalues = {
    email: "",
    password: "",
  };
  const siginSchemavalidation = yup.object({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required"),
  });
  //Formik Structure For Signup and Api callings 
  const signupInitalvalues = {
    name:"",
    email: "",
    password: "",
  };
  const signupSchemavalidation = yup.object({
    name:yup.string().required('Required'),
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required"),
  });
  const SignupMutations = useMutation({
    mutationFn:signupData,
    onSuccess:()=>{
      setIsOtpSent(true)
      console.log('Otp sent')
    },
    onError:()=>{
      console.log('Some error occured in sending otp')
    }
  })
  const signupOnsubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    SignupMutations.mutate(values)
    setEmail(values.email)
  }
  //Otp Apis
  const otpMutations = useMutation({
    mutationFn:OtpApi,
    onSuccess:()=>{
      SetAccount('signin')
      setIsOtpSent(false)
      console.log('Otp verified')
    },
    onError:(error)=>{
      console.log('error occured in verifying otp',error.message)
    }
  })
  //Sigin Api 
  const SigninMutation = useMutation({
    mutationFn:SigninApi,
    onSuccess:(data)=>{
      toast.success('User logged in SuccessFully!',{
        position: "top-center",
        autoClose: 3000,
      });
      SetUserAuth(true)
      navigate('/')
     localStorage.setItem('token',data.Token)
     SetUser(data.user)
    },
    onError:(error)=>{
      const errorMessage = error.message || 'An unknown error occurred';
      toast.error(errorMessage,{
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      })
      console.log('error in login',error.message)
    }
  })
  const signinOnsubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    SigninMutation.mutate(values)
  };
  return (
    <>
    {
        isOtpSent?(
            <div className="shadow-2xl font-title w-64 h-80 mx-auto my-40 p-6 flex flex-col items-center justify-center bg-white rounded-lg">
          <h1 className="text-xl font-semibold mb-4">OTP Sent to Your Email</h1>
          <label className="text-lg mb-2" htmlFor="otp">Enter OTP</label>
          <input
            className="border p-2 rounded w-full text-center"
            type="number"
            name="otp"
            id="otp"
            value={otp}
            onChange={(e)=>{
              Setotp(e.target.value)
            }}
            placeholder="Enter OTP"
          />
          <button onClick={
            ()=>{
              otpMutations.mutate(otpdata)
            }
          } className="mt-4 bg-primary text-white px-4 py-2 rounded">
            Verify OTP
          </button>
        </div>
          ):Account === "signin" ? (
            <div className="max-w-full h-[600px]  shadow-2xl my-20 mx-3 py-10 lg:mx-72 lg:py-8 lg:my-16 lg:h-[550px]">
              <h1 className="text-xl  font-title font-bold ">Login</h1>
              <h3 className="font-normal mt-3">
                Enter login details to get access
              </h3>
              <Formik
                initialValues={signinInitalvalues}
                onSubmit={signinOnsubmit}
                validationSchema={siginSchemavalidation}
              >
                {(formik) => {
                  return (
                    <Form className="flex justify-start flex-col px-3  py-6 lg:px-8">
                      <label className="text-start font-medium" htmlFor="email">
                        Username Or Email
                      </label>{" "}
                      <br />
                      <Field
                        className="border p-3.5"
                        name="email"
                        type="email"
                        placeholder="Username / Email"
                      />{" "}
                      <br />
                      <ErrorMessage name="email" />
                      <label className="text-start font-medium" htmlFor="password">
                        Password
                      </label>{" "}
                      <br />
                      <Field
                        className="border p-3.5"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />{" "}
                      <br />
                      <ErrorMessage name="password" />
                      <p className="text-primary font-light text-start hover:cursor-pointer">
                        Forgot Password?
                      </p>
                      <p className="text-start mt-5">
                        Don't have an account?{" "}
                        <span className=" hover:cursor-pointer text-primary font-light" onClick={()=>{
                            SetAccount('signup')
                        }}>
                          Sign Up
                        </span>{" "}
                        here
                      </p>
                      <button
                        className="text-white mt-5 bg-primary w-32 h-14 rounded-lg"
                        type="submit" disabled ={!formik.isValid || formik.isSubmitting}
                      >
                        login
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          ) : (
            <div className="max-w-full h-[650px]  shadow-2xl my-20 mx-3 py-10 lg:mx-72 lg:py-8 lg:my-16 lg:h-[700px]">
              <h1 className="text-xl  font-title font-bold ">Sign Up</h1>
              <h3 className="font-normal mt-3">
              Create your account to get full access
              </h3>
              <Formik
                initialValues={signupInitalvalues}
                onSubmit={signupOnsubmit}
                validationSchema={signupSchemavalidation}
              >
                {(formik) => {
                  return (
                    <Form className="flex justify-start flex-col px-3  py-6 lg:px-8">
                        <label className="text-start font-medium" htmlFor="name">
                        Username 
                      </label>{" "}
                      <br />
                      <Field
                        className="border p-3.5"
                        name="name"
                        type="text"
                        placeholder="Username"
                      />{" "}
                      <br />
                      <ErrorMessage name="name" />
                      <label className="text-start font-medium" htmlFor="email">
                      Email
                      </label>{" "}
                      <br />
                      <Field
                        className="border p-3.5"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />{" "}
                      <br />
                      <ErrorMessage name="email" />
                      <label className="text-start font-medium" htmlFor="password">
                        Password
                      </label>{" "}
                      <br />
                      <Field
                        className="border p-3.5"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />{" "}
                      <br />
                      <ErrorMessage name="password" />
                      <p className="text-start mt-5">
                        Already have an account?{" "}
                        <span className=" hover:cursor-pointer text-primary font-light" onClick={()=>{
                            SetAccount('signin')
                        }}>
                          Sign In
                        </span>{" "}
                        here
                      </p>
                      <button
                        className="text-white mt-5 bg-primary w-32 h-14 rounded-lg"
                        type="submit" disabled ={!formik.isValid || formik.isSubmitting}
                      >
                        Signup
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          )
    }
    </>
  );
}

export default Login;
