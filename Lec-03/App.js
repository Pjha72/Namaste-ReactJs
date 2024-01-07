const heading = React.createElement('h1',
    {
        id : "title"
    },
    "Hello World!!!"
);
const heading1 = React.createElement('h1',
    {
        id : "title"
    },
    "Hello World!!!"
);

const container = React.createElement('div',
    {
        id: "root",
    },
    [heading,heading1]
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);