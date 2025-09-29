import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const db = getFirestore()
import { AuthContext } from '../AuthContext/AuthContext'
const secondaryColor = '#ff696a'

export default function LoginPage() {

    const { email, setEmail, setPassword, password, handleLogin, error } = useContext(AuthContext);

    return (
        <div style={pageStyle}>
            <div style={formContainer}>
                <h2 style={formTitle}>Welcome Back!</h2>
                <p style={formSubtitle}>Login to continue shopping</p>
                <form style={formStyle} onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        style={inputStyle}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={inputStyle}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" style={submitButton}>Login</button>
                </form>
                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                <p style={signupText}>Don't have an account?
                    <Link to="/signup">
                        <span style={signupLink}> Sign Up</span>
                    </Link>
                </p>
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

const signupText = {
    marginTop: '20px',
    fontSize: '0.95rem',
    color: '#555',
}

const signupLink = {
    color: secondaryColor,
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '4px',
    cursor: 'pointer',
}