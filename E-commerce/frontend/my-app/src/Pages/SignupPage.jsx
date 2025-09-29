import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
const secondaryColor = '#ff696a'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        password: password,
        address: address,
        role_id : 2,
      })

      setSuccess(true)
      setError('')
    } catch (err) {
      console.error("Signup error:", err.message)
      setError(err.message)
      setSuccess(false)
    }
  }

  return (
    <div style={pageStyle}>
      <div style={formContainer}>
        <h2 style={formTitle}>Create Your Account</h2>
        <form style={formStyle} onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} />
          <textarea placeholder="Address" rows={3} style={inputStyle} value={address} onChange={(e) => setAddress(e.target.value)} />
          <button type="submit" style={submitButton}>Sign Up</button>
        </form>
        {success && <p style={{ color: 'green' }}>Signup successful! ✅</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p style={loginText}>Already have an account? <Link to="/login"><span style={loginLink}>Login</span></Link></p>
      </div>
    </div>
  )
}

const pageStyle = {
  backgroundColor: '#fff',
  fontFamily: 'Segoe UI, sans-serif',
  minHeight: '85vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
}

const formContainer = {
  background: 'linear-gradient(135deg, #fff0f1, #ffffff)',
  padding: '40px 30px',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center',
}

const formTitle = {
  color: secondaryColor,
  fontSize: '2rem',
  marginBottom: '10px',
}

const formSubtitle = {
  color: '#555',
  fontSize: '1rem',
  marginBottom: '30px',
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
}

const inputStyle = {
  padding: '12px 16px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease',
}

const textareaStyle = {
  padding: '12px 16px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  fontSize: '1rem',
  outline: 'none',
  resize: 'vertical',
}

const submitButton = {
  padding: '14px 0',
  backgroundColor: secondaryColor,
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
}

const loginText = {
  marginTop: '20px',
  fontSize: '0.95rem',
  color: '#555',
}

const loginLink = {
  color: secondaryColor,
  textDecoration: 'none',
  fontWeight: 'bold',
  marginLeft: '4px',
  cursor: 'pointer',
}