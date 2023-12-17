const heading1 = React.createElement("h1", { id: "title" }, "Namaste React"); // it takes 3args (tag, {style:css}, "content or data lorem")
const heading2 = React.createElement("h2", { id: "title" }, "Namaste React H2");
// React element is an object
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
root.render(container);
