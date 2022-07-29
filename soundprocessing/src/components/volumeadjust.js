import React from 'react';
import Form from "./pagecomponent/form.js";
import Footer from './pagecomponent/footer';
import Header from './pagecomponent/header.js';
function Volume()
{
return(
<div>
    <Header/>
        <article className="tools">
        <h2>Configure the volume of the audio</h2>
        <Form />
        </article>
    <Footer></Footer>
</div>
);

}

export default Volume;