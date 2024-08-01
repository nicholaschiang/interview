# `interview`

This repository contains some template code for a frontend technical interview.

## 1

**~10-15 minutes**

There is an API endpoint implementation defined in `app/routes/api.broken.ts`.
This endpoint intentionally contains a small bug that leads to it returning an empty response when called (`GET /api/broken`).
Instead, `GET /api/broken` should return a list of the first 10 products.

To run locally:

```sh
pnpm install
pnpm dev
```

Then, visit [`http://localhost:5173/api/broken`](http://localhost:5173/api/broken) to see the current (incorrect) response.
Update the `app/routes/api.broken.ts` file to fix the bug and return the correct response.

## 2

**~30-50 minutes**

Visit [the KITH e-commerce website](https://kith.com/collections/kith).
Using the [`/api/products`](http://localhost:5173/api/products) API endpoint, create a similar UI that shows a grid of products.
Each product item should show the product image, name, and price.
When clicked, the product item should open the product link in a new tab.

An example implementation can be found in `app/routes/products.tsx`.
This implementation was completed in its entirety in less than 40 minutes.
This should only be referenced if you are stuck or need inspiration.

This task demonstrates your ability to:
- Style a responsive UI (mobile and desktop).
- Fetch data from an API.
- Show loading and error states to your users.
- Handle pagination (a simple "Load more" button will suffice).
- Follow a design (the KITH website).

# Remix

This directory is a brief example of a [Remix](https://remix.run/docs) site that can be deployed to Vercel with zero configuration.

To get started, run the Remix cli with this template

```sh
npx create-remix@latest --template vercel/vercel/examples/remix
```

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/remix&template=remix)

_Live Example: https://remix-run-template.vercel.app_

You can also deploy using the [Vercel CLI](https://vercel.com/docs/cli):

```sh
pnpm i -g vercel
vercel
```

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
pnpm install
```

Afterwards, start the Remix development server like so:

```sh
pnpm run dev
```

Open up [http://localhost:5173](http://localhost:5173) and you should be ready to go!
