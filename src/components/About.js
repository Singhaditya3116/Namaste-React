import { Outlet } from "react-router-dom";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    //Best place to define state.
  }

  componentDidMount() {
    //Best place to make API call.
    console.log("ComponentDidMount");
  }

  render() {
    console.log("Render");
    return (
      <div className="about">
        <h1>This is a React Practise going on... About Component😁</h1>
        <Outlet />
      </div>
    );
  }
}
export default About;
