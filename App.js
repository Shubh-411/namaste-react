import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"; //earlier above import used to work but after upgrade have to add "react-dom/cliet"
// import "./index.css";
// const heading1 = React.createElement(
//   "h1",
//   { id: "title", key: "h1" },
//   "Namaste React"
// ); // it takes 3args (tag, attributes,props or {style:css}, "content or data lorem")
// const heading2 = React.createElement(
//   "h2",
//   { id: "title", key: "h2" },
//   "Namaste React H2"
// );
// React element is an object
// // React.createElement gives an object : React.createElement() => Object (then converts itself into html-DOM) => html-DOM
// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);
// ================JSX================
//  JSX => React.createElement => object => html-DOM
// const heading = (
//   <h1 id="title" key="h1">
//     Namaste React JSX
//   </h1>
// );
// =======================React comp==================================
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKS0-E61jy_dctanYVq2rzxMV35RExo-Aw&usqp=CAU"
      alt="logo"
    />
  </a>
);
// ======================Functional Component ===============
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* ===========OR========== */}
      {/* {Title()} */}
      {/* {heading} */}
      {/* <h2>Writing Component using JSX</h2>; */}
    </div>
  );
};
// Config-driven UI
const restaurantList = [
  {
    name: "Burger King",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7755d6ac37feb15302927776058bee4b",
    cuisines: ["Burger", " Ham-Burger"],
    rating: "4.3 stars",
  },
  {
    name: "Domino's",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hmyktxkas3auvpsl728b",
    cuisines: ["Burger", " Ham-Burger"],
    rating: "5.0 stars",
  },
  {
    name: "Chai Sutta Bar",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uggzsxukffvxqvpckhqo",
    cuisines: ["Burger", " Ham-Burger"],
    rating: "3.5 stars",
  },
  {
    name: "Chappan Bhog",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07",
    cuisines: ["Chole-Bhature", "Idli-Dosa"],
    rating: "4.1 stars",
  },
  {
    name: "Real Taste",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c10jq9uwcicxa9lcdk2t",
    cuisines: ["Kaju-Curry", " Paneer"],
    rating: "4.5 stars",
  },
  {
    name: "Pet Pooja",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisines: ["Sandwich", " Pizza"],
    rating: "3.2 stars",
  },
  {
    name: "Once More",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3b3db238b6448c3f297c851e9d0b96b",
    cuisines: ["Ice Cream", "Chocolate Balls"],
    rating: "2.3 stars",
  },
  {
    name: "Momo-Land",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2c729a7df12980b4e523725c087946b",
    cuisines: ["Veg-Momos", "Fried-Momos"],
    rating: "4.2 stars",
  },
  {
    name: "Real Taste",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c10jq9uwcicxa9lcdk2t",
    cuisines: ["Kaju-Curry", " Paneer"],
    rating: "4.5 stars",
  },
  {
    name: "Pet Pooja",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisines: ["Sandwich", " Pizza"],
    rating: "3.2 stars",
  },
  {
    name: "Once More",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3b3db238b6448c3f297c851e9d0b96b",
    cuisines: ["Ice Cream", "Chocolate Balls"],
    rating: "2.3 stars",
  },
  {
    name: "Momo-Land",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2c729a7df12980b4e523725c087946b",
    cuisines: ["Veg-Momos", "Fried-Momos"],
    rating: "4.2 stars",
  },
  {
    name: "Real Taste",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c10jq9uwcicxa9lcdk2t",
    cuisines: ["Kaju-Curry", " Paneer"],
    rating: "4.5 stars",
  },
  {
    name: "Pet Pooja",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisines: ["Sandwich", " Pizza"],
    rating: "3.2 stars",
  },
  {
    name: "Once More",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3b3db238b6448c3f297c851e9d0b96b",
    cuisines: ["Ice Cream", "Chocolate Balls"],
    rating: "2.3 stars",
  },
  {
    name: "Momo-Land",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2c729a7df12980b4e523725c087946b",
    cuisines: ["Veg-Momos", "Fried-Momos"],
    rating: "4.2 stars",
  },
  {
    name: "Real Taste",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c10jq9uwcicxa9lcdk2t",
    cuisines: ["Kaju-Curry", " Paneer"],
    rating: "4.5 stars",
  },
  {
    name: "Pet Pooja",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisines: ["Sandwich", " Pizza"],
    rating: "3.2 stars",
  },
  {
    name: "Once More",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3b3db238b6448c3f297c851e9d0b96b",
    cuisines: ["Ice Cream", "Chocolate Balls"],
    rating: "2.3 stars",
  },
  {
    name: "Momo-Land",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2c729a7df12980b4e523725c087946b",
    cuisines: ["Veg-Momos", "Fried-Momos"],
    rating: "4.2 stars",
  },
];
const RestaurantCard = () => {
  return (
    // <div className="card">
    //   <img src={burgerKing.image} alt="restaurant img" />
    //   <h2>{burgerKing.name}</h2>
    //   <h3>{burgerKing.cuisines.join(" ")}</h3>
    //   <h4>{burgerKing.rating}</h4>
    // </div>
    <div className="card-container">
      {restaurantList.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} />
          <h2>{card.name}</h2>
          <h3>{card.cuisines.join(" ")}</h3>
          <h4>{card.rating}</h4>
        </div>
      ))}
    </div>
  );
};
// =================BOdy
const Body = () => (
  <>
    <RestaurantCard />
  </>
);
const Footer = () => <h1>Footer</h1>;
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
// const HeaderComponent2 = () => (
//   <div>
//     <h1>Writing Component using JSX</h1>;
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));``
// passing a react element inside the root
// root.render(container);

// ===== For JSX ===========
// root.render(heading);

// ==== FOR component====
root.render(<AppLayout />);
