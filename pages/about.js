import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    debugger;
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <button className="button is-info">Info</button>
      <button className="button is-success">Success</button>
      <button className="button is-warning">Warning</button>
      <button className="button is-danger">Danger</button>
    </>
  );
};

export default About;
