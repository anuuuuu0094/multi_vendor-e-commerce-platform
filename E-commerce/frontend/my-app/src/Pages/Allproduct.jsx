import React, { useEffect, useState } from 'react'
import { currentTime, localStorageData } from '../utils/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const secondaryCol = '#ff696a'

export default function ProductsList() {
  const [openModal, setOpenModal] = useState(false)
  const [prodData, setProdData] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState(null)

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    images: '',
    stock: ''
  })
  async function fetchProdData() {
    const res = await fetch("https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
    const data = await res.json()
    return data || []
  }

  async function getData() {
    const data = await fetchProdData()
    if (data) {
      setProdData(data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const openAddNewForm = () => {
    setFormState({
      title: '',
      description: '',
      category: '',
      price: '',
      images: '',
      stock: ''
    })
    setIsEditing(false)
    setEditIndex(null)
    setOpenModal(true)
  }

  const handleEdit = (index) => {
    const item = prodData[index]
    setFormState({
      title: item.title || '',
      description: item.description || '',
      category: item.category || '',
      price: item.price || '',
      images: item.images || '',
      stock: item.stock || ''
    })
    setEditIndex(index)
    setIsEditing(true)
    setOpenModal(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newData = {
      ...formState,
      vendorId: localStorageData("uid"),
      createdAt: currentTime(),
      id: isEditing && prodData[editIndex]?.id ? prodData[editIndex].id : Math.floor(Math.random() * 10000),
      price: Number(formState.price)
    }

    let updatedList = []
    if (isEditing) {
      updatedList = prodData.map((item, i) => i === editIndex ? newData : item)
    } else {
      updatedList = [...prodData, newData]
    }

    await fetch("https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app/products.json", {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedList)
    })

    setOpenModal(false)
    setIsEditing(false)
    setEditIndex(null)
    setFormState({
      title: '',
      description: '',
      category: '',
      price: '',
      images: '',
      stock: ''
    })
    getData()
  }
  const handleDelete = async (index) => {
    const updatedList = prodData.filter((_, i) => i !== index)
    await fetch("https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app/products.json", {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedList)
    })
    setShowDeleteConfirm(false)
    setDeleteIndex(null)
    toast.success("Product deleted successfully!")
    getData()
  }
  

  return (
    <>
      <div style={{
        padding: '30px',
        width: "95%",
        maxWidth: '1200px',
        margin: "auto",
        fontFamily: 'Segoe UI, sans-serif'
      }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          margin: '30px 0',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <input
            type="text"
            placeholder="Search Here..."
            style={{
              padding: '10px 16px',
              fontSize: '16px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
              width: '250px',
              outline: 'none'
            }}
          />

          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: "#1c9cff",
              color: '#fff',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onClick={openAddNewForm}
          >
            Add New
          </button>
        </div>

        <h2 style={{ color: secondaryCol, marginBottom: '20px', textAlign: 'center' }}>
          Product List
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            minWidth: '800px',
            background: '#fff'
          }}>
            <thead style={{ backgroundColor: secondaryCol, color: 'white' }}>
              <tr>
                <th style={cellStyle}>Title</th>
                <th style={cellStyle}>Description</th>
                <th style={cellStyle}>Category</th>
                <th style={cellStyle}>Price</th>
                <th style={cellStyle}>Stock</th>
                <th style={cellStyle}>Created At</th>
                <th style={cellStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {prodData.map((item, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                  <td style={cellStyle}>{item.title}</td>
                  <td style={cellStyle}>{item.description}</td>
                  <td style={cellStyle}>{item.category}</td>
                  <td style={cellStyle}>₹{item.price}</td>
                  <td style={cellStyle}>{item.stock}</td>
                  <td style={cellStyle}>{item.createdAt?.slice(0, 10)}</td>
                  <td style={{ ...cellStyle, display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <button style={actionBtn} onClick={() => handleEdit(i)}>Edit</button>
                    <button 
                    style={{ ...actionBtn, backgroundColor: '#e63946' }}
                    onClick={() => {
                    setShowDeleteConfirm(true)
                    setDeleteIndex(i) }}>Delete</button>


                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {openModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '60px'
        }}>
          <div style={{
            width: '95%',
            maxWidth: '520px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
            padding: '28px',
            boxSizing: 'border-box',
            marginTop: "50px"
          }}>
            <h2 style={{
              marginBottom: '20px',
              textAlign: 'center',
              color: '#333',
              fontSize: '24px',
              fontWeight: '600',
              letterSpacing: '0.5px'
            }}>
              {isEditing ? "Edit Product" : "Add New Item"}
            </h2>

            <form onSubmit={handleSubmit}>
              <input name="title" placeholder="Product Title" value={formState.title} onChange={handleChange} style={inputStyle} />
              <textarea name="description" placeholder="Description" value={formState.description} onChange={handleChange} style={{ ...inputStyle, height: '80px', resize: 'none' }} />
              <input name="category" placeholder="Category" value={formState.category} onChange={handleChange} style={inputStyle} />
              <input name="price" type="number" placeholder="Price (₹)" value={formState.price} onChange={handleChange} style={inputStyle} />
              <input name="images" type="url" placeholder="Image URL" value={formState.images} onChange={handleChange} style={inputStyle} />
              <input name="stock" type="number" placeholder="Stock Quantity" value={formState.stock} onChange={handleChange} style={inputStyle} />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button type="button" style={cancelBtn} onClick={() => setOpenModal(false)}>Cancel</button>
                <button type="submit" style={submitBtn}>{isEditing ? "Update Item" : "Add Item"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
       {showDeleteConfirm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%',
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 10px 24px rgba(0,0,0,0.2)',
            maxWidth: '420px',
            width: '90%',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '20px', color: '#e63946', fontSize: '22px' }}>
              Are you sure you want to delete this product?
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button style={cancelBtn} onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
              <button style={{ ...submitBtn, backgroundColor: '#e63946' }} onClick={() => handleDelete(deleteIndex)}>Yes, Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Style Objects
const cellStyle = {
  padding: '14px 16px',
  textAlign: 'left',
  fontSize: '15px',
  borderBottom: '1px solid #ddd',
}

const actionBtn = {
  backgroundColor: '#ff696a',
  color: '#fff',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  cursor: 'pointer',
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  margin: '8px 0',
  fontSize: '15px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  outline: 'none',
  boxSizing: 'border-box'
}

const submitBtn = {
  backgroundColor: secondaryCol,
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '10px',
  cursor: 'pointer'
}

const cancelBtn = {
  backgroundColor: '#f0f0f0',
  color: '#333',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '10px',
  cursor: 'pointer'
}