import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

// This is a custom hook that will be used to check if the user is authenticated and to log the user in and out.
const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    // Let's make a user state that will be used to store the user's information.
    const [user, setUser] = useState(null);

    // Now we use the useEffect hook to check if the user is authenticated.
    // We make the function to check if the user is authenticated.
    const setUserFromToken = () => {
        let token = localStorage.getItem("token");
        if (token) {
            token = jwtDecode(token);
            setUser({
                email: token.email,
            })
        }
    }
    // We call the function to check if the user is authenticated.
    useEffect(() => {
        setUserFromToken();
    }, []);

    // Now we can also make a logout function that will be used to log the user out.
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    }

    // A custom function to check if the user is authenticated.
    const isAuthenticated = () => {
        const token = localStorage.getItem("token");
        // Check if the token exists:
        if (!token){
            return false;
        }
        // Check if the token is expired:
        const { exp } = jwtDecode(token);
        if (exp < new Date().getTime() / 1000) {
            logout();
            return false;
        }
        return true;
    }

    return (
        <AuthContext.Provider value={{user, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
