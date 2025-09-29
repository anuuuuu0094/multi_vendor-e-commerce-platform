
import { Link } from 'react-router-dom'
import React from 'react'

const secondaryColor = '#ff696a'

export default function LandingPage() {
  return (
    <div style={pageStyle}>
<section style={heroStyle}>
  <div style={heroOverlay}>
    <h1 style={heroTitle}>Welcome to e-commerce</h1>
    <p style={heroSubtitle}>Discover the best in Clothing, Electronics & Home Goods</p>
  </div>
</section>


      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Categories</h2>
        <div style={categoryGrid}>
          <Link to="/product">
          <div style={categoryCard}>
            <img
              src="https://i.pinimg.com/736x/cd/9d/65/cd9d65c9f8b7ed9d9a76d132633d6167.jpg"
              alt="Clothing"
              style={categoryImage}
            />
            <h3>All product</h3>
          </div>
          </Link>
          <div style={categoryCard}>
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Clothing"
              style={categoryImage}
            />
            <h3>Clothing</h3>
          </div>
          <div style={categoryCard}>
            <img
              src="https://i.pinimg.com/1200x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg"
              alt="Electronics"
              style={categoryImage}
            />
            <h3>Electronics</h3>
          </div>
          <div style={categoryCard}>
            <img
              src="https://i.pinimg.com/736x/1c/af/c3/1cafc3b4aa16a7a2003e0aa51342231f.jpg"
              alt="Home Goods"
              style={categoryImage}
            />
            <h3>Home Goods</h3>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Why Shop With Us?</h2>
        <div style={infoGrid}>
          <div style={infoCard}>
            <img
              src="https://i.pinimg.com/736x/c3/6f/b8/c36fb80545a270c90f22cfe8c1f71e99.jpg"
              alt="Fast Delivery"
              style={infoImage}
            />
            <p>Super fast and secure delivery service</p>
          </div>
          <div style={infoCard}>
            <img
              src="https://i.pinimg.com/736x/3f/ad/4e/3fad4ed9ca2bcb54dc8d6ddfea34021e.jpg"
              alt="Secure Payments"
              style={infoImage}
            />
            <p>100% secure payment methods</p>
          </div>
          <div style={infoCard}>
            <img
              src="https://i.pinimg.com/736x/cf/ff/c5/cfffc5c9b4b662bdd574dd02e7c1e47c.jpg"
              alt="Support"
              style={infoImage}
            />
            <p>24/7 customer support</p>
          </div>
        </div>
      </section>

      <section style={about}>
        <h2 style={sectionHeading}>Why Shop With Us?</h2>
        <p style={aboutText}>
          At e-commerce, we’re committed to bringing you the best deals on the products you love — from trendy fashion and gadgets to smart home essentials. Our hand-picked collections ensure quality, style, and value with every purchase.
        </p>
      </section>
      <section style={styles.section}>
      <h2 style={styles.title}>Contact Us</h2>
      <p style={styles.subtitle}>We’d love to hear from you! Fill in the form below and we’ll get in touch shortly.</p>

      <form style={styles.form}>
        <input style={styles.input} type="text" placeholder="Your Name" required />
        <input style={styles.input} type="email" placeholder="Your Email" required />
        <textarea style={styles.textarea} placeholder="Your Message" required />
        <button style={styles.button} type="submit">Send Message</button>
      </form>
    </section>
    </div>
  )
}

const pageStyle = {
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#fff',
  color: '#333',
  padding: '0 20px',
  maxWidth: '1300px',
  margin: '0 auto',
}

const heroStyle = {
    position: 'relative',
    backgroundImage: 'url("https://i.pinimg.com/1200x/c4/76/91/c47691057c4f79e70534cdaa0f67e048.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '20px',
    overflow: 'hidden',
    marginBottom: '40px',
  }
  
  const heroOverlay = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '40px 20px',
    borderRadius: '12px',
    maxWidth: '700px',
  }
  
  const heroTitle = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: secondaryColor,
    marginBottom: '15px',
  }
  
  const heroSubtitle = {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '100%',
  }
  

const sectionStyle = {
  textAlign: 'center',
  padding: '40px 0',
}

const sectionTitle = {
  fontSize: '2rem',
  color: secondaryColor,
  marginBottom: '20px',
}

const categoryGrid = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
}

const categoryCard = {
  width: '240px',
  borderRadius: '12px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  padding: '16px',
  backgroundColor: '#fff',
  textAlign: 'center',
  transition: 'transform 0.3s ease',
}

const categoryImage = {
  width: '100%',
  height: '160px',
  objectFit: 'cover',
  borderRadius: '10px',
  marginBottom: '12px',
}

const infoGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '30px',
}

const infoCard = {
  maxWidth: '300px',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  textAlign: 'center',
}

const infoImage = {
  width: '100%',
  height: '160px',
  objectFit: 'cover',
  borderRadius: '10px',
  marginBottom: '12px',
}

const about = {
    padding: '60px 5%',
    background: '#fdf3f3',
    textAlign: 'center',
}
const aboutText = {
    maxWidth: '800px',
    margin: '0 auto',
    fontSize: '1.1rem',
    lineHeight: '1.6',
}
const  sectionHeading = {
    fontSize: '2rem',
    color: secondaryColor,
    marginBottom: '40px',
  }


  
const styles = {
  section: {
    background: `linear-gradient(to right, #ffffff, #fff4f5)`,
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    maxWidth: '800px',
    margin: '40px auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: secondaryColor,
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '30px'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  textarea: {
    minHeight: '120px',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical'
  },
  button: {
    backgroundColor: secondaryColor,
    color: '#fff',
    padding: '14px',
    borderRadius: '14px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    transition: '0.3s ease'
  }
}