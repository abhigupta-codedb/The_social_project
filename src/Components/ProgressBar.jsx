import React from "react";

const ProgressBar = ({ bgcolor = "papayawhip", progress, height = 20 }) => {
  const Parentdiv = {
    height: height,
    width: "90vw",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "palevioletred",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
