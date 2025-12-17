import React from "react";

const MenuCard = React.memo(({ item, onAdd, animate }) => (
  <div className={`snack ${animate ? "add-animate" : ""}`}>
    <p className="item-title">{item.name}</p>
    <img src={item.image} alt={item.name} className="menu-img" loading="lazy" />
    <p className="item-price"> price: £ {item.price}</p>
    <button className="add-btn" onClick={() => onAdd(item)}>Add to Order</button>
  </div>
));

export default MenuCard;
