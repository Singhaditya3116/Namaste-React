import { Outlet } from "react-router-dom";
import React from "react";
import UserContext from "../utils/UserContext";
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
        <h1 className="font-bold m-3 text-3xl">About us Page</h1>
        <h1 className="mx-3">
          This is a React Practise going on... About Component😁
        </h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold m-3">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <Outlet />
      </div>
    );
  }
}
export default About;
