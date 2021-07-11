import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Menu.css";
import DietsDiv from "./DietsDiv";
import { sortName, sortScore } from "../../Redux/actions";
import ClearFilters from "../Buttons/Filters/ClearFilters";
import FilterDiv from "./SortDiv";

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
      {!(recipes.length < 1) && (
        <button onClick={onClick} className="menu-trigger">
          <span>Filter</span>
        </button>
      )}
      <nav ref={reference} className={`menu ${bool && "active"}`}>
        <ul>
          <li> Results: {recipes.length}</li>
          <li>
            <FilterDiv
              innerLeft={"Desc"}
              innerRight={"Asc"}
              actionLeft={sortName}
              actionRight={sortName}
              argLeft={1}
              argRight={-1}
              title={"Name"}
            />
          </li>
          <li>
            <FilterDiv
              innerLeft={"Desc"}
              innerRight={"Asc"}
              actionLeft={sortScore}
              actionRight={sortScore}
              argLeft={-1}
              argRight={1}
              title={"Score"}
            />
          </li>
          <li>
            <DietsDiv />
          </li>
          <li>
            <ClearFilters />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
