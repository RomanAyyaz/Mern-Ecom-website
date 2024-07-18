const User = require('../../Models/UserModel');

const otpVerification = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.error(`User with email ${email} does not exist`);
      return res.status(404).json({ error: 'User does not exist, please sign up again' });
    }

    if (user.otp !== otp) {
      console.error(`OTP mismatch for user with email ${email}`);
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    user.isVerified = true;
    user.otp = null;
    await user.save();

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error during OTP verification:', error);
    res.status(500).json({ error: 'Server error, please try again later' });
  }
};

module.exports = {
  otpVerification
};
