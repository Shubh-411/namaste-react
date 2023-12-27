import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"; //earlier above import used to work but after upgrade have to add "react-dom/cliet"
const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Namaste React"
); // it takes 3args (tag, attributes,props or {style:css}, "content or data lorem")
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "Namaste React H2"
);
// React element is an object
// React.createElement gives an object : React.createElement() => Object (then converts itself into html-DOM) => html-DOM
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
// ================JSX================
//  JSX => React.createElement => object => html-DOM
const heading = (
  <h1 id="title" key="h1">
    Namaste React JSX
  </h1>
);
// =======================React comp==================================
const Title = () => <h1>Title react component</h1>;
// ======================Functional Component ===============
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      {/* ===========OR========== */}
      {Title()}
      {heading}
      <h2>Writing Component using JSX</h2>;
    </div>
  );
};
const HeaderComponent2 = () => (
  <div>
    <h1>Writing Component using JSX</h1>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
// root.render(container);

// ===== For JSX ===========
// root.render(heading);

// ==== FOR component====
root.render(<HeaderComponent />);
