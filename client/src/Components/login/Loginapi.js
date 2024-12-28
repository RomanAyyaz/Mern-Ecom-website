//Signup Api
export const signupData = async (values) => {
    const response = await fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};

//OTP Api
export const OtpApi = async(otpdata)=>{
  let response = await fetch('http://localhost:8000/user/otp',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(otpdata)
  })
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

//Signin Api  
export const SigninApi = async(values)=>{
  const response = await fetch('http://localhost:8000/user/signin',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(values)
  })
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error || 'Network response was not ok');
  }
  return response.json();
}