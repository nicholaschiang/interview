import type products from '../public/products.json'

export type Product = (typeof products)[number]
