import React from "react";
import Form from "./pagecomponent/form";
import Footer from "./pagecomponent/footer";
import Header from "./pagecomponent/header";

function Volume() {
  return (
    <div>
      <Header />
      <article className="tools">
        <h2>Adjust volume levels of your audio files</h2>
        <Form />
      </article>
      <Footer />
    </div>
  );
}

export default Volume;
