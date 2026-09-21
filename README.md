# Rudra Birthday Website ❤️

A small birthday surprise website built with Next.js and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Add your own photos

1. Put images inside `public/`, for example `photo1.jpg`.
2. In `app/page.js`, replace a photo placeholder with:

```jsx
<img src="/photo1.jpg" alt="Our memory" className="w-full h-full object-cover" />
```

## Free hosting on Vercel

1. Create a GitHub repository.
2. Push this project to GitHub.
3. Go to Vercel and import the repository.
4. Click Deploy.

Vercel will give you a free `.vercel.app` URL.
