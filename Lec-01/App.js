const heading = React.createElement('h1', {
    id: "title",
    className: "header",
    style: {color: "blue"}
}, "Namaste React!");
const heading2 = React.createElement('h2', {
    id: "title",
    style: {color: "red"}
}, "Heading2");
const container = React.createElement('div',{
    id: "container"
},[heading, heading2]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing a react element inside the root
root.render(container);