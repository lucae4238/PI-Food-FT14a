import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Name from "../Buttons/Filters/Name";
import "./Menu.css";
import Score from '../Buttons/Filters/Score';
import DietsDiv from "./DietsDiv";
import ClearFiltersButton from "../Buttons/Filters/ClearFiltersButton";

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
      {recipes.length < 1 ? (<></>) : (<button onClick={onClick} className="menu-trigger"><span>Filter</span></button>)}
      <nav ref={reference} className={`menu ${bool ? "active" : "inactive"}`}>
        <ul>
          <li>Results: {recipes.length}</li>
          <li>
            <Name />
          </li>
          <li>

            <Score />
          </li>
          <li>
            <DietsDiv />
          </li>
          <li>
            <ClearFiltersButton />
          </li>
        </ul>

      </nav>

    </div>
  );
};

export default Menu;
