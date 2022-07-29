import React from "react";
import Footer from "./pagecomponent/footer";
import Header from "./pagecomponent/header";

function Intro() {
  return (
    <div>
      <Header />
      <div id="main_information">
        <article id="article1">
          <div className="text">
            <h1>A simple tool to work with audio files.</h1>
            <p>
              We keep everything as simple as possible. Leave your problems here
              and we will do what we do best.
            </p>
            <a href="#article2">Explore all tools</a>
          </div>
          <div>
            <img src="./picture/download.svg" alt="picture1" />
          </div>
        </article>
        <article id="article2">
          <h1>Main features</h1>
          <p>Some of our main tools to work with audio files</p>
          <ul>
            <li>
              <a href="/noisereduction">
                <h2>Noise reduction</h2>
                <p>Reduce unwanted background noise from your audio</p>
              </a>
            </li>
            <li>
              <a href="/merge">
                <h2>Normalize</h2>
                <p>Stabilize the volume of your audio</p>
              </a>
            </li>
            <li>
              <a href="/cut">
                <h2>Silence removal</h2>
                <p>Remove unwanted silence pause from your audio</p>
              </a>
            </li>
            <li>
              <a href="/bassboost">
                <h2>Speech-to-text</h2>
                <p>Transcribe your audio</p>
              </a>
            </li>
            <li>
              <a href="/volumesetting">
                <h2>Volume adjust</h2>
                <p>Increase or decrease the volume of your audio</p>
              </a>
            </li>
          </ul>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default Intro;
