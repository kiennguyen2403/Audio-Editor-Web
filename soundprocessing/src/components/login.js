import React, { Component, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SetAccesstoken } from "../statemanager/accesstokenstate";
import "./login.scss";

export function TextInput(props) {
  const { type, label, style, id } = props;
  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  let inputClass = "fluid-input";

  if (isFocused) {
    inputClass += " fluid-input--focus";
  } else if (value != "") {
    inputClass += " fluid-input--open";
  }
  console.log("something");
  const Focusfield = () => {
    setFocused(!isFocused);
  };

  return (
    <div className={inputClass} style={style}>
      <div className="fluid-input-holder">
        <input
          className="fluid-input-input"
          type={type}
          id={id}
          onFocus={Focusfield}
          onBlur={Focusfield}
          onChange={setValue}
        />
        <label className="fluid-input-label" id={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

export class Button extends Component {
  render() {
    return (
      <div
        className={`button ${this.props.buttonClass}`}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </div>
    );
  }
}

function Login() {
  const setAccessToken = useContext(SetAccesstoken);
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
        setAccessToken(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="title">Login</div>
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

export default Login;
