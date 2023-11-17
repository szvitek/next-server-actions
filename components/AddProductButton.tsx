'use client';

import { addProductToDatabase } from '@/actions/serverActions';
import { useTransition } from 'react';

//? read more: https://nextjs.org/docs/app/api-reference/functions/server-actions
//? Using formAction: React's formAction prop allows handling <button>, <input type="submit">, and <input type="image"> elements in a <form>
//! Invoke Server Actions without using action or formAction by using startTransition
//! This method disables Progressive Enhancement
const AddProductButton = () => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append('product', 'Mackbook Pro');
  formData.append('price', '1299.99');

  return (
    <button
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
    >
      {isPending ? 'Adding...' : 'Add Macbook Pro'}
    </button>
  );
};
export default AddProductButton;
