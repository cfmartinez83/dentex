'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form() {
  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(createCustomer, initialState);

  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Customer Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                placeholder="Enter Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Customer Photo */}

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Customer Photo
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="photo"
                name="photo"
                type="string"
                placeholder="Enter Photo"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

      </div>
      
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
}
