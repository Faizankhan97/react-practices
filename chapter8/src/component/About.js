import React from "react";
import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <User name="Faizan Khan (Function)" />
      <UserClass name="Faizan Khan (Class)" />
    </>
  );
};

export default About;
