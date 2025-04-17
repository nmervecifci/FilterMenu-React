import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        return (
          <MenuItem
            key={menuItem.id}
            title={menuItem.title}
            category={menuItem.category}
            price={menuItem.price}
            img={menuItem.img}
            desc={menuItem.desc}
          />
        );
      })}
    </div>
  );
};

export default Menu;
