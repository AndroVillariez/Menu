import "./styles.css";
import items from "./data";
import { useReducer } from "react";
import Menu from "./Menu";
import { Category } from "./Category";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function App() {
  const filterItems = (category) => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  };
  const reducer = (state, action) => {
    for (const category of allCategories) {
      if (action.type === category) return filterItems(category);
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, items);
  return (
    <div className="App">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <Category categories={allCategories} dispatch={dispatch} />
      <Menu state={state} />
    </div>
  );
}

/* Andro Edsarev S. Villariez */
