import { getProducts } from "../prisma-db";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function ProductsDBPage() {
    const products: Product[] = await getProducts();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
                >
                    <div>
                        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                        <p className="text-gray-700 mb-4">
                            {product.description ? product.description : "No description"}
                        </p>
                    </div>
                    <div className="mt-auto">
                        <span className="text-lg font-semibold text-blue-600">
                            ${product.price}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}