const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; 

// Signup API
export const signupData = async (values) => {
  const response = await fetch(`${API_BASE_URL}/user/signup`, {
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

// OTP API
export const OtpApi = async (otpdata) => {
  let response = await fetch(`${API_BASE_URL}/user/otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(otpdata),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Signin API
export const SigninApi = async (values) => {
  const response = await fetch(`${API_BASE_URL}/user/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error || 'Network response was not ok');
  }
  return response.json();
};
