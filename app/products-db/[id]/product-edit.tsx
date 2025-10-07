"use client";

import { Submit } from "../../components/submit";
import { useActionState } from "react";
import { FormState, updateProduct } from "../../actions/products";


export default function EditProductForm() {
  const initialState: FormState = { errors: {} };



  return (
    <div style={{ padding: 32 }}>
      <h1>Create Product</h1>
      <form action={formAction} style={{ 
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
              name="title"
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
          {formState.errors.title && (
            <p style={{ color: "red" }}>{formState.errors.title}</p>
          )}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Price:
            <input
              type="number"
              name="price"
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
          {formState.errors.price && (
            <p style={{ color: "red" }}>{formState.errors.price}</p>
          )}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Description:
            <textarea
              name="description"
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
          {formState.errors.description && (
            <p style={{ color: "red" }}>{formState.errors.description}</p>
          )}
        </div>
        <Submit />
      </form>
    </div>
  );
}