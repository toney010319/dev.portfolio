import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

const GA_MEASUREMENT_ID = "G-B1ZJNCRSRN"

function ga4Plugin(): Plugin {
  return {
    name: "ga4",
    apply: "build",
    transformIndexHtml(html) {
      const snippet = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${GA_MEASUREMENT_ID}');
    </script>
`
      return html.replace("  </head>", `${snippet}  </head>`)
    },
  }
}

export default defineConfig({
  plugins: [react(), ga4Plugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
