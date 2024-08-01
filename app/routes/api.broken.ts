import { json, type LoaderFunctionArgs } from '@vercel/remix'

import products from '../../public/products.json'

type Response = {
  products: typeof products
  total: number
}

const defaultLimit = 10
const defaultSkip = 0

export function loader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url)
  let limit = Number(searchParams.get('limit'))
  let skip = Number(searchParams.get('skip'))
  if (isNaN(limit)) limit = defaultLimit
  if (isNaN(skip)) skip = defaultSkip
  return json<Response>({
    products: products.slice(skip, skip + limit),
    total: products.length,
  })
}
