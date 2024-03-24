import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthProvider(props) {
  const {Component} = props;
  const [errorMessage, seterrorMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      seterrorMessage("Not Authorized, Please Login first");
      setTimeout(() => {
        navigate("/Home");
      }, 800);
    }
  });
  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {!errorMessage && <Component />}
    </div>
  );
}

export default AuthProvider;
