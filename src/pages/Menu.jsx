import React from "react";
import MenuItems from "../components/menu/MenuItems";
import OrderSummary from "../components/menu/OrderSummary";
import { MENU_ITEMS } from "../components/menu/menuData";
import { useCart } from "../context/CartContext";
import './Menu.css'

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="menu-page">
      <div className="menu-section">
        <h1 className="menu-title"> Menu</h1>

        <div className="order-list">
          <MenuItems items={MENU_ITEMS} onAdd={addToCart} />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Menu;
