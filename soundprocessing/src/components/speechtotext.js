import React from "react";
import Form from "./pagecomponent/form";
import Footer from "./pagecomponent/footer";
import Header from "./pagecomponent/header";

function Speechtotext() {
  return (
    <div>
      <Header />
      <article className="tools">
        <h2>Produce a transcription from your audio files</h2>
        <Form />
      </article>
      <Footer />
    </div>
  );
}

export default Speechtotext;
