import { json, type LoaderFunctionArgs } from '@vercel/remix'

import products from '../../public/products.json'

type Response = {
  products: typeof products
  total: number
}

const defaultLimit = 10
const defaultSkip = 0
const endpointSpeed = 2500

export async function loader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url)
  let limit = Number(searchParams.get('limit'))
  let skip = Number(searchParams.get('skip'))
  if (isNaN(limit)) limit = defaultLimit
  if (isNaN(skip)) skip = defaultSkip
  await new Promise((resolve) => setTimeout(resolve, endpointSpeed))
  return json<Response>({
    products: products.slice(skip, skip + limit),
    total: products.length,
  })
}
