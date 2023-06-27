import React from "react";


/*
  Component used for  displaying a users avatar 
  image
*/
const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar