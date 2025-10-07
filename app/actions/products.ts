"use server";

import { addProduct, updateProduct as updateProductDb } from "../prisma-db";
import { redirect } from "next/navigation";

export type Errors = {
    title?: string;
    price?: string;
    description?: string;
}

export type FormState = {
    errors: Errors;
}

export async function createProduct(formData: FormData) {
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

export async function updateProduct(prevState: FormState, formData: FormData) {
  "use server";
  
  const id = formData.get("id") as string;
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
    await updateProductDb(parseInt(id), title, parseFloat(price), description);
    redirect("/products-db");
  } catch (error) {
    throw new Error("Failed to update product");
  }
}