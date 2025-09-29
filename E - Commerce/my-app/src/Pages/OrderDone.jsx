import React from 'react'
import { useNavigate } from 'react-router-dom'

const secondaryColor = '#ff696a'

export default function OrderDone() {
    const navigate = useNavigate()
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to bottom right, #fff, #fbeff0)',
      padding: '40px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '450px',
        width: '100%'
      }}>
        <img 
          src="https://i.pinimg.com/736x/2f/09/d9/2f09d96d2cf14697b11e692ee385353a.jpg" 
          alt="Order Completed"
          style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginBottom: '24px',
            border: `4px solid ${secondaryColor}`
          }}
        />
        <h2 style={{
          color: secondaryColor,
          fontSize: '24px',
          marginBottom: '10px'
        }}>
          Thank You for Your Order!
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#444',
          marginBottom: '24px'
        }}>
          Your order has been successfully placed. You will receive a confirmation email shortly.
        </p>

        <button
          onClick={() => navigate("/")} 
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: secondaryColor,
            color: '#fff',
            cursor: 'pointer',
            transition: '0.3s',
          }}
        >
          Shop Again
        </button>
      </div>
    </div>
  )
}