// functional components used much now a days
// component is nothing but a javascript function
import React from "react";
export function HelloWorld (){ // this is called named export // with the help of this type of method we can call multiple components from a single js file
    return (
        // this is jsx javascript xml
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export function Message() {
    return (
        <div className='div-example' id='div-id'>
            <h1>Some Message</h1>
        </div>
    );
    // behind the code what happens internally
    // return React.createElement('div',null,'<h1>Some Message</h1>');
    // return React.createElement('div',null,React.createElement('h1',null,'Some Message'));
    // when we want to include class
    // return React.createElement('div',{id:'div-id',className:'div-example'},React.createElement('h1',null,'Some Message'));
}
// export default HelloWorld // this type of export is called default export // by using this we can export only export 1 component in a js file

