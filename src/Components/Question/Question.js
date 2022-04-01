import React from 'react';

const Question = () => {
    return (
        <div className="container py-5">
            <h2>How React Works?</h2>
            <p>React is a JavaScript library that is widely used to create website UI. React was created in 2011 by some of Facebook's engineers, and was later released as open-source in 2013. One of the best qualities of React is its simplicity.  It uses core JavaScript. And also a special syntax called JSX allows us to write 100% HTML inside JavaScript. React JS code reduction is as snippet and component. The JSX options manipulate the DOM directly. React Js Virtual DOM helps a lot in increasing the performance of the website.</p>
            <h2>Props Vs States Difference</h2>
            <p>১. Props এক Component থেকে অন্য Component এ data পাঠাতে ব্যবহার করা হয় । অপরদিকে State এ ডাটা শুধু component এর মধ্যে পাঠানো হয়। <br/>

                ২. Props শুধু read করা যায়। State এ  read এবং write উভয়ই করা যায়. <br/>

                ৩. Props হচ্ছে Immutable, Props এর মধ্যে পরিবর্তন বা modify করা যায় না। State Mutable, এটা পরিবর্তন বা modify করা যায়। <br/>

                ৪. Props ব্যবহার করা যায় state এবং  functional components এর সাথে। State শুধুমাত্র state components। এর সাথে ব্যবহার করা যায়।</p>
        </div>
    );
};

export default Question;