import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//         key: "h1"
//     },
//     "Namaste React" 
// );
// console.log(heading);

// React.createElement => gives a object ==> HTML(DOM)
// const heading1 = React.createElement(
//     "h1",{id:"title", key:"h2"},"heading1"
// );


/**
 <div class="header">
        <h1>Namaste React</h1>
        <ul>
            <li>About US</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>
   
    Convert These HTML into React 
 */
// const ordereList1 = React.createElement("li",{},"About US");
// const ordereList2 = React.createElement("li",{},"Support");
// const ordereList3 = React.createElement("li",{},"Home");
// const unorderedList = React.createElement(
//     "ul",{},[ordereList1,ordereList2,ordereList3]
// );

// const container = React.createElement(
//     "div",{id:"container"},[heading,unorderedList]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

/********* JSX : JavaScript XML ***********/
/**
 * JSX Uses Behind the Scene React.createELement=> Object=>HTML(DOM)
 * 
 */
const Head = () => (
    <h1 id='title' key="h2" tabIndex="1" className='Apna'>
        Namaste React
    </h1>
);
// console.log(head); // Object


/******* 
 * Types of React Component 
 * 1. Functional Component : New way of writing the code
 *    1.1 : Functional Component is nothing it's a javascript
 *          function which return JSX.
 *    1.2 : Name of the component should be starts with captial letter Not Mandatory.
 *    1.3 : Functional Component is a Normal Function.
 *    1.4 : If you write the functional component just like a
 *          normal variable like a `{Head()}`
 * 2. Class Based Component : Old way of writing the code
 * 
 *******/
// Example of Functional Component
const HeaderComponent = () => {
    // return <h1>Namaste React Functional Component</h1>;
    return (
        <div>
            {/* 1st Way */}
            {/* Component Composition OR Composing Component */}
            {/* <Head /> */}

            {/* 2nd Way */}
            {Head()}
            
            <h1>Namaste React Functional Component</h1>
            <h1>This is a second h1 tag</h1>
        </div>
    )
};
// Other Ways to write the Functional Component
// const HeaderComponent1 = () => (
//     <div>
//         <h1>Namaste React Functional Component</h1>
//         <h1>This is a second h1 tag</h1>
//     </div>
// );
// console.log(HeaderComponent);


const root = ReactDOM.createRoot(document.getElementById("root"));
/** When render the React element Used This Syntax */
// root.render(head);

/** When Render the React Component */
root.render(<HeaderComponent />);