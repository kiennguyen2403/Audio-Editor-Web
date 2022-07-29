import React from 'react';
import Form from "./pagecomponent/form";
import Footer from './pagecomponent/footer';
import Header from './pagecomponent/header';
function Noisereduction()
{
return(
    <div>
        <Header/>
        <article className="tools">
            <h2>Reduce the background noise from your audio files </h2>
            <Form />
        </article>
        <Footer></Footer>
    </div>
);

}

export default Noisereduction;