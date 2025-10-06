import { addProduct } from "../prisma-db";
import { redirect } from "next/navigation";
import { Submit } from "../components/submit";
import { useActionState } from "react";

type Errors = {
    title?: string;
    price?: string;
    description?: string;
}

type FormState = {
    errors: Errors;
}

async function createProduct(formData: FormData) {
  "use server";
  
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  
  try {
    await addProduct(title, parseFloat(price), description);
    redirect("/products-db");
  } catch (error) {
    throw new Error("Failed to create product");
  }
}

export default function AddProductPage() {
  const initialState: FormState = { errors: {} };


  const [formState, formAction, isPending] = useActionState(createProduct, initialState);
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