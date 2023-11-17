import { addProductToDatabase } from '@/actions/serverActions';
import { Product } from '@/typings';

export default async function Home() {
  const res = await fetch(
    'https://6557547bbd4bcef8b61273ab.mockapi.io/products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products'],
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products Warehose</h1>

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          type="text"
          name="product"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Product name..."
        />
        <input
          type="text"
          name="price"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Product price..."
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>£{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
