import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  base: "./",
  server: {
    // cors: {
    //   origin: "https://donorbox.org/widgets.js",
    //   allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
    // },
    cors: true,
  },
})
