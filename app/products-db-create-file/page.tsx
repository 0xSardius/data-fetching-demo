import { addProduct } from "../prisma-db";
import { redirect } from "next/navigation";
import { Submit } from "../components/submit";

async function createProduct(formData: FormData) {
  "use server";
  
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  
  if (!title || !price || !description) {
    throw new Error("All fields are required");
  }
  
  try {
    await addProduct(title, parseFloat(price), description);
    redirect("/products-db");
  } catch (error) {
    throw new Error("Failed to create product");
  }
}

export default function AddProductPage() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Create Product</h1>
      <form action={createProduct} style={{ 
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
        </div>
        <Submit />
      </form>
    </div>
  );
}