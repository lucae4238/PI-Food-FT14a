import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import MenuDiv from "./Buttons/MenuDiv";

import "./Menu.css";

const Menu = () => {
  const reference = useRef(null);
  const [bool, setBool] = useState(false);
  const recipes = useSelector((state) => state.recipesLoaded);

  const onClick = () => setBool(!bool);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (reference.current !== null && !reference.current.contains(e.target)) {
        setBool(!bool);
      }
    };
    if (bool) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [bool]);

  return (
    <div className="menu-container">
      {recipes.length === 0 ? (<></>) : (<button onClick={onClick} className="menu-trigger"><span>Filter</span></button>)}
      <nav ref={reference} className={`menu ${bool ? "active" : "inactive"}`}>
        <ul>
          <li>
            <MenuDiv name={"Name"}  />
          </li>
          <li>score</li>
          <li>diets</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
