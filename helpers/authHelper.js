import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try{
        const saltRounds = 10;
        const hashedPassword=await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
    catch(error){
        console.log(error);
    }
};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);    
}

// // Function to generate a random OTP
// export const generateOTP = () => {
//   // Generate a random 6-digit OTP
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   return otp.toString(); // Convert to string
// };
