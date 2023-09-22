import React from "react";
import Header from "./Header";
import Main from "./Main";
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Header />    
        <Main />
    </div>
  );
}

export default Home;