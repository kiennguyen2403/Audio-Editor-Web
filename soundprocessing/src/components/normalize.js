import React from "react";
import Form from "./pagecomponent/form";
import Footer from "./pagecomponent/footer";
import Header from "./pagecomponent/header";

function Normalize() {
  return (
    <div>
      <Header />
      <article className="tools">
        <h2>Stabilize the sound's intensity of the audio </h2>
        <Form />
      </article>
      <Footer />
    </div>
  );
}

export default Normalize;
