import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"; //earlier above import used to work but after upgrade have to add "react-dom/cliet"
const heading1 = React.createElement("h1", { id: "title" }, "Namaste React"); // it takes 3args (tag, attributes,props or {style:css}, "content or data lorem")
const heading2 = React.createElement("h2", { id: "title" }, "Namaste React H2");
// React element is an object
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
root.render(container);
