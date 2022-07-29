import React from "react";
import Form from "./pagecomponent/form";
import Footer from "./pagecomponent/footer";
import Header from "./pagecomponent/header";

function Silence() {
  return (
    <div>
      <Header />
      <article className="tools">
        <h2>Remove long silence from your audio files</h2>
        <Form />
      </article>
      <Footer />
    </div>
  );
}

export default Silence;
