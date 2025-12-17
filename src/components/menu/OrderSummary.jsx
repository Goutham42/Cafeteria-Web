import React, { useMemo, useState, useCallback } from "react";
import { useCart } from "../../context/CartContext";
import Qr from '../Assets/QR.png';

const OrderSummary = ({ subtotalTaxRate = 0.05 }) => {
  const { cart, removeFromCart } = useCart();
  const cartItems = useMemo(() => Object.values(cart), [cart]);
  const subtotal = useMemo(() => cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0), [cartItems]);
  const tax = subtotal * subtotalTaxRate;
  const total = subtotal + tax;
  
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showUpiModal, setShowUpiModal] = useState(false);

  const handlePaymentChange = useCallback((method) => {
    setPaymentMethod(method);
    setPaymentConfirmed(method === "Cash");
    setShowUpiModal(method === "UPI");
  }, []);

  return (
    <aside className="order-summary">
      <h2>Order Summary</h2>
      {cartItems.length === 0 && <p className="empty-cart">No items added</p>}
      {cartItems.map(item => (
        <div className="summary-item" key={item.id}>
          <span>{item.name} × {item.quantity}</span>
          <div className="summary-actions">
            <span>£{(item.price * item.quantity).toFixed(2)}</span>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <hr />
      <div className="summary-row"><span>Subtotal :</span><span> £ {subtotal.toFixed(2)}</span></div>
      <div className="summary-row"><span>Tax :</span><span> £ {tax.toFixed(2)}</span></div>
      <div className="summary-total"><span>Total :</span><span> £ {total.toFixed(2)}</span></div>
      <hr />

      <div className="payment-section">
        <h2>Payment Method</h2  >
        {["UPI", "Card", "Cash"].map(method => (
          <label key={method} className="payment-option">
            <input type="radio" checked={paymentMethod === method} onChange={() => handlePaymentChange(method)} />
            {method}
          </label>
        ))}
        {paymentMethod === "Card" && (
          <div className="card-form">
            <div className="card-grid">
              <input placeholder="Card Number" />
              <input placeholder="MM / YY" />

              <input placeholder="CVV" />
              <input placeholder="Cardholder Name" />
            </div>

            <button
              className="confirm-btn"
              onClick={() => setPaymentConfirmed(true)}
            >
              Confirm Payment
            </button>

            <p className="secure-text">🔒 Secure payment</p>
          </div>
        ) 
      }
</div>
    
      <button className="checkout-btn" disabled={!cartItems.length || !paymentConfirmed}>
        Pay £{total.toFixed(2)}
      </button>

      {showUpiModal && (
        <div className="upi-modal-overlay" onClick={() => setShowUpiModal(false)}>
          <div className="upi-modal" onClick={e => e.stopPropagation()}>
            <h3>Scan & Pay</h3>
            <img src={Qr} alt="QR" />
            <p className="upi-txt">Pay ₹ {(total * 100).toFixed(0)}</p>
            <button className="confirmed-btn " onClick={() => { setPaymentConfirmed(true); setShowUpiModal(false); }}>
              I Have Paid
            </button>
          </div>
        </div>
      )}
    </aside>  
  );
};

export default OrderSummary;
