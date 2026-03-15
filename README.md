# React.js Project Setup using Vite v7

এই গাইডে React.js project Vite version 7 ব্যবহার করে কিভাবে তৈরি করতে হয়
তা step‑by‑step দেখানো হয়েছে।

------------------------------------------------------------------------

## Step‑1: Node.js version check

Vite 7 এর জন্য Node.js 18 বা তার বেশি প্রয়োজন (Node 20 recommended)।

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

## Step‑2: Vite React project create

``` bash
npm create vite@latest my-react-app
```

অথবা

``` bash
npm create vite@7 my-react-app
```

তারপর select করুন:

    Project name: my-react-app
    Framework: React
    Variant: JavaScript / TypeScript

------------------------------------------------------------------------

## Step‑3: Project folder এ যান

``` bash
cd my-react-app
```

------------------------------------------------------------------------

## Step‑4: Dependencies install

``` bash
npm install
```

------------------------------------------------------------------------

## Step‑5: Development server run

``` bash
npm run dev
```

তারপর browser এ open করুন:

    http://localhost:5173/

------------------------------------------------------------------------

## Step‑6: Project structure

    my-react-app

    ├── node_modules
    ├── public
    ├── src
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   └── assets
    │
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── .gitignore

------------------------------------------------------------------------

## Important Files

### main.jsx

``` js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### App.jsx

``` jsx
function App() {
  return (
    <div>
      <h1>Hello React + Vite 7</h1>
    </div>
  )
}

export default App
```

------------------------------------------------------------------------

## Step‑7: Clean boilerplate code

``` jsx
function App() {
  return (
    <div>
      <h1>My React App</h1>
    </div>
  )
}

export default App
```

------------------------------------------------------------------------

## Step‑8: প্রয়োজনীয় packages install

### React Router

``` bash
npm install react-router
```

### Axios

``` bash
npm install axios
```

### React Icons

``` bash
npm install react-icons
```

------------------------------------------------------------------------

## Step‑9: Tailwind CSS setup

Install:

``` bash
npm install tailwindcss @tailwindcss/vite
```

vite.config.js:

``` js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

index.css:

``` css
@import "tailwindcss";
```

------------------------------------------------------------------------

## Step‑10: Recommended folder structure

    src

    ├── components
    ├── pages
    ├── layouts
    ├── routes
    ├── hooks
    ├── services
    ├── utils
    ├── assets
    └── App.jsx

------------------------------------------------------------------------

## Step‑11: Production build

``` bash
npm run build
```

Preview:

``` bash
npm run preview
```

------------------------------------------------------------------------

## Common Problems Fix

Dependency error হলে:

``` bash
npm install --legacy-peer-deps
```

অথবা:

``` bash
npm cache clean --force
npm install
```

------------------------------------------------------------------------

## Recommended packages (Professional setup)

``` bash
npm install react-router axios react-hot-toast sweetalert2
```

UI library:

``` bash
npm install daisyui
```

------------------------------------------------------------------------

## Complete Setup Commands

``` bash
npm create vite@latest myApp
cd myApp
npm install
npm install react-router axios react-icons
npm install tailwindcss @tailwindcss/vite
npm run dev
```

------------------------------------------------------------------------

## Author

Mohammad Zunaid Hossain\
Web Developer

------------------------------------------------------------------------
