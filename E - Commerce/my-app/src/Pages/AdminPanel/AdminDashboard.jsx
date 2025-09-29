import React, { useState } from 'react'
import ProductsList from './ProductList'
const secondaryColor = '#ff696a'
export default function AdminDashboard() {
    const [adminTab, setAdminTab] = useState("Products");

    const handleAdminTabChange = (val) => {
        setAdminTab(val)
    }

    return (
        <div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                padding: '24px',
                background: '#fff',
                fontFamily: 'Segoe UI, sans-serif'
            }}>
                <button style={{
                    background: secondaryColor,
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                    onClick={() => handleAdminTabChange("Products")}>
                    Products
                </button>

                <button style={{
                    background: secondaryColor,
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                    onClick={() => handleAdminTabChange("Users")}>
                    Users
                </button>

                <button style={{
                    background: secondaryColor,
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                    onClick={() => handleAdminTabChange("Orders")}>
                    Orders
                </button>
            </div>

            {adminTab == "Products" && <ProductsList />}
            
            {adminTab == "Users" && <h2>Users</h2> }

            {adminTab == "Orders" && <h2>Work In progress...</h2> }

        </div>
    )
}