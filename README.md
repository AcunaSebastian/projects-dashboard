# This is a template for all the proyecto of solidJS with Tailwind
## To replicate this template this commnands:

### To create a solidJS proyecto use:
```
 npx degit solidjs/templates/ts nombre-app
 cd nombre-app
 npm i # o yarn o pnpm
 npm run dev # o yarn o pnpm
 ```

 ### To integrate Tailwind css use:
- install package and initialize the config
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Confiigure the tailwindcss.config.js file
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- add the directives from tailwind in your index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## Finaly, to run the proyecto use 
```
npm run dev
```

