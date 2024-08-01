import { json, type LoaderFunctionArgs } from '@vercel/remix'

import { type Product } from '~/types'

import products from '../../public/products.json'

export type Response = {
  products: Product[]
  total: number
}

const defaultLimit = 10
const defaultSkip = 0
const endpointSpeed = 2500

export async function loader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url)
  let limit = Number(searchParams.get('limit') ?? defaultLimit)
  let skip = Number(searchParams.get('skip') ?? defaultSkip)
  if (isNaN(limit)) limit = defaultLimit
  if (isNaN(skip)) skip = defaultSkip
  console.log(
    `failed to get products... limit: ${limit}, skip: ${skip}, start: ${skip}, end: ${skip + limit}`,
  )
  await new Promise((resolve) => setTimeout(resolve, endpointSpeed))
  throw new Error('Something went wrong getting the products.')
  return json<Response>({
    products: products.slice(skip, skip + limit),
    total: products.length,
  })
}
