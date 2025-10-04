"use client";
import React, { useState } from "react";

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/react-form/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, price, description })
      });
      
      if (response.ok) {
        alert('Product created successfully!');
        // Reset form
        setTitle("");
        setPrice("");
        setDescription("");
      } else {
        alert('Failed to create product');
      }
    } catch (error) {
      alert('Error creating product');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      maxWidth: 400, 
      margin: "0 auto", 
      backgroundColor: "#64748b", 
      padding: "24px", 
      borderRadius: "8px",
      color: "white"
    }}>
      <div style={{ marginBottom: 12 }}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ 
              width: "100%", 
              padding: 8, 
              marginTop: 4,
              backgroundColor: "white",
              border: "1px solid #cbd5e1",
              borderRadius: "4px",
              color: "black"
            }}
            required
          />
        </label>
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            style={{ 
              width: "100%", 
              padding: 8, 
              marginTop: 4,
              backgroundColor: "white",
              border: "1px solid #cbd5e1",
              borderRadius: "4px",
              color: "black"
            }}
            required
            min="0"
            step="0.01"
          />
        </label>
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>
          Description:
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ 
              width: "100%", 
              padding: 8, 
              marginTop: 4,
              backgroundColor: "white",
              border: "1px solid #cbd5e1",
              borderRadius: "4px",
              color: "black"
            }}
            required
          />
        </label>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button type="submit" style={{ 
          padding: "12px 24px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          minWidth: "140px"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#2563eb";
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#3b82f6";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        }}>
          Create Product
        </button>
      </div>
    </form>
  );
}

export default function Page() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Create Product</h1>
      <CreateProduct />
    </div>
  );
}
