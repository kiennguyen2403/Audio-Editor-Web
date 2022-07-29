import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextInput, Button } from "./login";

import "./login.scss";

export default function Signup() {
  const style = {
    margin: "15px 0",
  };
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dataSubmit = () => {
    axios
      .post("/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="title">Sign Up</div>
      <TextInput type="text" label="name" id="name" style={style} />
      <TextInput type="password" label="password" id="password" style={style} />
      <Button
        buttonText="log in"
        buttonClass="login-button"
        onClick={dataSubmit}
      />
    </div>
  );
}
