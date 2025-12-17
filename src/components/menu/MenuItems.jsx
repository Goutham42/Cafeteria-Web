import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";

const MenuItems = ({ items, onAdd }) => {
  const [animateId, setAnimateId] = useState(null);

  const handleAdd = (item) => {
    onAdd(item);
    setAnimateId(item.id);
  };

  useEffect(() => {
    if (!animateId) return;
    const t = setTimeout(() => setAnimateId(null), 300);
    return () => clearTimeout(t);
  }, [animateId]);

  return (
    <div className="menu-items">
      {items.map(item => (
        <MenuCard
          key={item.id}
          item={item}
          animate={animateId === item.id}
          onAdd={handleAdd}
        />
      ))}
    </div>
  );
};

export default MenuItems;
