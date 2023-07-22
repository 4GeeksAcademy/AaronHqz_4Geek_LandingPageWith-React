import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  let [listItems, setListItems] = useState([]);

  let [navBarItems, netNavBarItems] = useState([
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
    { text: "FAQs", href: "/faqs" },
    {
      text: "Contact",
      items: [
        { text: "Sales", href: "/sales" },
        { text: "Support", href: "support" },
        { text: "Non Profit", href: "nonprofit" },
      ],
    },
    { text: "About", href: "about" },
  ]);

  return (
    <div className="text-center">
		<NavBar items ></NavBar>
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <p>
        <img src={rigoImage} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
    </div>
  );
};

export default Home;
