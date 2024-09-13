import { json, type LoaderFunctionArgs } from '@vercel/remix'

import products from '../../public/products.json'

export type Response = {
  products: typeof products
  total: number
}

const defaultLimit = 10
const defaultSkip = 0
const endpointSpeed = 100

export async function loader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url)
  const searchLimit = searchParams.get('limit')
  const searchSkip = searchParams.get('skip')

  let limit = searchLimit != null ? Number(searchLimit) : defaultLimit
  let skip = searchSkip != null ? Number(searchSkip) : defaultSkip

  if (isNaN(limit)) limit = defaultLimit
  if (isNaN(skip)) skip = defaultSkip
  await new Promise((resolve) => setTimeout(resolve, endpointSpeed))
  return json<Response>({
    products: products.slice(skip, skip + limit),
    total: products.length,
  })
}
