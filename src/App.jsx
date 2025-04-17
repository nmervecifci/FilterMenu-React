import React, { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div>
      <Title text="our menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
};

export default App;
