import { Link } from '@remix-run/react'
import { type MetaFunction } from '@vercel/remix'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function IndexPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 px-4 py-12'>
      <h1 className='text-xl font-medium text-green-700'>Interview</h1>
      <p>
        This website contains some templates and API endpoints for use during
        frontend coding interviews.
      </p>
      <p>
        <Link to='/products' className='text-blue-500'>
          Here
        </Link>{' '}
        is an example solution UI. For more details, please visit{' '}
        <a
          href='https://github.com/nicholaschiang/interview#readme'
          target='_blank'
          rel='noreferrer'
          className='text-blue-500'
        >
          the GitHub repository
        </a>
        .
      </p>
      <div className='h-48' />
      <h2 className='font-medium text-green-700'>Welcome to Remix</h2>
      <p>This website uses Remix as the framework of choice.</p>
      <p>To learn more, please reference the following links:</p>
      <ul className='list-disc'>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/blog'
            rel='noreferrer'
            className='text-blue-500'
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/jokes'
            rel='noreferrer'
            className='text-blue-500'
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://remix.run/docs'
            rel='noreferrer'
            className='text-blue-500'
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}
