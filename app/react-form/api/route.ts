import { addProduct } from "../../prisma-db";

export async function POST(request: Request) {
  try {
    const { title, price, description } = await request.json();
    const product = await addProduct(title, parseFloat(price), description);
    return Response.json({ success: true, product });
  } catch (error) {
    return Response.json({ success: false, error: "Failed to create product" }, { status: 500 });
  }
}
