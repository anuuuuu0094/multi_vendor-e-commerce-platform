import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { localStorageData } from '../utils/utils';

export default function Checkout() {
  const secondaryColor = '#ff696a';
    const { state } = useLocation()
const navigate =  useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    pincode: '',
    phone: '',
    payment: 'cod',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function fetchOrderData() {
    let data = await fetch("https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json")
    let orders = await data.json();
    return orders
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
try {
    const _data = await fetchOrderData() || [];

    const newFormData = {
        ...form,
        "orderedData": state.cartData || [],
        "userId": localStorageData("uid"),
        "id": Math.floor(Math.random()*100000)
    }

    const res = await fetch("https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json", {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([..._data, newFormData])
    });
    if(res.status == 200){
        navigate("/orderDone")
    }
    console.log(res)
} catch (error) {
    
}

  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={{ ...styles.heading, color: secondaryColor }}>Secure Checkout</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.group}>
            <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} style={styles.input} />
            <input type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} style={styles.input} />
          </div>

          <textarea name="address" placeholder="Address" required value={form.address} onChange={handleChange} style={{ ...styles.input, height: 80, resize: 'none' }} />

          <div style={styles.group}>
            <input type="text" name="pincode" placeholder="Pincode" required value={form.pincode} onChange={handleChange} style={styles.input} />
            <input type="text" name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} style={styles.input} />
          </div>

          <div style={{ marginTop: 16 }}>
            <label style={{ fontWeight: '500', marginBottom: 6, display: 'block' }}>Payment Method</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input type="radio" name="payment" value="cod" checked={form.payment === 'cod'} onChange={handleChange} />
                Cash on Delivery
              </label>
              <label style={styles.radioLabel}>
                <input type="radio" name="payment" value="online" checked={form.payment === 'online'} onChange={handleChange} />
                Online Payment
              </label>
            </div>
          </div>

          <button type="submit" style={{ ...styles.button, background: secondaryColor }}>Place Order</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '86vh',
    background: 'linear-gradient(to bottom right, #ffffff, #ffe6e6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  },
  card: {
    width: '100%',
    maxWidth: '550px',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',

  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  group: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  input: {
    flex: 1,
    padding: '12px 14px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    width: '100%',
  },
  radioGroup: {
    display: 'flex',
    gap: '20px',
    marginTop: '8px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '15px',
    cursor: 'pointer',
  },
  button: {
    marginTop: '20px',
    padding: '14px',
    fontSize: '16px',
    color: '#fff',
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  },
};