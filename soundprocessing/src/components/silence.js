import React from 'react';
import Form from "./pagecomponent/form.js";
import Footer from './pagecomponent/footer';
import Header from './pagecomponent/header.js';
function Silence()
{
return(
<div>
    <Header/>
    <article className="tools">
        <h2>Remove silence moments in the audio</h2>
        <Form />
    </article>
    <Footer/>
</div>
);
}

export default Silence;