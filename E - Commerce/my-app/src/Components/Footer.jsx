import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const secondaryColor = '#ff696a'

export default function Footer() {
    return (
        <footer style={footerContainer}>
            <div style={footerContent}>
                {/* Section 1: Brand + Contact */}
                <div style={footerColumn}>
                    <div style={logo}>e-commerce</div>
                    <p style={infoText}><FaMapMarkerAlt style={iconInline} /> New Delhi, India</p>
                    <p style={infoText}><FaPhoneAlt style={iconInline} /> +91 9876543210</p>
                    <p style={infoText}><FaEnvelope style={iconInline} /> support@shopcircle.com</p>
                </div>

                {/* Section 2: Quick Links */}
                <div style={footerColumn}>
                    <h4 style={sectionTitle}>Quick Links</h4>
                    <span style={link}>Home</span>
                    <span style={link}>About</span>
                    <span style={link}>Blog</span>
                    <span style={link}>Contact</span>
                </div>

                {/* Section 3: Newsletter */}
                <div style={footerColumn}>
                    <h4 style={sectionTitle}>Subscribe</h4>
                    <p style={infoText}>Get the latest updates and offers.</p>
                    <input type="email" placeholder="Your Email" style={input} />
                    <button style={subscribeButton}>Subscribe</button>
                </div>

                {/* Section 4: Social Icons */}
                <div style={footerColumn}>
                    <h4 style={sectionTitle}>Follow Us</h4>
                    <div style={socials}>
                        <span style={socialBtn}><FaFacebookF style={socialIcon} /></span>
                        <span style={socialBtn}><FaTwitter style={socialIcon} /></span>
                        <span style={socialBtn}><FaInstagram style={socialIcon} /></span>
                        <span style={socialBtn}><FaEnvelope style={socialIcon} /></span>
                        
                    </div>
                </div>
            </div>

            <div style={copyright}>
                © {new Date().getFullYear()} e-commerce. All rights reserved.
            </div>
        </footer>
    )
}

const footerContainer = {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    padding: '40px 20px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    boxShadow: '0 -2px 6px rgba(0,0,0,0.05)',
}

const footerContent = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '40px',
}

const footerColumn = {
    flex: '1',
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-start',
}

const logo = {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: secondaryColor,
    marginBottom: '8px',
}

const sectionTitle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '4px',
}

const link = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    cursor: "pointer"
}

const socials = {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
}

const socialBtn = {
    backgroundColor: secondaryColor,
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
}

const socialIcon = {
    color: '#fff',
    fontSize: '1rem',
}

const infoText = {
    color: '#555',
    fontSize: '0.95rem',
}

const iconInline = {
    marginRight: '6px',
    color: secondaryColor,
}

const input = {
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '0.9rem',
    marginBottom: '8px',
}

const subscribeButton = {
    backgroundColor: secondaryColor,
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
}

const copyright = {
    textAlign: 'center',
    marginTop: '30px',
    color: '#777',
    fontSize: '0.85rem',
}