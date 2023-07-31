import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1>This is a React Practise going on... 😁</h1>
      <Outlet />
    </div>
  );
};

export default About;
