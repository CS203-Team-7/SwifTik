import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('authToken');
        alert('Successfully logged out');
        navigate("/login");
    }
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        // Redirect
        navigate('/login');
    } else {
        return (
            <div>
                <p>Welcome to your Dashboard</p>
                <img src="https://media.tenor.com/MXpTxtjJQN0AAAAC/breakdance-cat-electronic-jazz.gif" />
                <div>
                    <button type="button" onClick={handleLogOut}> Log Out</button>
                </div>
            </div>
        );
    }
};

export default Dashboard;