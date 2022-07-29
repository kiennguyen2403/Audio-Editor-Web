import { React, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Accesstoken } from "../../statemanager/accesstokenstate";

export default function Header() {
  const accesstoken = useContext(Accesstoken);
  return (
    <header id="navigation_bar">
      <nav>
        <ul>
          <div id="logo">
            <li>
              <Link to="/">Echo </Link>{" "}
            </li>
          </div>
          <div id="tools">
            <li className="features">
              <Link to="/noisereduction">Noise reduction</Link>
            </li>
            <li className="features">
              <Link to="/volumeadjust"> Volume adjust</Link>
            </li>
            <li className="features">
              {" "}
              <Link to="/normalize">Normalize</Link>{" "}
            </li>
            <li className="features">
              <Link to="/speechtotext"> Transcribe </Link>
            </li>
            <li className="features">
              {" "}
              <Link to="/silence"> Remove silence </Link>
            </li>
            {!accesstoken ? (
              <li id="loginitem">
                <Link to="/login">
                  <img
                    src="./picture/user.png"
                    alt="login_icon"
                    id="loginicon"
                  />
                </Link>
              </li>
            ) : (
              <li id="loginitem">
                <Link to="/profile">
                  <img
                    src="./picture/user.png"
                    alt="login_icon"
                    id="loginicon"
                  />
                </Link>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}
