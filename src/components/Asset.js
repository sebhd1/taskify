import React from "react";
import { Spinner } from "react-bootstrap";

/*
  Multipurpose utility component mainly used for
  loading spinner
*/
const Asset = ({ spinner, src, message }) => {
  return (
    <div className={` p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;