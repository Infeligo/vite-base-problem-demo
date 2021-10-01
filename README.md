# Vite `base` option and URL rewriting problem demo

Run and build as usual:

```shell
yarn dev
yarn build
```

1. Take a look at `vite.config.js`:

- Option `base` is equal to `/demo/`, meaning that the application is served under http://localhost:3050/demo/
  
- I have a proxy that would resolve http://localhost:3050/demo/settings.js as JS file.
  In real life it would delegate to a backend that serves dynamic configuration.

2. Now take a look at `index.html`:

- I include the settings file like this: <br/> 
    `<script type="text/javascript" src="/settings.js"></script>`
  
- In dev mode, the file is resolved successfully as Vite rewrites the URL (per documentation).

3. Build the project and examine `dist/index.html`:

- **The settings file URL is not rewritten!**
  
- However, all other URLs are rewritten.
