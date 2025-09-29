import React, { useEffect, useState } from 'react'
import { localStorageData } from '../utils/utils';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const secondaryColor = '#ff696a'

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate()

  async function fetchCartData() {
    let data = await fetch("https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app/cartData.json")
    let cartData = await data.json();
    if (cartData) {
      let newD = [];
      cartData.forEach((ele) => {
        if (ele?.userId === localStorageData("uid")) {
          newD.push(ele)
        }
      })
      if (newD) {
        setCartData(newD)
      }
    }

  }
  const handleCartDelete = async (index) => {
    try {
      const uid = localStorage.getItem("uid")
  
      const res = await fetch("https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app/cartData.json")
      const data = await res.json()
  
      const cartArray = Object.entries(data || {})
        .map(([key, value]) => ({ key, ...value }))
        .filter(item => item.userId === uid)
  
      const removedItem = cartArray[index]
  
      const updatedArray = cartArray.filter((_, i) => i !== index)
  
      const updatedObject = {}
      updatedArray.forEach((item) => {
        updatedObject[item.key] = {
          title: item.title,
          description: item.description,
          price: item.price,
          category: item.category,
          images: item.images,
          stock: item.stock,
          userId: item.userId
        }
      })
  
      await fetch("https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app/cartData.json", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedObject)
      })
      setCartData(prev => prev.filter((_, i) => i !== index))
  
      toast.success("Item removed from cart!")
  
    } catch (err) {
      console.error("Cart delete error:", err)
      toast.error("Error deleting item!")
    }
  }
  
  
  
  useEffect(() => {
    fetchCartData()
  }, [])
  const total = cartData.reduce((sum, item) => sum + item.price, 0)

  const handleGoToCheckout = () => {
    navigate("/checkout", { state: { cartData } })
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🛒 Your Cart</h2>
      <div style={mainContentStyle}>
        <div style={itemsSectionStyle}>
          {cartData.length ? cartData.map((item, i) => (
            <div key={i} style={horizontalCardStyle}>
              <img src={item.images} alt={item.title} style={horizontalImageStyle} />
              <div style={horizontalDetailsStyle}>
                <h3 style={titleStyle}>{item.title}</h3>
                <p style={descStyle}>{item.description}</p>
                <p style={priceStyle}>₹{item.price}</p>
                <div style={buttonWrapperStyle}>
                <button style={buttonStyle} onClick={() => handleCartDelete(i)}>Delete</button>
                </div>
              </div>
            </div>
          )) : <div style={container}>
            <h2 style={heading}>Your cart is empty</h2>
            <p style={message}>Looks like you haven’t added anything to your cart yet.</p>
            <button style={button} onClick={() => window.location.href = '/product'}>
              Shop Now
            </button>
          </div>}
        </div>

        <div style={sidebarStyle}>
          <h3 style={summaryTitleStyle}>Order Summary</h3>
          <p style={totalPriceStyle}>Total: ₹{total}</p>
          <input type="text" placeholder="Enter Promo Code" style={promoInputStyle} />
          <button style={checkoutButtonStyle} onClick={handleGoToCheckout} >Checkout</button>
        </div>
      </div>
    </div>
  )
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
  background: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '20px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Segoe UI, sans-serif'
}

const heading = {
  fontSize: '28px',
  color: '#444',
  marginBottom: '10px'
}

const message = {
  fontSize: '16px',
  color: '#777',
  marginBottom: '20px'
}

const button = {
  padding: '12px 28px',
  fontSize: '16px',
  backgroundColor: '#ff696a',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'sans-serif',
}

const headingStyle = {
  textAlign: 'center',
  fontSize: '28px',
  marginBottom: '20px',
  color: secondaryColor,
}

const mainContentStyle = {
  display: 'flex',
  flexWrap: "wrap",
  gap: '20px',
  alignItems: 'flex-start',
}

const itemsSectionStyle = {
  flex: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}

const horizontalCardStyle = {
  display: 'flex',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  overflow: 'hidden',
  padding: '12px',
  gap: '16px',
}

const horizontalImageStyle = {
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '8px',
  backgroundColor: '#f3f3f3',
}

const horizontalDetailsStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  position: 'relative',
}

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: 0,
}

const descStyle = {
  fontSize: '14px',
  color: '#777',
  margin: '8px 0',
}

const priceStyle = {
  fontSize: '16px',
  fontWeight: '600',
  color: secondaryColor,
}

const buttonWrapperStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
}

const buttonStyle = {
  backgroundColor: secondaryColor,
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
}

// Right Sidebar
const sidebarStyle = {
  flex: 1,
  position: 'sticky',
  top: '70px',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}

const summaryTitleStyle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#333',
  marginBottom: '8px',
}

const totalPriceStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: secondaryColor,
}

const promoInputStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
}

const checkoutButtonStyle = {
  backgroundColor: secondaryColor,
  color: '#fff',
  border: 'none',
  padding: '12px',
  borderRadius: '8px',
  fontSize: '16px',
  width: "100%",
  cursor: 'pointer',
}