import React, { useState, useEffect, useContext } from 'react'
import { FaUserAlt, FaBars, FaTimes } from 'react-icons/fa'
import { AiFillAndroid, AiOutlineLogout } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
import { localStorageData } from '../utils/utils';
const secondryCol = '#ff696a'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [userData, setUserData] = useState(null)

    const { handleLogOut, userInfo } = useContext(AuthContext)
    console.log(userInfo)
    useEffect(() => {   
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const localUsersValue = localStorageData();
        setUserData(localUsersValue)
    }, [])

    return (
        <div style={navbarStyle}>
            <div style={logoStyle}>e-commerce</div>

            {(isMobile ? menuOpen : true) && (
                <div style={{ ...linksContainerStyle, ...(isMobile ? linksMobileStyle : {}) }}>
                    <Link to="/" style={linkStyle}>Home</Link>
                    <span style={linkStyle}>About</span>
                    <span style={linkStyle}>Blog</span>
                    <span style={linkStyle}>Contact</span>
                </div>
            )}

            <div style={iconContainerStyle}>
                <Link to="/cart">
                <div style={iconButtonStyle}><FaShoppingCart title="Login" style={iconStyle} /></div>
                </Link>
                <Link to="/login">
                <div style={iconButtonStyle}><FaUserAlt title="Login" style={iconStyle} /></div>
                </Link>
                {userData?.role_id == 1 && 
                <Link to="/admin-vendor">
                <div style={iconButtonStyle}><AiFillAndroid  title="Admin" style={iconStyle} /></div>
                </Link>
                }
                {
                    userData &&
                    <div style={logOutIcon} onClick={handleLogOut} ><AiOutlineLogout title="LogOut" style={iconStyle} /></div>
                }
                
            </div>

            {isMobile && (
                <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            )}
        </div>
    )
}

const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    fontFamily: 'Segoe UI, sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
}

const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: secondryCol,
    flexShrink: 0,
}

const linksContainerStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    flexWrap: 'wrap',
}

const linksMobileStyle = {
    flexDirection: 'column',
    width: '100%',
    padding: '10px 0',
    marginTop: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    borderTop: '1px solid #eee',
}

const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
fontWeight: "bold"
}

const iconContainerStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
}

const iconButtonStyle = {
    backgroundColor: secondryCol,
    borderRadius: '8px',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
}

const logOutIcon= {
    backgroundColor: "#1d9bff",
    borderRadius: '8px',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
}

const iconStyle = {
    color: '#fff',
    fontSize: '0.8rem',
}

const hamburgerStyle = {
    fontSize: '1.5rem',
    cursor: 'pointer',
    marginLeft: '10px',
    color: '#333',
}