import { NavLink } from '@remix-run/react'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useState } from 'react'

import { type Response } from '~/routes/api.products'

import { cn } from '~/cn'

type Pagination = { limit: number; skip: number }

export default function ProductsPage() {
  const [pagination, setPagination] = useState<Pagination>({
    limit: 10,
    skip: 0,
  })
  const { data, isFetching, isPending, error } = useQuery<Response>({
    placeholderData: keepPreviousData,
    queryKey: ['products', pagination],
    queryFn: async () => {
      const searchParams = new URLSearchParams({
        limit: pagination.limit.toString(),
        skip: pagination.skip.toString(),
      })
      const endpoint = `/api/products?${searchParams.toString()}`
      console.log(`fetching... endpoint: ${endpoint}`)
      const response = await fetch(endpoint)
      if (!response.ok) throw new Error('Something went wrong.')
      return response.json()
    },
    retry: false,
  })
  return (
    <>
      <header className='flex flex-col items-center gap-2 border-b border-neutral-200 p-4'>
        <NavLink
          to='/'
          className={({ isPending }) =>
            cn(
              'block bg-black px-1.5 py-0.5 text-lg font-semibold text-white',
              isPending && 'cursor-wait',
            )
          }
        >
          KITH
        </NavLink>
        <p className='text-sm italic text-neutral-400'>
          Built on the foundations of friends and family
        </p>
      </header>
      {data && (
        <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-4 p-4 sm:grid-cols-3 md:grid-cols-6'>
          {data.products.map((product) => (
            <a
              className='flex flex-col gap-2 text-sm'
              key={product.id}
              target='_blank'
              rel='noopener noreferrer'
              href={product.variants[0].prices[0].url}
            >
              <img
                src={product.variants[0].images[0].url}
                alt={product.name}
                className='aspect-square w-full'
              />
              <div>
                <h2 className='truncate'>{product.name}</h2>
                <p className='text-neutral-400'>
                  ${product.variants[0].prices[0].value}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
      {isPending && (
        <p className='m-4 flex min-h-48 animate-pulse items-center justify-center rounded bg-neutral-100 p-4'>
          Loading products...
        </p>
      )}
      {error && (
        <p className='m-4 flex min-h-48 items-center justify-center rounded bg-red-50 p-4 text-red-500'>
          There was an issue loading product information. {error.message}
        </p>
      )}
      {data && pagination.limit < data.total && (
        <div className='flex justify-center p-4'>
          <button
            className='truncate rounded bg-black px-6 py-2 text-sm font-medium text-white shadow-sm disabled:cursor-wait'
            type='button'
            disabled={isFetching}
            onClick={() =>
              setPagination((prev) => ({ limit: prev.limit + 10, skip: 0 }))
            }
          >
            {isFetching ? 'Loading products...' : 'Load more products'}
          </button>
        </div>
      )}
    </>
  )
}
