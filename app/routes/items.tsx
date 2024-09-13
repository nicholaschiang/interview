// import './items.css'

import { useState, useEffect } from 'react'
import { Response } from '~/routes/api.broken'

const ITEM_URL = '/api/broken?limit='

export default function Items() {
  const [response, setResponse] = useState<Response | null>(null)
  const [limit, setLimit] = useState(10)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true)
      const res = await fetch(ITEM_URL + limit.toString())
      const jsonRes = await res.json()

      setResponse(jsonRes)
      setIsLoading(false)
    }

    getItems()
  }, [limit])

  if (response === null && isLoading) {
    return <div>Loading Products...</div>
  }

  if (response === null) return null

  console.log(response)

  return (
    <div className='item-page'>
      <div className='items-container'>
        {response.products.map((product) => {
          return (
            <div key={product.id} className='item-container'>
              <img
                src={product.variants[0].images[0].url}
                width={75}
                height={75}
              />
              <div>{product.name}</div>
              <div>{`$${product.msrp}`}</div>
            </div>
          )
        })}
      </div>
      {limit < response.total ? (
        <div className='center'>
          <button
            className={[isLoading && 'pointer-loading']
              .filter(Boolean)
              .join(' ')}
            onClick={() => setLimit((lim) => lim + 10)}
            disabled={isLoading}
          >
            {!isLoading ? 'Load more products' : 'Loading Products...'}
          </button>
        </div>
      ) : null}
    </div>
  )
}
