"use client";

import { Submit } from "../../components/submit";
import { useActionState } from "react";
import { FormState, updateProduct } from "../../actions/products";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
}

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = { errors: {} };
  const [formState, formAction, isPending] = useActionState(updateProduct, initialState);

  return (
    <div style={{ padding: 32 }}>
      <h1>Edit Product</h1>
      <form action={formAction} style={{ 
        maxWidth: 400, 
        margin: "0 auto", 
        backgroundColor: "#64748b", 
        padding: "24px", 
        borderRadius: "8px",
        color: "white"
      }}>
        <input type="hidden" name="id" value={product.id} />
        <div style={{ marginBottom: 12 }}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              defaultValue={product.title}
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
              defaultValue={product.price}
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
              defaultValue={product.description || ""}
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