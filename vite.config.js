import { defineConfig } from 'vite'
import http from 'http'
import vue from '@vitejs/plugin-vue'

http.createServer(function (req, res) {
  if (req.url === '/demo/settings.js') {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write('var settings = { foo: 1, bar: 2 }');
  } else {
    res.writeHead(500, {'Content-Type': 'text/javascript'});
  }
  res.end();
}).listen(9008);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/demo/',
  server: {
    port: 3050,
    proxy: {
      '/demo/settings.js': {
        target: 'http://localhost:9008',
      },
    },
  },
})
