import axios from "axios";

// Since we will need the token in the header each time we call the API, we will create a function that will return the header with the token
// const getAuthHeader = () => {
//     headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//     }
// }

// Let's create the API call to login the user
// Remember to store the token in the local storage when using the login API call
export const login = async (email, password) => {
    try {
        return await axios.post("http://localhost:8080/auth/signin", {
            email,
            password
        });
        } catch (error) {
            alert(error.response.data);
        }
}

// Let's create the API call to register the user
export const register = async (email, password, dateOfBirth, phoneNumber) => {
    try {
        return await axios.post("http://localhost:8080/auth/signup", {
            email,
            password,
            dateOfBirth,
            phoneNumber
        });
    } catch (error) {
        alert(error.response.data);
        console.log(error.response.data);
    }
}


// Let's create the API call to do the OTP verification
export const verifyOTP = async (email, otpNumber) => {
    try {
        return await axios.post("http://localhost:8080/otp/validate", {
            email,
            otpNumber
        });
    } catch (error) {
        alert(error.response.data);
        console.log(error.response.data);
    }
}